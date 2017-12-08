#!/bin/bash

# Import the data
mongoimport -d wikipedia -c titles \
  --type tsv --headerline \
  --file enwiki-20160601-all-titles-in-ns0

# Start the mongo console
mongo