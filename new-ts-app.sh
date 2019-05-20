#!/usr/bin/env bash

/bin/echo '
What do you want to name the folder for this project?'
read  answer
echo "$answer"
git clone git@github.com:Rolias/ts-starter-kit.git --depth 1 $answer
cd ./$answer
echo $PWD

echo "REMOVE GIT"
rm -rf .git
echo "Init GIT"
git init
git add .
git commit -m "initial commit"