all: build

build: 
	rm -f *~ */*~ */*/*~
	web-ext build

.PHONY: all build
