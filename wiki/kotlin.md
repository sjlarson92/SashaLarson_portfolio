# Kotlin

## Overview
- Created by JetBrains (the same company behind IntelliJ IDEA, PyCharm)
- Supports both OOP (Object-oriented programming) and functional programming
- Very popular for Android development

## Key Features
### Concise Syntax
  - Kotlin reduces boilerplate code, making it more concise and easier to read. For example, in Kotlin, you don’t need to write getters and setters explicitly—Kotlin handles that for you.

```java
//Java (with getter and setter)
public class Person {
private String name;
public String getName() { return name; }
public void setName(String name) { this.name = name; }
}
```
```kotlin
//Kotlin
class Person(var name: String)
```
### Type Safe
- Null safety is one of the most famous features of Kotlin. Null Pointer Exceptions (NPEs) are a common source of errors in Java.
```java
//Java
String name = null;  // You can accidentally assign null to a non-nullable variable
```
```kotlin
//Kotlin
var name: String? = null  // This can be null
name = "John"  // Now it's non-null
```
### Data Classes
- These are classes that are designed to hold data and automatically provide functionality like equals(), hashCode(), and toString() methods without having to write them manually.
```kotlin
//Kotlin
data class Person(val name: String, val age: Int)
val person = Person("John", 25)
println(person)  // Output: Person(name=John, age=25)
```

### Testing
- JUnit
    - Most widely used testing framework for Java and Kotlin. Unit and integration tests in both Java and Kotlin, well-supported in Spring Boot.

```kotlin
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import kotlin.test.assertEquals

@SpringBootTest
class MyServiceTests {

    @Autowired
    lateinit var myService: MyService

    @Test
    fun `should return expected value`() {
        val result = myService.someMethod()
        assertEquals("Expected Value", result)
    }
}
```

- Spring Boot Test
  - Integration testing for Spring Boot apps
  - Testing Spring Boot apps, controllers, services, and repositories in an integrated environment.

- Mockito
  - Most popular mocking framework used to create mock objects for unit testing
  - Used in combination with JUnit and Spring Boot
  - Mocking dependencies in unit tests to isolate behavior.

```kotlin
import org.junit.jupiter.api.Test
import org.mockito.Mock
import org.mockito.Mockito.*
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class MyServiceTests {

    @Mock
    lateinit var myRepository: MyRepository

    @Test
    fun `should mock repository call`() {
        val service = MyService(myRepository)
        
        `when`(myRepository.findById(1)).thenReturn(Optional.of(MyEntity(1)))

        val result = service.getEntity(1)
        
        verify(myRepository).findById(1)
        assert(result.id == 1)
    }
}
```

### Kotlin vs Java
#### Conciseness
- Kotlin requires less boilerplate code than Java
#### Null Safety
- Kotlin's type system explicitly defines nullability while Java allows null references everywhere
#### Data Classes
- Kotlin has data classes that auto generate essential methods while in Java they must be manually written
- Such as: getter, setters, constructors, equal, toString, etc.