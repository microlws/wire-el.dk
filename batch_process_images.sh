#!/usr/bin/env bash

mkdir -p $2

## Create Large
convert "$1/*.jpg[1040x]" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -set filename:base "%[base]" "$2/%[filename:base]_large.jpg"

## Create Medium
convert "$1/*.jpg[800x]" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -set filename:base "%[base]" "$2/%[filename:base]_medium.jpg"

## Create Small
convert "$1/*.jpg[440x]" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -set filename:base "%[base]" "$2/%[filename:base]_small.jpg"