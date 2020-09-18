#!/bin/bash
rm -rf plattar-api/README.md plattar-api/graphics plattar-api/node_modules plattar-api/build plattar-api/package-lock.json
cp README.md plattar-api/README.md
cp -R graphics plattar-api/
cd plattar-api && npm run build && npm publish --scope=public && cd ../
rm -rf plattar-api/README.md plattar-api/graphics plattar-api/node_modules plattar-api/build plattar-api/package-lock.json