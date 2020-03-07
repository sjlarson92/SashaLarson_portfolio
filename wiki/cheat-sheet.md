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

## Git

- Basics

```shell script

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

# JavaScript React

- run javascript from terminal with ` node filename.js`

## Arrow Function:

```js
// const functionName = parameter => return
const functionName = () => "Hello"

const addNumbers = (x, y) => x + y
```

## String Literals

```js
`You can use a variable inside a string by ${variable}`
// Must use single ticks for this
```

## Ternary

- Shorthand for an If/ Else statements

```js

const something = (1 === 2) ? 'return if true' : 'return if false'

// if (1 === 2) {
// return 'They are equal'
// } else {
// return 'They are not equal'
// }

```

## Inline Logical && Operator

- Logical operators allow you to define a statement and then if that statement is true it will execute the following code after &&

```js
return randomVariable === anotherVariable && true;
/*
if (randomVariable === anotherVariable){
return true
} else {
 return false
}
*/
```

or 

```js
image.comments && image.comments.map(comment =>
          !comment.deleted && (
            <CommentLayout
              key={`comment-${comment.id}-${image.id}`}
              comment={comment}
              onClick={() => deleteComment(image.id, comment.id)}
            />
          )
        )
```

## Promises

- Promises are a way to combat asynchronous functions by allowing code to run and then return to the promise and execute after

- Promises can either be resolved or rejected. If a promise is resolved it can continue to the .then . If the promise is rejected then it goes to the .catch block

```js
axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                console.log('inside the then()')
                setDogImage(response.data.message)
            })
            .catch((error) => {
                console.log("Error fetching picsture", error)
            })
```

## Setting up react app with Create React App

1. Create an js app with Create React App with command:

`yarn create react-app app-name`

2. To install dependencies:

`yarn add dependencyName`

3. Start app (you must be in the app folder)

`yarn start`

NOTE: do not push dependencies to gitHub, these are installed by using `yarn` or `yarn install` and looking at the yarn.lock file

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

INSERT INTO table(column1,column2,...)
VALUES(value_1,value_2,...); # adds values to table (strings must be in '')

UPDATE tableName SET columnName = value # this edits row in table where depicted
WHERE columnName = value;
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