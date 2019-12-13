#!/bin/bash

DEPLOYPATH=$PWD

cd quasar/
quasar build
cp -r dist/spa/* $DEPLOYPATH
git add -A
git commit -am "build spa & automatic commit on git"
