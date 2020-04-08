# Cheat Sheet

## Acronyms

- SDK -> Software Development Kit
- JDK -> Java Development Kit

## Bash/ZSH

- Basics

```shell script
open -a "Google Chrome" /pathToFile # open file from terminal to web browser:
rm -rf folderName  # recursive force removal to remove everything inside that folder
```

- Useful Commands

```shell script
ls -la | grep whatever # allows user to search for whatever
```

```shell script
source fileName  #executes file so that file will be read and terminal will be aware of it
```

```shell script
ln -sv ~/Desktop/SashaCodingProjects/SashaLarson_portfolio/dotfiles/bash_profile ~/.bash_profile # create a symlink
```
- Processes

# MacOS terminal

```shell script
lsof -i:portNumber # find process running on portNumber
lsof -i:portnumber -t # gets PID of process running on that port
kill -9 pid_number  # kills process running with pid_number
kill -9 `lsof -i:portNumber` # kills process on that specific portNumber
```
## Vim

- To search in Vim use `/whatyoursearchingfor`

## Git

- Basics

```shell script

git init # initialize folder to empty git repo. this adds .git folder to project

git remote add origin https://github.com/repoName.git # connects empty .git folder to online repo for project

git remote -v # shows configuration for this repo

git config --local user.email "my.email.here@gmail.com" # changes this specific repos email to push from (do it from proj root folder)

git config user.email # checks what user email you are using 

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

```py
for x in array:
  print(x)
```

# IntelliJ IDEA

- Cmd + Shift + F to search for specific string/text globally
- Cmd + Shift + O to search for file name globally

# Java

- check version `java -version`

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```
   
- To run java code you first need to compile it. To compile code in the terminal use command: `javac fileName.java`
- If the file is successfully compiled it will create a fileName.class file that can be run
- To run this file use the command: `java fileName`
- When comments are short we use the single-line syntax: `//`
- When comments are long we use the multi-line syntax: `/* */`

### Gradle

- To run a build initially use command `gradle build` to add dependencies
- Use command `gradle bootRun` to execute file
- Add the dependency of `implementation 'org.springframework.boot:spring-boot-starter-web'` to have web development dependency this will make your application run on localhost: 8080 when application is executed

- when opening gradle project in IntelliJ two finger click the build.gradle file and click `import gradle project` to import as a gradle project

- Run gradle application using profiles

```shell script

gradle bootRun --args="--spring.profiles.active=local" # local is the profile name in this example which is application-local.yml

```

- Fix IntelliJ SDK Version
   - Intellij>Preferences>Build,Execution,Deployment>Gradle>
   - Set Gradle JVM to 13

### Maven

- Dependencies are saved in a pom.xml file in root of project

# JavaScript

- run javascript from terminal with ` node filename.js`

## Chaining Operators

```javascript
// daily-art-prompt LoginScreen

{location?.state?.message && ( // allows to check if previous values exist in object without having to check each one (see below for long hand)
        <div data-testid="message">{location.state.message}</div>
      )}

// long way: 
{location && location.state && location.state.message (
    <div>{location.state.message}</div>
)}
```

# DATABASES

## Postgres/PSQL

- install PSQL Mac `homebrew install libpq`
- use postgres app to start the server
- access the database: terminal with psql or use dbeaver

- To connect remotely to a database:

```shell script
psql -h hostName -p portNumber dbName -U userName # after this you will be prompted for the password
```

### Useful commands:

```shell script

\l # list all databases
\c dbname # change to database
\dt #shows all tables
CREATE DATABASE dbname; # creates database
SELECT * FROM tableName; # shows selected table
DROP DATABASE dbName; # deletes database
CREATE TABLE tablename(col1 type1, col2 type2); # creates a table with columns with their names and types (ex: int, text, varchar)
DELETE FROM table
WHERE condition; #deletes specified row from table
INSERT INTO table(column1,column2,...)
VALUES(value_1,value_2,...); # adds values to table (strings must be in '')

UPDATE tableName SET columnName = value # this edits row in table where depicted
WHERE columnName = value;
ALTER TABLE the_table ADD CONSTRAINT constraint_name UNIQUE (thecolumn); # adds contstraint
```

## MySQL

log in to MySQLdb:
mysql -u root -p
(root = username)
create new database:
CREATE DATABASE dbname;

switch databses:
USE dbname;

create a table:
CREATE TABLE tablename (
ID int NOT NULL PRIMARY KEY,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Age int
);

Booleans:
Booleans in mysql are saved as ints

1 = True
0 = False

### How to start SQL from docker

To start an application that uses a SqlServer database
you must first start up the database before you can run the application

1. Turn on Docker

2. Start Server
   docker start nameOfServer

docker start sql_server_demo

3. run DotNet
   dotnet run

To login to database
I am using MsSQL for this project

`mssql -u username -p password`

### DBeaver

DBeaver is a GUI to show databases that I am using for this project
Can be used just like commands in the terminal but with graphical user interface.
Schema are "folders" used to organize tables in a database.

- application should begin running on localhost

# Virtual Env


## How To install a virtual environment

1. go into project folder and run 'pipenv install' command

    This will create a pipfile

2. Next you will need to add packages to the environment

    Common packages to add to your project are:
    Python
    Flask
    MySQL

3. To add a package run the command 'pipenv install <package>'


# Deploy App with Heroku

- Dyno = Server (essentially)

- If moving app from inside a repo make sure to connect to GitHub and then connect to Heroku

```shell script
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/sjlarson92/app-name.git
git push -u origin master
```

- `heroku git:remote -a app-name` connects project repo to Heroku

- check `git remote -v` to make sure you are pushing/fetchign from both Github and heroku

- use `git push heroku` to push to heroku



# Best Practices

- Clean app more and refactor while working

- Improve name conventions

- Methods should be named after what they do.
   - Example: handleImageClick()
   - Should be able to determine what it does just by reading name

- Remove console.logs after use, to clean up code

- Make code pretty (IDE's have plugins to help with this)
   - Spacing and removing unused variables

- Stay DRY (Don't Repeat Yourself)
   - Reuse code when able.

- Functions should not return multiple unrelated things (like a bool and a string)