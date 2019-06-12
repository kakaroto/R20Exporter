%.js: %.pyj
	rapydscript $< --output $@

JS_FILES=src/roll20_exporter.js r20exporter.js
CONVERT_FLAGS=--restrict-movement --enable-fog --use-original-image-urls $(CONVERT_OPTIONS)

all: $(JS_FILES)

r20exporter.js: tampermonkey.header libs/StreamSaver.js libs/FileSaver.js libs/jszip.min.js src/roll20_exporter.js
	cat $^ > $@

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


