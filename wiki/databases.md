# DATABASES

## Postgres/PSQL

- install PSQL Mac `homebrew install libpq`
- use postgres app to start the server
- access the database: terminal with psql or use dbeaver

### Useful commands:

```sql

\l # list all databases
\c dbname # change to database
\dt #shows all tables
CREATE DATABASE dbname; # creates database
SELECT * FROM tableName; # shows selected table
DROP DATABASE dbName; # deletes database
CREATE TABLE tablename(col1 type1, col2 type2); # creates a table with columns with their names and types (ex: int, text, varchar)

INSERT INTO table(column1,column2,...)
VALUES(value_1,value_2,...); # adds values to table (strings must be in '')
```

## DB Connection with Spring

- You should have a application.properties file delete this and create a application.yml file instead and and the below code to it

```sh
### Spring DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/dogsdb # add your db name here in the end. in our case, dogsdb / port number default to 5432
    username: sasha #default is set to your computer username can find this by typing command `whoami` in your terminal
    password: # if you have one
    driverClassName: org.postgresql.Driver
  jpa:
    properties.hibernate.dialect: org.hibernate.dialect.PostgreSQLDialect # The SQL dialect makes Hibernate generate better SQL for the chosen database
    hibernate.ddl-auto: update # Hibernate ddl auto (create, create-drop, validate, update)
```

- Add these depenedcies/drivers to the build.gradle file (if this a gradle project)

```sh
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
implementation 'org.postgresql:postgresql'
```

- Make sure to properly link service to controller and pass service to controller in constructor

```java

# Controller

@RestController
@RequestMapping("/prompt")
public class PromptController {

    private final PromptService promptService;

    @Autowired
    public PromptController(PromptService promptService) {
        this.promptService = promptService;
    }

# Service
@Component
public class PromptService {

    final PromptRepository promptRepository;

    public PromptService(PromptRepository promptRepository) {
        this.promptRepository = promptRepository;
    }


```

## Hibernate

- ORM (object relational mapping framework)
- ORM is basicaly making your models match db tables so that data aligns
- used to overcome shortcomings of JDBC (java database connection)

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
