#!/bin/bash

ember build && \
    mv dist/index.html dist/200.html && \
    surge dist the-book-of-problems.surge.sh


