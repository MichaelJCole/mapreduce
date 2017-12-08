#!/bin/bash

# Download the data
# wget https://dumps.wikimedia.org/enwiki/latest/enwiki-latest-all-titles-in-ns0.gz
gunzip -k enwiki-latest-all-titles-in-ns0.gz

# Import the data
mongoimport -d wikipedia -c titles \
  --type tsv --headerline \
  --file enwiki-latest-all-titles-in-ns0

# Start the mongo console
mongo
