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
