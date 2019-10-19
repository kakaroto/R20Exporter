
JS_FILES=src/R20Exporter.js dist/R20Exporter.user.js dist/R20Exporter_standalone.js

%.js: %.pyj
	rapydscript lint --globals '$$' --noqa eol-semicolon $<
	rapydscript $(PYJ_FLAGS) $< --output $@


all: $(JS_FILES)

dist/R20Exporter_standalone.js: src/R20Exporter.js
	mkdir -p dist/
	yuicompressor libs/FileSaver.js > $@
	yuicompressor libs/zipjs/zip.js >> $@
	yuicompressor libs/zipjs/zip-fs.js >> $@
	yuicompressor libs/zipjs/zip-ext.js >> $@
	yuicompressor libs/zipjs/deflate.js >> $@
	cat src/R20Exporter.js >> $@



dist/R20Exporter.user.js: tampermonkey.header src/R20Exporter.js
	mkdir -p dist/
	cat tampermonkey.header > $@
	echo "window.saveAs = saveAs;" >> $@ ;# Needed to expose the saveAs interface to the exporter in tampermonkey
	echo "window.zip = zip;" >> $@ ;# Needed to expose the zip interface to the exporter in tampermonkey
	cat src/R20Exporter.js >> $@

clean:
	rm -f $(JS_FILES) *~ */*~ src/*.pyj-cached

$(JS_FILES): $(PYJ_DEPS)


.PHONY: all
