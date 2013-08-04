#!/bin/bash

jekyll build
cp -r ./_site /tmp/WORKING_BLAST_SITE
git checkout gh-pages
git rm -rf .
cp -r /tmp/WORKING_BLAST_SITE/* .
git commit -m 'built site'
rm -r /tmp/WORKING_BLAST_SITE
git checkout master
