

class R20Exporter {
    constructor(title) {
        this.title = title
        this.campaign = {}
        this.zip = null
        this._pending_operations = []
        this._total_size = 0
        this.console = new ModalWindow("Exporting Campaign to ZIP file", "r20exporter-modal")
        this.console.warn("Note that you should not open a different campaign in Roll20 as it can interfere with the download of some resources.")
        this.console.warn("<strong>DISCLAIMER: Please note that using this extension to export a module from the marketplace may infringe on the Marketplace Asset License and/or Roll20 EULA.</strong>")
        this.console.warn("<em>If you've found this extension useful, please consider supporting the author on <a id='r20exporter-patreon-link' href='#'>Patreon</a>. Thank you!</em>")
        $("#r20exporter-patreon-link").click((event) => {
            event.stopPropagation()
            window.open('https://patreon.com/kakaroto')
        })
    }

    get TOTAL_STEPS() {
        return 10;
    }

    newPendingOperation() {
        const id = Math.random().toString(36)
        this._pending_operations.push(id)
        this._updateSecondProgress()
        return id
    }

    hasPendingOperation() {
        return this._pending_operations.length > 0
    }

    completedOperation(id) {
        this._pending_operations.remove(id)
        this._updateSecondProgress()
        return !this.hasPendingOperation()
    }

    clearPendingOperations() {
        this._pending_operations = []
        this._updateSecondProgress()
    }

    _updateSecondProgress() {
        let left = this._pending_operations.length
        let total = this.console.second_progress.total
        this.console.setLabel2(left + " operations in progress")
        if (left > total)
            total = left
        if (left == 0)
            left = total = 1
        this.console.setProgress2(total - left, total)
    }

    findID(id, obj_type = null) {
        const find_id = (o) => o.id == id
        if (obj_type == "handout" || obj_type === null) {
            const handout = this.campaign.handouts.find(find_id)
            if (handout)
                return handout
        }
        if (obj_type == "page" || obj_type === null) {
            const page = this.campaign.pages.find(find_id)
            if (page)
                return page
        }
        if (obj_type == "character" || obj_type === null) {
            const char = this.campaign.characters.find(find_id)
            if (char)
                return char
        }
        if (obj_type == "track" || obj_type === null) {
            const track = this.campaign.jukebox.find(find_id)
            if (track)
                return track
        }
        return null
    }

    _createZipFile() {
        return new zip.fs.FS().root
    }

    _addZipFolder(zipFs, filename) {
        return zipFs.addDirectory(filename)
    }

    _addFileToZip(zipFs, filename, content) {
        zipFs.addBlob(filename, content)
        if (content.size !== undefined) {
            this._total_size += content.size
        } else if (content.length !== undefined) {
            this._total_size += content.length
        }
    }

    _exportZip(zipFs, fileEntry, onend, onprogress, onerror) {
        zip.useWebWorkers = false
        this._current_size = 0

        const addEntryToZipWriter = (writer, zipFs) => {
            setTimeout(() => addEntryToZipWriterDelayed(writer, zipFs), 0)
        }

        const addEntryToZipWriterDelayed = (writer, zipFs) => {
            const makeCB = (c) => {
                return () => {
                    this._current_size += c.data ? c.data.size : 0
                    onprogress(this._current_size, this._total_size)
                    addEntryToZipWriter(writer, zipFs)
                }
            }
            const partialprogress = (bytes) => onprogress(this._current_size + bytes, this._total_size)

            // Find the current folder/item we need to add
            let current = zipFs
            for (let idx of this._zip_add_indices) {
                current = current.children[idx]
            }

            // We're out of children, go back to the parent
            if (current === undefined) {
                this._zip_add_indices.pop()
                // If the list is empty, we've gone back to the root and we're done
                if (this._zip_add_indices.length == 0) {
                    writer.close(onend)
                } else {
                    // Now that we're done with this folder, go to the next child of the parent
                    this._zip_add_indices[this._zip_add_indices.length-1] += 1
                    addEntryToZipWriterDelayed(writer, zipFs)
                }
                return
            }

            if (current.directory) {
                // Add the directory and when we're done, start adding its children from index 0
                this._zip_add_indices.push(0)
                writer.add(current.getFullname(), null, makeCB(current),
                    partialprogress, { directory: current.directory })
            } else {
                // Add the file and when we're done, add the next child of the parent
                this._zip_add_indices[this._zip_add_indices.length-1] += 1
                writer.add(current.getFullname(), new current.Reader(current.data, onerror), makeCB(current),
                    partialprogress, { })
            }
        }

        const zipWriterCreated = (writer) => {
            // Need to keep list of where we are in the add process, it seems
            // that we can't add two files at the same time, they conflict and we
            // can't add them recursively like zip.fs.FS.exportZip does because we'll
            // run out of stack quickly due to the number of files.
            this._zip_add_indices = [0]
            addEntryToZipWriter(writer, zipFs)
        }

        zip.createWriter(new zip.FileWriter(fileEntry, "application/zip"), zipWriterCreated, onerror)
    }

    // Based on https://gildas-lormeau.github.io/zip.js/demos/demo1.js
    _saveZipToFile(zipFs, filename) {
        const BYTES = ["Bytes", "KB", "MB", "GB"]
        const DIV = [1, 1024, 1024 * 1024, 1024 * 1024 * 1024]
        let size = this._total_size
        let div = 0
        while ((size / 1024) > 1 && div + 1 < DIV.length) {
            size /= 1024
            div += 1
        }
        this.console.warn("Done downloading resources!")
        this.console.warn("It is highly recommended to keep this tab focused and the window non-minimized during the entire process\n" +
                     "otherwise it could take hours instead of minutes to generate the ZIP file for your campaign.\n" +
                     "You can separate the tab into its own window if you want to keep using your browser in the meantime.")
        this.console.log("Generating ZIP file with ", size.toFixed(2), BYTES[div] + " of data")
        this.console.setLabel1("Generating " + size.toFixed(2) + BYTES[div] + " ZIP file (" + this.TOTAL_STEPS + "/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(this.TOTAL_STEPS - 1, this.TOTAL_STEPS)

        const requestFileSystem = window.webkitRequestFileSystem || window.mozRequestFileSystem || window.requestFileSystem

        const createTempFile = (tempCB) => {
            let tmpFilename = "tmp.zip"
            requestFileSystem(window.TEMPORARY, 4 * 1024 * 1024 * 1024,
                (filesystem) => {
                    const create = () => filesystem.root.getFile(tmpFilename, { create: true }, (zipFile) => tempCB(zipFile))
                    // Get the tmp.zip if it exists then delete it and create new
                    filesystem.root.getFile(tmpFilename, null,
                        (entry) => entry.remove(create, create), create)
                }
            )
        }

        // Create a tmp.zip file in temporary storage
        createTempFile((fileEntry) => {
            this._exportZip(zipFs, fileEntry, () => {
                    this.console.warn("Congratulations! The Campaign.zip file was generated successfully.\nStarting download.")
                    this.console.setProgress1(this.TOTAL_STEPS, this.TOTAL_STEPS)
                    setTimeout(() => this.console.hide(), 10000)
                    fileEntry.file((f) => saveAs(f, filename))
                }, (current, total) => {
                    const percent = 100 * current / total
                    this.console.setProgress2(current, total)
                    this.console.setLabel2("Generating ZIP file (" + percent.toFixed(2) + "%)")
                }, (message) => {
                    this.console.log("Error creating zip file writer : ", message)
                })
            })
    }
    _parseSides(sides) {
        let result = []
        const side_list = sides.split("|")
        for (let side of side_list) {
            if (side != "")
                result.push(decodeURIComponent(side))
        }
        return result
    }

    parsePage(page) {
        let data = page.toJSON()
        data.zorder = data.zorder.split(",")
        data.graphics = page.thegraphics ? page.thegraphics.toJSON() : []
        data.texts = page.thetexts ? page.thetexts.toJSON() : []
        data.paths = page.thepaths ? page.thepaths.toJSON() : []
        for (let path of data.paths) {
            path.path = JSON.parse(path.path)
        }
        for (let graphic of data.graphics) {
            if (graphic.sides)
                graphic.sides = this._parseSides(graphic.sides)
        }
        return data
    }

    parsePages(pages) {
        let array = []
        for (let page of pages.models) {
            if (page.fullyLoaded) {
                array.push(this.parsePage(page))
            } else {
                // Archived pages are not loaded. We can tell them to load but we have
                // no callbacks on when that is done, so we need to wait before parsing them.
                const id = this.newPendingOperation()
                const makeCB = (a, i, p) => {
                    return () => {
                        a.push(this.parsePage(p))
                        this.completedOperation(i)
                    }
                }
                page.fullyLoadPage()
                setTimeout(makeCB(array, id, page), 1000)
            }
        }
        this.console.log("Finished parsing pages.")
        return array
    }

    updateModel(data, key, blob, id, cb) {
        if (["bio", "gmnotes", "notes"].includes(key)) {
            data[key] = unescape(blob)
        } else if (key === "defaulttoken") {
            try {
                data[key] = JSON.parse(blob)
            } catch (err) {
                // Some one got invalid json data it seems
                data[key] = {}
            }
            if (data[key].sides)
                data[key].sides = this._parseSides(data[key].sides)
        } else {
            data[key] = blob
        }
        if (this.completedOperation(id) && cb)
            cb()
    }


    parseCharacter(character, cb) {
        let data = character.toJSON()
        data.inplayerjournals = data.inplayerjournals.split(",")
        data.controlledby = data.controlledby.split(",")
        if (data.bio != "") {
            delete data.bio
            const bio_id = this.newPendingOperation()
            character._getLatestBlob("bio", (blob) => this.updateModel(data, "bio", blob, bio_id, cb))
        }
        if (data.gmnotes != "") {
            delete data.gmnotes
            const gmnotes_id = this.newPendingOperation()
            character._getLatestBlob("gmnotes", (blob) => this.updateModel(data, "gmnotes", blob, gmnotes_id, cb))
        }
        if (data.defaulttoken != "") {
            delete data.defaulttoken
            const token_id = this.newPendingOperation()
            character._getLatestBlob("defaulttoken", (blob) => this.updateModel(data, "defaulttoken", blob, token_id, cb))
        }
        data.attributes = character.attribs.toJSON()
        data.abilities = character.abilities.toJSON()
        return data
    }

    parseCharacters(characters, cb) {
        let array = []
        for (let character of characters.models) {
            array.push(this.parseCharacter(character, cb))
        }
        this.console.log("Finished parsing characters.")
        return array
    }

    parseHandout(handout, cb) {
        let data = handout.toJSON()
        data.inplayerjournals = data.inplayerjournals.split(",")
        data.controlledby = data.controlledby.split(",")
        if (data.notes != "") {
            delete data.notes
            const notes_id = this.newPendingOperation()
            handout._getLatestBlob("notes", (blob) => this.updateModel(data, "notes", blob, notes_id, cb))
        }
        if (data.gmnotes != "") {
            delete data.gmnotes
            const gmnotes_id = this.newPendingOperation()
            handout._getLatestBlob("gmnotes", (blob) => this.updateModel(data, "gmnotes", blob, gmnotes_id, cb))
        }
        return data
    }

    parseHandouts(handouts, cb) {
        let array = []
        for (let handout of handouts.models) {
            array.push(this.parseHandout(handout, cb))
        }
        this.console.log("Finished parsing handouts.")
        return array
    }

    parsePlayer(player) {
        let data = player.toJSON()
        if (data.journalfolderstatus)
            data.journalfolderstatus = data.journalfolderstatus.split(",")
        if (data.jukeboxfolderstatus)
            data.jukebosfolderstatus = data.jukeboxfolderstatus.split(",")
        if (data.macrobar) {
            let macros = data.macrobar.split(",")
            data.macrobar = []
            for (let macro of macros) {
                if (macro != "") {
                    let [src, id] = macro.split("|")
                    data.macrobar.push({ "src": src, "id": id })
                }
            }
        }
        if (data.adv_fow_revealed)
            data.adv_fow_revealed = JSON.parse(data.adv_fow_revealed)
        return data
    }

    parsePlayers(players) {
        let array = []
        for (let player of players.models)
            array.push(this.parsePlayer(player))
        this.console.log("Finished parsing players.")
        return array
    }

    parseMacros(players) {
        let array = []
        for (let player of players.models) {
            let macros = player.macros.toJSON()
            for (let macro of macros)
                macro.player_id = player.id
            array.push(...macros)
        }
        this.console.log("Finished parsing Macros.")
        return array
    }

    parseDecks(decks) {
        let array = []
        for (let deck of decks.models) {
            let data = deck.toJSON()
            data.cards = deck.cards.toJSON()
            data.currentDeck = data.currentDeck.split(",")
            data.discardPile = data.discardPile.split(",")
            array.push(data)
        }
        this.console.log("Finished parsing Decks.")
        return array
    }

    parseTables(tables) {
        let array = []
        for (let table of tables.models) {
            let data = table.toJSON()
            data.items = table.tableitems.toJSON()
            array.push(data)
        }
        this.console.log("Finished parsing Rollable Tables.")
        return array
    }

    loadArchivedPages() {
        let num_loaded = 0
        for (let page of Campaign.pages.models) {
            if (!page.fullyLoaded) {
                page.fullyLoadPage()
                num_loaded += 1
            }
        }
        return num_loaded
    }

    _parseChatArchiveHTML(obj, html) {
        const scripts = $(html).filter("script[type='text/javascript']")
        const prefix = "var msgdata = \""
        for (let i = 0; i < scripts.length; i++) {
            const content = scripts[i].textContent.trim()
            if (content.startsWith(prefix)) {
                const start = prefix.length
                const end = content.indexOf("\";", start)
                try {
                    const chat = atob(content.slice(start, end))
                    obj.chat_archive = JSON.parse(chat)
                } catch (e) {
                    this.console.log("Unable to parse chat data: ", e)
                }
                break
            }
        }
    }

    _fetchChatArchive(obj, done) {
        const id = this.newPendingOperation()
        const errorcb = () => {
            if (this.completedOperation(id) && done)
                done()
        }
        const cb = (blob) => {
            let f = new FileReader()
            f.onerror = errorcb
            f.onabort = errorcb
            f.onload = () => {
                this._parseChatArchiveHTML(obj, f.result)
                if (this.completedOperation(id) && done)
                    done()
            }
            f.readAsText(blob)
        }
        this.downloadResource("https://app.roll20.net/campaigns/chatarchive/" + obj.campaign_id + "/?p=1&onePage=true", cb, errorcb)
    }

    _parseCampaignDelayed(result, cb) {
        const done = () => {
            if (cb)
                cb(result)
        }
        // Make sure we don't get callback called before we finish parsing all the items
        const id = this.newPendingOperation()
        this.console.setLabel1("Extracting Campaign data (2/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(1, this.TOTAL_STEPS)
        result.handouts = this.parseHandouts(Campaign.handouts, done)
        result.characters = this.parseCharacters(Campaign.characters, done)
        result.pages = this.parsePages(Campaign.pages)
        result.players = this.parsePlayers(Campaign.players)
        result.macros = this.parseMacros(Campaign.players)
        result.decks = this.parseDecks(Campaign.decks)
        result.tables = this.parseTables(Campaign.rollabletables)
        result.jukebox = Jukebox.playlist.toJSON()
        result.jukeboxfolder = result.jukeboxfolder != "" ? JSON.parse(result.jukeboxfolder) : []
        result.journalfolder = result.journalfolder != "" ? JSON.parse(result.journalfolder) : []
        result.turnorder = result.turnorder != "" ? JSON.parse(result.turnorder) : []
        this._addOrphanedElementsToFolder(result.jukeboxfolder, result.jukebox)
        this._addOrphanedElementsToFolder(result.journalfolder, result.handouts)
        this._fetchChatArchive(result, done)
        this.console.log("Download operations in progress : ", this._pending_operations.length)
        this.console.setProgress2(0, this._pending_operations.length)
        this.console.setLabel1("Downloading Chat archive, Characters and Handout assets (3/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(2, this.TOTAL_STEPS)
        if (this.completedOperation(id))
            done()
    }

    async parseCampaign(cb) {
        const character_num_attributes = Campaign.characters.models.map((c) => c.attribs.length)
        if (!character_num_attributes.all((n) => n > 0)) {
            const num_loaded_sheets = character_num_attributes.count((n) => n > 0)
            this.console.log("Waiting for character sheets to finish loading (" + num_loaded_sheets + "/" + character_num_attributes.length + ")")
            this.console.setLabel1("Waiting for character sheets to finish loading (1/" + this.TOTAL_STEPS + ")")
            this.console.setLabel2(num_loaded_sheets + "/" + character_num_attributes.length + " character sheets loaded")
            this.console.setProgress1(0, this.TOTAL_STEPS)
            this.console.setProgress2(num_loaded_sheets, character_num_attributes.length)
            return setTimeout(() => this.parseCampaign(cb), 1000)
        }

        const archived_pages = Campaign.pages.models.filter((p) => !p.fullyLoaded)
        if (archived_pages.length > 0) {
            const total_pages = Campaign.pages.models.length
            const num_loaded_pages = total_pages - archived_pages.length
            const loading_page = archived_pages[0]

            loading_page.fullyLoadPage()
            this.console.log("Waiting for archived pages to finish loading (" + num_loaded_pages + "/" + total_pages + ")")
            this.console.setLabel1("Waiting for archived pages to finish loading (1/" + this.TOTAL_STEPS + ")")
            this.console.setLabel2(num_loaded_pages + "/" + total_pages + " pages loaded")
            this.console.setProgress1(0, this.TOTAL_STEPS)
            this.console.setProgress2(num_loaded_pages, total_pages)

            let timeout = 5000
            const check_page = () => {
                timeout -= 100
                if (timeout == 0 || loading_page.thegraphics.length > 0 || loading_page.thetexts.length > 0 || loading_page.thepaths.length > 0)
                    setTimeout(() => this.parseCampaign(cb), 1000)
                else
                    setTimeout(check_page, 100)
            }
            return setTimeout(check_page, 100)
        }


        let result = Campaign.toJSON()
        result["R20Exporter_format"] = "1.0"
        result.campaign_title = this.title
        result.account_id = d20_account_id
        result.campaign_id = campaign_id
        this.campaign = result
        this._parseCampaignDelayed(result, cb)

        return result
    }

    
    jsonToBlob(obj) {
        return new Blob([JSON.stringify(obj, undefined, 4)], { "type": 'text/json' })
    }
    saveCampaign(filename = null) {
        saveAs(this.jsonToBlob(this.campaign), filename || this.title + ".json")
    }

    exportCampaignJson(filename = null) {
        this.parseCampaign(() => this.saveCampaign(filename))
    }

    exportCampaign() {
        this.exportCampaignJson()
    }

    _imageToBlob(img, id, cb) {
        let c = document.createElement("canvas")
        let ctx = c.getContext("2d")
        c.width = img.naturalWidth
        c.height = img.naturalHeight
        ctx.drawImage(img, 0, 0)
        c.toBlob((blob) => {
            this.completedOperation(id)
            cb(blob)
        }, "image/jpeg", 0.75)
    }

    downloadImageViaCanvas(url, cb, errorCB = null) {
        const id = this.newPendingOperation()
        let img = new Image()
        img.onload = (ev) => this._imageToBlob(img, id, cb)
        img.onerror = (error) => {
            this.completedOperation(id)
            if (errorCB)
                errorCB()
        }
        img.crossOrigin = ""
        img.src = url
    }

    downloadResource(url, cb, errorCB = null) {
        const id = this.newPendingOperation()

        fetch(url).then((response) => {
            if (response.status == 200 || response.status == 0) {
                return Promise.resolve(response.blob())
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }
        ).then((blob) => {
            this.completedOperation(id)
            if (cb)
                cb(blob)
        }
        ).catch((error) => {
            this.completedOperation(id)
            if (errorCB)
                errorCB()
        }
        )
    }

    // Most avatar/imgsrc URLs use the 'med' filename, even for the huge map files. We should download the appropriate sized
    // file depending on the image size we are looking for. We just download the highest resolution file that we can instead.
    downloadR20Resource(folder, prefix, url, finallyCB, try_files = ["original", "max", "med", "thumb"], use_canvas = false) {
        let filename = url.split("/").slice(-1)[0].split(".")[0]
        // This is needed so we download the higher res file first.
        // Unfortunately, there are some CORS issues sometimes, so if higher res file fails, download the lower one.
        if (try_files.length > 0) {
            let new_url = url
            if (["original", "max", "med", "thumb"].includes(filename)) {
                new_url = url.replace("/" + filename + ".", "/" + try_files[0] + ".")
            } else {
                try_files = [""]
            }

            const successCB = this._makeAddBlobToZip(folder, prefix + ".png", finallyCB)
            const errorCB = () => {
                this.downloadR20Resource(folder, prefix, url, finallyCB, try_files.slice(1), use_canvas)
            }

            if (use_canvas) {
                this.downloadImageViaCanvas(new_url, successCB, errorCB)
            } else {
                this.downloadResource(new_url, successCB, errorCB)
            }
        } else {
            if (use_canvas) {
                this.console.log("Couldn't download ", url, " with any alternative filename. Resource has become unavailable")
                finallyCB()
            } else {
                this.downloadR20Resource(folder, prefix, url, finallyCB, undefined, true)
            }
        }
    }

    _makeNameUnique(names, orig_name) {
        const name = String(names.length).padStart(3, "0") + " - " + orig_name
        names.push(name)
        return name
    }

    _flattenFolderEntries(folder, _list = []) {
        for (let entry of folder) {
            if (typeof(entry) == "string") {
                _list.push(entry)
            } else {
                this._flattenFolderEntries(entry.i, _list)
            }
        }
        return _list
    }
    _addOrphanedElementsToFolder(folder, elements) {
        const all_ids = this._flattenFolderEntries(folder)
        for (let element of elements) {
            if (!all_ids.includes(element.id))
                folder.push(element.id)
        }
    }

    _makeAddBlobToZip(folder, filename, finallyCB) {
        return (blob) => {
            this._addFileToZip(folder, filename, blob)
            finallyCB()
        }
    }

    _addCharacterToZip(folder, character, finallyCB) {
        this._addFileToZip(folder, "character.json", this.jsonToBlob(character))
        if ((character.avatar || "") != "") {
            this.downloadR20Resource(folder, "avatar", character.avatar, finallyCB)
        }
        if (character.defaulttoken) {
            if ((character.defaulttoken.imgsrc || "") != "") {
                this.downloadR20Resource(folder, "token", character.defaulttoken.imgsrc, finallyCB)
            }
            if (character.defaulttoken.sides) {
                for (let [i, side] of character.defaulttoken.sides.entries())
                    this.downloadR20Resource(folder, "side_" + i, side, finallyCB)
            }
        }

        if ((character.bio || "") != "")
            this._addFileToZip(folder, "bio.html", new Blob([character.bio]))
        if ((character.gmnotes || "") != "")
            this._addFileToZip(folder, "gmnotes.html", new Blob([character.gmnotes]))
    }

    _addHandoutToZip(folder, handout, finallyCB) {
        this._addFileToZip(folder, "handout.json", this.jsonToBlob(handout))
        if ((handout.avatar || "") != "")
            this.downloadR20Resource(folder, "avatar", handout.avatar, finallyCB)
        if ((handout.notes || "") != "")
            this._addFileToZip(folder, "notes.html", new Blob([handout.notes]))
        if ((handout.gmnotes || "") != "")
            this._addFileToZip(folder, "gmnotes.html", new Blob([handout.gmnotes]))
    }

    _addJournalToZip(folder, journal, finallyCB) {
        let names = []
        for (let journal_entry of journal) {
            if (typeof(journal_entry) == "string") {
                let handout = this.findID(journal_entry, "handout")
                if (handout !== null) {
                    let name = this._makeNameUnique(names, handout.name)
                    let handout_dir = this._addZipFolder(folder, name)
                    this._addHandoutToZip(handout_dir, handout, finallyCB)
                } else {
                    let character = this.findID(journal_entry, "character")
                    if (character !== null) {
                        let name = this._makeNameUnique(names, character.name)
                        let char_dir = this._addZipFolder(folder, name)
                        this._addCharacterToZip(char_dir, character, finallyCB)
                    } else {
                        this.console.log("Can't find handout with ID : ", journal_entry)
                        continue
                    }
                }
            } else {
                let name = this._makeNameUnique(names, journal_entry.n)
                let child_dir = this._addZipFolder(folder, name)
                this._addJournalToZip(child_dir, journal_entry.i, finallyCB)
            }
        }
    }

    _addPlaylistToZip(folder, playlist, finallyCB) {
        let names = []
        for (let audio of playlist) {
            if (typeof(audio) == "string") {
                let track = this.findID(audio, "track")
                if (track !== null) {
                    let name = this._makeNameUnique(names, track.title)
                    let url = null
                    if (name.slice(-4) != ".mp3")
                        name += ".mp3"
                    if (track.source == "My Audio") {
                        url = "https://app.roll20.net/audio_library/play/" + this.campaign.campaign_id + "/" + track.track_id
                    } else if (track.source == "Tabletop Audio") {
                        url = "https://s3.amazonaws.com/cdn.roll20.net/ttaudio/" + track.track_id.split("-")[0]
                    } else if (track.source == "Incompetech") {
                        url = "https://s3.amazonaws.com/cdn.roll20.net/incompetech/" + track.track_id.split("-")[0]
                    } else if (track.source == "Battlebards") {
                        let filename = track.track_id.split(".mp3-")[0] + ".mp3"
                        filename = encodeURIComponent(filename.replace(/%20%2D%20/g, " - "))
                        const id = this.newPendingOperation()
                        const _makePostCB = (folder, name, finallyCB, id) => {
                            return (url) => {
                                const errorCB = () => {
                                    this.console.log("Couldn't download Jukebox audio from url : ", url)
                                }
                                this.downloadResource(url, this._makeAddBlobToZip(folder, name, finallyCB), errorCB)
                                this.completedOperation(id)
                            }
                        }
                        const _makePostErrorCB = (track_id, finallyCB, id) => {
                            return () => {
                                this.console.log("Couldn't download Jukebox audio from Battlebards : ", track_id)
                                this.completedOperation(id)
                                finallyCB()
                            }
                        }

                        $.post("/editor/audiourl/bb", { trackurl: filename }, _makePostCB(folder, name, finallyCB, id))
                            .fail(_makePostErrorCB(track.track_id, finallyCB, id))
                    } else {
                        this.console.log("Can't download Audio track (", track.title, "). Unsupported source : ", track.source)
                    }
                    if (url) {
                        const errorCB = (url) => {
                            return () => this.console.log("Couldn't download Jukebox audio from url : ", url)
                        }
                        this.downloadResource(url, this._makeAddBlobToZip(folder, name, finallyCB), errorCB(url))
                    }
                } else {
                    this.console.log("Can't find Audio Track with ID : ", track)
                    continue
                }
            } else {
                let name = this._makeNameUnique(names, audio.n)
                let child_dir = this._addZipFolder(folder, name)
                this._addPlaylistToZip(child_dir, audio.i, finallyCB)
            }
        }
    }

    _addPageToZip(folder, page, finallyCB) {
        this._addFileToZip(folder, "page.json", this.jsonToBlob(page))
        if ((page.thumbnail || "") != "") {
            this.downloadR20Resource(folder, "thumbnail", page.thumbnail, finallyCB)
        }
        if (page.graphics.length > 0) {
            const graphics = this._addZipFolder(folder, "graphics")
            for (let graphic of page.graphics) {
                this.downloadR20Resource(graphics, graphic.id, graphic.imgsrc, finallyCB)
                if (graphic.sides) {
                    for (let [i, side] of graphic.sides.entries())
                        this.downloadR20Resource(graphics, graphic.id + "_side_" + i, side, finallyCB)
                }
            }
        }
    }


    _saveCampaignZipCharacters(checkZipDone) {
        this.console.log("Saving Characters")
        this.console.setLabel1("Saving Characters (4/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(3, this.TOTAL_STEPS)
        const id = this.newPendingOperation()
        if (this.campaign.characters.length > 0) {
            const characters = this._addZipFolder(this.zip, "characters")
            let names = []
            for (let character of this.campaign.characters) {
                let name = this._makeNameUnique(names, character.name)
                let char_dir = this._addZipFolder(characters, name)
                this._addCharacterToZip(char_dir, character, checkZipDone)
            }
        }

        this.savingStep = 1
        this.completedOperation(id)
        checkZipDone(true)
    }

    _saveCampaignZipJournal(checkZipDone) {
        this.console.log("Saving Journal")
        this.console.setLabel1("Saving Journal handouts (5/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(4, this.TOTAL_STEPS)
        const id = this.newPendingOperation()
        if (this.campaign.journalfolder.length > 0) {
            let journal = this._addZipFolder(this.zip, "journal")
            this._addJournalToZip(journal, this.campaign.journalfolder, checkZipDone)
        }

        this.savingStep = 2
        this.completedOperation(id)
        checkZipDone(true)
    }

    _saveCampaignZipPage(checkZipDone) {
        const id = this.newPendingOperation()
        if (this.savingPageIdx >= this.campaign.pages.length) {
            this.savingStep = 4
            this.console.setPageLabel(null)
        } else {
            let page = this.campaign.pages[this.savingPageIdx]
            let name = page.name || "Untitled"
            this.console.setPageProgress(this.savingPageIdx, this.campaign.pages.length)
            this.savingPageIdx += 1
            this.console.setPageLabel(name + " (" + this.savingPageIdx + "/" + this.campaign.pages.length + ")")
            this.console.log("Saving Page : ", name, "(", this.savingPageIdx, "/", this.campaign.pages.length, ")")
            name = this._makeNameUnique(this.names, name)
            let page_dir = this._addZipFolder(this.pages, name)
            this._addPageToZip(page_dir, page, checkZipDone)
        }

        this.completedOperation(id)
        checkZipDone(true)
    }

    _saveCampaignZipPages(checkZipDone) {
        this.console.log("Saving ", this.campaign.pages.length, " Pages")
        this.console.setLabel1("Saving Pages (6/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(5, this.TOTAL_STEPS)
        if (this.campaign.pages.length > 0) {
            this.pages = this._addZipFolder(this.zip, "pages")
            this.names = []
        }
        this.savingStep = 3
        this.savingPageIdx = 0
        checkZipDone(true)
    }

    _saveCampaignZipJukebox(checkZipDone) {
        this.console.log("Saving Jukebox audio")
        this.console.setLabel1("Saving Jukebox audio (7/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(6, this.TOTAL_STEPS)
        const id = this.newPendingOperation()
        if (this.campaign.jukeboxfolder.length > 0) {
            let jukebox = this._addZipFolder(this.zip, "jukebox")
            this._addPlaylistToZip(jukebox, this.campaign.jukeboxfolder, checkZipDone)
        }
        this.savingStep = 5
        this.completedOperation(id)
        checkZipDone(true)
    }


    _saveCampaignZipDecks(checkZipDone) {
        this.console.log("Saving Decks")
        this.console.setLabel1("Saving Decks (8/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(7, this.TOTAL_STEPS)
        const id = this.newPendingOperation()
        if (this.campaign.decks.length > 0) {
            let decks = this._addZipFolder(this.zip, "decks")
            let names = []
            for (let deck of this.campaign.decks) {
                let name = this._makeNameUnique(names, deck.name)
                let deck_dir = this._addZipFolder(decks, name)
                if (deck.avatar)
                    this.downloadR20Resource(deck_dir, "avatar", deck.avatar, checkZipDone)
                let card_names = []
                for (let card of deck.cards) {
                    let card_name = this._makeNameUnique(card_names, card.name || "")
                    if (card.avatar)
                        this.downloadR20Resource(deck_dir, card_name, card.avatar, checkZipDone)
                }
            }
        }
        this.savingStep = 6
        this.completedOperation(id)
        checkZipDone(true)
    }

    _saveCampaignZipTables(checkZipDone) {
        this.console.log("Saving Rollable Tables")
        this.console.setLabel1("Saving Rollable Tables (9/" + this.TOTAL_STEPS + ")")
        this.console.setProgress1(8, this.TOTAL_STEPS)
        const id = this.newPendingOperation()
        if (this.campaign.tables.length > 0) {
            let tables = this._addZipFolder(this.zip, "tables")
            let names = []
            for (let table of this.campaign.tables) {
                let name = this._makeNameUnique(names, table.name)
                let table_dir = this._addZipFolder(tables, name)
                let item_names = []
                for (let item of table.items) {
                    if (item.avatar) {
                        let item_name = this._makeNameUnique(item_names, item.name || "")
                        this.downloadR20Resource(table_dir, item_name, item.avatar, checkZipDone)
                    }
                }
            }
        }
        this.savingStep = 7
        this.completedOperation(id)
        checkZipDone(true)
    }

    saveCampaignZip(filename = null) {
        if (this.zip !== null) {
            this.console.error("Saving already in progress. Can't be cancelled.")
            return
        }
        this._zip_filename = filename || (this.title + ".zip")
        this.zip = this._createZipFile()
        this._total_size = 0
        this.savingStep = 0
        this._addFileToZip(this.zip, 'campaign.json', this.jsonToBlob(this.campaign))
        if (this.campaign.chat_archive)
            this._addFileToZip(this.zip, 'chat_archive.json', this.jsonToBlob(this.campaign.chat_archive))
        this._checkZipDone()
    }

    _checkZipDone(show_pending = false) {
        if (!this.hasPendingOperation()) {
            //this.console.log("No more pending operations. Current step is ", this.savingStep)
            const checkZipDone = (show_pending) => this._checkZipDone(show_pending)

            if (this.savingStep == 0) {
                setTimeout(() => this._saveCampaignZipCharacters(checkZipDone), 0)
                //this.savingStep = 4
                //this._checkZipDone(true)
            } else if (this.savingStep == 1) {
                setTimeout(() => this._saveCampaignZipJournal(checkZipDone), 0)
            } else if (this.savingStep == 2) {
                setTimeout(() => this._saveCampaignZipPages(checkZipDone), 0)
            } else if (this.savingStep == 3) {
                setTimeout(() => this._saveCampaignZipPage(checkZipDone), 0)
            } else if (this.savingStep == 4) {
                setTimeout(() => this._saveCampaignZipJukebox(checkZipDone), 0)
            } else if (this.savingStep == 5) {
                setTimeout(() => this._saveCampaignZipDecks(checkZipDone), 0)
            } else if (this.savingStep == 6) {
                setTimeout(() => this._saveCampaignZipTables(checkZipDone), 0)
            } else {
                setTimeout(() => {
                    this._saveZipToFile(this.zip, this._zip_filename)
                    this.zip = null
                }, 0)
            }
            if (show_pending) {
                this.console.log("Download operations in progress : ", this._pending_operations.length)
                this.console.setProgress2(0, this._pending_operations.length)
            }
        }
    }


    exportCampaignZip(filename = null) {
        this.console.show()
        this.parseCampaign((campaign) => this.saveCampaignZip(filename))
    }

}

class ModalWindow {
    constructor(title = "", modalClass = "modal") {
        this.title = title
        const modal_div = $("body ." + modalClass)
        if (modal_div.length > 0) {
            modal_div.remove()
        }
        this.modal_div = $('<div class="' + modalClass + '"><div class="' + modalClass + '-content"></div></div>')
        const css = `
            /* The Modal (background) */
            .modal {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 100000; /* Sit on top */
                padding-top: 50px; /* Location of the box */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }
            
            /* Modal Content */
            .modal-content {
                background-color: #fefefe;
                margin: auto;
                padding: 20px;
                border: 3px solid #333;
                border-radius: 25px;
                width: 80%;
                height: 80%;
                overflow: auto; /* Enable scroll if needed */
                overflow-x: hidden; /* Disable horizontal scroll */
            }
            .modal-content .title {
                position: relative;
                top: -20px;
                left: -20px;
                width: calc(100% + 40px);
                text-align: center;
                color: white;
                background-color: black;
                font-size: 1.25em;
                font-weight: bold;
            }
            .modal-content .log {
                background-color: #ddd;
            }
            .modal-content .warn {
                background-color: gold;
                font-style: italic;
            }
        `.replace(/modal/g, modalClass)
        $("body").append($("<style>" + css + "</style>"))
        $("body").append(this.modal_div)
        this.content = this.modal_div.find("." + modalClass + "-content")
        this.main_progress = new ProgressBar()
        this.mp_current = this.mp_total = 1
        this.second_progress = new ProgressBar()
        this.sp_current = this.sp_total = 1
        this.page_progress = new ProgressBar()
        this.pp_current = this.pp_total = 1
        this.setPageLabel(null)
        this.clear()
        this.hide()
    }

    clear() {
        this.content.html("")
        this.content.append($('<div class="title">' + this.title + '</div>'))
        this.content.append(this.main_progress.getElement())
        this.content.append(this.page_progress.getElement())
        this.content.append(this.second_progress.getElement())
        this.content.append($('<div class="warn"></div>'))
        this.content.append($('<details class="log"><summary>Log</summary></details>'))
    }

    hide() {
        this.modal_div.css("display", "none")
    }

    show() {
        this.modal_div.css("display", "block")
    }

    append(content) {
        this.content.append($(content))
    }

    log(...args) {
        console.log(...args)
        let line = ""
        for (let a of args) {
            line += String(a) + " "
        }
        this.content.find(".log").append("<p>" + line.replace(/\n/g, "<br/>") + "</p>")
    }

    warn(...args) {
        console.warn(...args)
        let line = ""
        for (let a of args) {
            line += String(a) + " "
        }
        this.content.find(".warn").append($("<p>" + line.replace(/\n/g, "<br/>") + "</p"))
    }

    setLabel1(label) {
        this.main_progress.setLabel(label)
    }
    setLabel2(label) {
        this.second_progress.setLabel(label)
    }
    setPageLabel(label) {
        if (label) {
            this.page_progress.getElement().css("display", "block")
            this.page_progress.setLabel(label)
        } else {
            this.page_progress.getElement().css("display", "none")
            this.setPageProgress(0, 1)
        }
    }
    setProgress1(current, total = null) {
        this.main_progress.setProgress(current, total)
        this.mp_current = current
        this.mp_total = total ? total : this.main_progress.total
    }
    setProgress2(current, total = null) {
        this.second_progress.setProgress(current, total)
        this.sp_current = current
        this.sp_total = this.second_progress.total
        let percent = this.sp_current / this.sp_total
        if (this.pp_total > 1) {
            this.page_progress.setProgress(this.pp_current + percent)
            percent = this.pp_current / this.pp_total
        }
        this.main_progress.setProgress(this.mp_current + percent)
    }
    setPageProgress(current, total = null) {
        this.page_progress.setProgress(current, total)
        this.pp_current = current
        this.pp_total = this.page_progress.total
        let percent = this.pp_current / this.pp_total
        this.main_progress.setProgress(this.mp_current + percent)
    }
}


class ProgressBar {
    constructor(label = "", current = 0, total = 100) {
        this.progress = $(`<div style="width: 100%; background-color: grey; margin: 5px">
                               <span style="float: left; position: relative; left: 50%; line-height: 20px">
                                  <strong style="float: left; position: relative; left: -50%"></strong>
                               </span>
                               <div style="background-color: dodgerblue; height: 20px;"></div>
                             </div>`)
        this.setLabel(label)
        this.setProgress(current, total)
    }

    setLabel(label) {
        this.progress.find("strong").html(label)
    }

    setProgress(current, total = null) {
        if (total) {
            this.total = total
        }
        this.current = current
        let percent = this.getPercent()
        this.progress.find("div").css("width", percent.toFixed(2) + "%")
    }

    getPercent() {
        let percent = 100
        if (this.total !== 0)
            percent = this.current * 100 / this.total
        return percent
    }

    getElement() {
        return this.progress
    }
}

exporter = new R20Exporter($("head title").text().trim().replace(" | Roll20", ""))
document.addEventListener("R20ExporterZip", () => exporter.exportCampaignZip(), false)