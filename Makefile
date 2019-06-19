
JS_FILES=src/roll20_exporter.js r20exporter.js dist/R20Exporter.js
CONVERT_FLAGS=--restrict-movement --enable-fog --use-original-image-urls $(CONVERT_OPTIONS)

%.js: %.pyj
	rapydscript lint $< || true
	rapydscript $(PYJ_FLAGS) $< --output $@


all: $(JS_FILES)


r20exporter.js: tampermonkey.header  src/roll20_exporter.js
	cat $^ > $@

dist/R20Exporter.js: tampermonkey.header  src/roll20_exporter.js
	mkdir -p dist/
	cat tampermonkey.header > $@
	yuicompressor libs/FileSaver.js >> $@
	yuicompressor libs/zipjs/zip.js >> $@
	yuicompressor libs/zipjs/zip-fs.js >> $@
	yuicompressor libs/zipjs/zip-ext.js >> $@
	yuicompressor libs/zipjs/deflate.js >> $@
	echo "window.zip = zip;" >> $@ ;# Needed to expose the zip interface to the exporter in tampermonkey
	cat src/roll20_exporter.js >> $@


build: all
	rm -f *~ */*~ src/*.pyj-cached 
	web-ext build

clean:
	rm -f $(JS_FILES) *~ */*~ src/*.pyj-cached

convert: convert-waterdeep  convert-lmop  convert-cos

convert-waterdeep:
	@rm -rf waterdeep-demo
	./src/tofvtt.py $(CONVERT_FLAGS) waterdeep-demo "waterdeep demo.zip"
convert-lmop:
	@rm -rf LMoP
	./src/tofvtt.py $(CONVERT_FLAGS) LMoP "The Lost Mine of Phandelver.zip"
convert-cos:
	@rm -rf curse-of-strahd
	./src/tofvtt.py $(CONVERT_FLAGS) curse-of-strahd "Curse of Strahd.zip"

$(JS_FILES): $(PYJ_DEPS)


