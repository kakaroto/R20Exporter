%.js: %.pyj
	rapydscript $< --output $@

JS_FILES=src/roll20_exporter.js r20exporter.js

all: $(JS_FILES)

r20exporter.js: tampermonkey.header libs/StreamSaver.js libs/FileSaver.js libs/jszip.min.js src/roll20_exporter.js
	cat $^ > $@

build: all
	rm -f *~ */*~ src/*.pyj-cached 
	web-ext build

clean:
	rm -f $(JS_FILES) *~ */*~ src/*.pyj-cached

convert:
	@rm -rf LMoP waterdeep-demo
	@./src/tofvtt.py LMoP "The Lost Mine of Phandelver.zip"
	@./src/tofvtt.py waterdeep-demo "waterdeep demo.zip"

$(JS_FILES): $(PYJ_DEPS)


