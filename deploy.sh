#!/bin/bash

DEPLOYPATH=$PWD

cd quasar/
quasar build
mv cp dist/* $DEPLOYPATH
