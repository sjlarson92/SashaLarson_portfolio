# SQL


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


## Pending (must do)

how to create database connection with MySQL
