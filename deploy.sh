#!/bin/bash
read -p "Commit message: " message
git add . && \
git add -u && \
git commit -m "$message" && \
git push origin master
