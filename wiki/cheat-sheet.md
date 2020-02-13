# Cheat Sheet

## Acronyms

- SDK -> Software Development Kit
- JDK -> Java Development Kit

## Bash/ZSH

- Basics

```sh
open -a "Google Chrome" /pathToFile # open file from terminal to web browser:
rm -rf folderName  # recursive force removal to remove everything inside that folder
```

- Useful Commands

```sh
ls -la | grep whatever # allows user to search for whatever
```

```sh
source fileName  #executes file so that file will be read and terminal will be aware of it
```

```sh
ln -sv ~/Desktop/SashaCodingProjects/SashaLarson_portfolio/dotfiles/bash_profile ~/.bash_profile # create a symlink
```

## Git

- Basics

```sh

git init # initialize folder to empty git repo. this adds .git folder to project

git remote add origin https://github.com/repoName.git # connects empty .git folder to online repo for project

git branch -a # To view all branches:

git checkout "branchName" # To checkout to a different branch called branchName

git checkout -b "branchName" # creates a new branch with branchName and checkouts to it

git branch -m "newName" # To change current branch name:

git branch -d branchName # delete branch branchName
# do not be in the branch you want to delete
# branches must be deleted manually from GitHub
```

## Markdown for Wiki (MD files)

All files in this folder should have the extension .md

To do a inline codeblock use a single tick
`code space here`

To do a multiline codeblock use triple ticks and you can specify the language used in the first line

```python
for x in array:
  print(x)
```

You can use 1# 2# 3# and also numbers followed by a period (1. 2. 3.) to style your md file

# Title 1

## Title 2

### Title 3

1. One Dot
2. Two Dot
3. Three Dot

## IDE's

- Cmd + Shift + F to search globally in project
