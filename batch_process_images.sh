#!/usr/bin/env bash

mkdir -p $2

## Create Large
convert "$1/*.jpg[1040x]" -set filename:base "%[base]" "$2/%[filename:base]_large.jpg"

## Create Medium
convert "$1/*.jpg[800x]" -set filename:base "%[base]" "$2/%[filename:base]_medium.jpg"

## Create Small
convert "$1/*.jpg[440x]" -set filename:base "%[base]" "$2/%[filename:base]_small.jpg"