#!/bin/bash
rm -rf plattar-api/README.md plattar-api/graphics plattar-api/node_modules plattar-api/build plattar-api/package-lock.json
cp README.md plattar-api/README.md
cp -R graphics plattar-api/
cd plattar-api && npm install && npm run build && npm run build-es2015 && npm publish --scope=public && cd ../
rm -rf plattar-api/README.md plattar-api/graphics plattar-api/node_modules plattar-api/build plattar-api/package-lock.json