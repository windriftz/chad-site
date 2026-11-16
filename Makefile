.PHONY: clean build serve deploy

clean:
	rm -rf dist
build:
	uv run script.py build
serve:
	python3 -m http.server -d dist 8000
deploy:
	uv run script.py deploy