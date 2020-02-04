# Spring Boot, Postgres & Hibernate

- This project utilizes Spring, Postgres and Hibernate to create APIs that modify and pull data from a database

## Link Database to Spring

- Add the below dependencies in order to connect and use postgres

- Create a `application.yml` file with the below code and make sure that the port, db name, username and password are all set correctly

```yaml
### Spring DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/dogsdb # any your db name here in the end. in our case, dogsdb
    username: sasha #default is set to your computer username can find this by typing command `whoami` in your terminal
    password: # if you have one
    driverClassName: org.postgresql.Driver
  jpa:
    properties.hibernate.dialect: org.hibernate.dialect.PostgreSQLDialect # The SQL dialect makes Hibernate generate better SQL for the chosen database
    hibernate.ddl-auto: update # Hibernate ddl auto (create, create-drop, validate, update)
```

```
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'org.postgresql:postgresql'

	testImplementation('org.springframework.boot:spring-boot-starter-test') {
		exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
	}
}
```

# 