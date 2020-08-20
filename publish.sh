#!/bin/bash
rm -rf plattar-api/README.md
cp README.md plattar-api/README.md
cd plattar-api && npm publish --scope=public && cd ../
rm -rf plattar-api/README.md