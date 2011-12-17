#!/bin/bash

for F in bin .inputrc .irbrc .bash_profile .gitconfig ; do
  SRC="${PWD}/${F}"
  DEST="${HOME}/${F}"
  echo mv "${DEST}" "${DEST}.orig"
  mv "${DEST}" "${DEST}.orig"
  echo ln -s "${SRC}" "${DEST}"
  ln -s "${SRC}" "${DEST}"
done
