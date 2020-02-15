# Java

- check version `java -version`

## Hello World

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

## Running Java Code

- To run java code you first need to compile it. To compile code in the terminal use command: `javac fileName.java`
- If the file is succesfully compiled it will create a fileName.class file that can be run
- To run this file use the command: `java fileName`

## Comments

- When comments are short we use the single-line syntax: `//`
- When comments are long we use the multi-line syntax: `/* */`

## Tips

- Keep private methods small as they can not be tested directly
- Keep methods LOOSELY couples so they are not dependent on each other and are easier to test

## Spring Boot

- Spring is a Java Framework that makes creating Java applications faster and easier:

  - Sets up the boilerplate for an application that gets it up and running quickly
  - Automates configuration
  - Spring initializer is used to generate and application with customizable dependencies of your choice

- use Spring Initializr to Bootstrap your application at https://start.spring.io/

- Maven VS Gradle:

  - Maven is a rigid model while Gradle is more flexible and easily customizable
  - Google is using Gradle as the build system for Android Studio
  - For more details about these two build automations visit https://dzone.com/articles/gradle-vs-maven

- .war vs .jar:
  - A .war file is a Web Application Archive which runs inside an application server while a .jar is Java Application Archive that runs a desktop application on a user's machine. A war file is a special jar file that is used to package a web application to make it easy to deploy it on an application server.

### Gradle

- To run a build initially use command `gradle build` to add dependencies
- Use command `gradle bootRun` to execute file
- Add the dependency of `implementation 'org.springframework.boot:spring-boot-starter-web'` to have web development dependency this will make your application run on localhost: 8080 when application is executed

- when opening gradle project in IntelliJ two finger click the build.gradle file and click `import gradle project` to import as a gradle project

- Run gradle application using profiles

```sh

gradle bootRun --args="--spring.profiles.active=local" # local is the profile name in this example which is application-local.yml

```

## Restful Web Service

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController // Use RestController and RequestMapping to add listeners to the route
@RequestMapping("/dog")
public class DogController {
    DogService dogService = new DogService();

    @RequestMapping("/greeting")
    public String dogGreeting() {
        return dogService.getDogGreeting();
    }

    @GetMapping("/newDog")
    public Dog newDog( // Use RequestParam to be able to pass parameters to api call
        @RequestParam String firstName,
        @RequestParam String lastName,
        @RequestParam int age,
        @RequestParam boolean goodDog,
        @RequestParam Dog.Breed breed
        ) {
        return dogService.createNewDog(firstName, lastName, age, goodDog, breed);
    }
}
```

## Testing

- a file like `fileName.java` will have a test file with a name of `fileNameTest.java`
