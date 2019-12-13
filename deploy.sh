#!/bin/bash

DEPLOYPATH=$PWD

cd quasar/
quasar build
cp -r dist/spa/* $DEPLOYPATH
