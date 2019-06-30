
JS_FILES=src/roll20_exporter.js dist/R20Exporter.js dist/R20Exporter_standalone.js
CONVERT_FLAGS=--restrict-movement --enable-fog --use-original-image-urls $(CONVERT_OPTIONS)

%.js: %.pyj
	rapydscript lint $< || true
	rapydscript $(PYJ_FLAGS) $< --output $@


all: $(JS_FILES)

dist/R20Exporter_standalone.js: src/roll20_exporter.js
	mkdir -p dist/
	yuicompressor libs/FileSaver.js > $@
	yuicompressor libs/zipjs/zip.js >> $@
	yuicompressor libs/zipjs/zip-fs.js >> $@
	yuicompressor libs/zipjs/zip-ext.js >> $@
	yuicompressor libs/zipjs/deflate.js >> $@
	cat src/roll20_exporter.js >> $@



dist/R20Exporter.js: tampermonkey.header src/roll20_exporter.js
	mkdir -p dist/
	cat tampermonkey.header > $@
	echo "window.saveAs = saveAs;" >> $@ ;# Needed to expose the saveAs interface to the exporter in tampermonkey
	echo "window.zip = zip;" >> $@ ;# Needed to expose the zip interface to the exporter in tampermonkey
	cat src/roll20_exporter.js >> $@

windows:
	rm -rf windows
	python setup.py py2exe

release: all windows
	zip 

clean:
	rm -f $(JS_FILES) *~ */*~ src/*.pyj-cached

convert: convert-waterdeep  convert-lmop  convert-cos

convert-waterdeep:
	@rm -rf worlds/waterdeep-demo
	./src/R20Converter.py $(CONVERT_FLAGS) worlds/waterdeep-demo "waterdeep demo.zip"
convert-lmop:
	@rm -rf worlds/LMoP
	./src/R20Converter.py $(CONVERT_FLAGS) worlds/LMoP "The Lost Mine of Phandelver.zip"
convert-cos:
	@rm -rf worlds/curse-of-strahd
	./src/R20Converter.py $(CONVERT_FLAGS) worlds/curse-of-strahd "Curse of Strahd.zip"

$(JS_FILES): $(PYJ_DEPS)


.PHONY: all windows release
