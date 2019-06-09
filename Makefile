%.js: %.pyj
	rapydscript $< --output $@

JS_FILES=src/roll20_exporter.js r20exporter.js

all: $(JS_FILES)

r20exporter.js: tampermonkey.header libs/StreamSaver.js src/roll20_exporter.js
	cat $^ > $@

build: all
	rm -f *~ */*~ src/*.pyj-cached 
	web-ext build

clean:
	rm -f $(JS_FILES) *~ */*~ src/*.pyj-cached

$(JS_FILES): $(PYJ_DEPS)


