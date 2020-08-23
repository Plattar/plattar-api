#!/bin/bash
rm -rf plattar-api/README.md
rm -rf plattar-api/graphics
cp README.md plattar-api/README.md
cp -R graphics plattar-api/
#cd plattar-api && npm publish --scope=public && cd ../
rm -rf plattar-api/README.md
rm -rf plattar-api/graphics