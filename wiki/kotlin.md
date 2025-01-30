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

### Kotlin vs Java
#### Conciseness
- Kotlin requires less boilerplate code than Java
#### Null Safety
- Kotlin's type system explicitly defines nullability while Java allows null references everywhere
#### Data Classes
- Kotlin has data classes that auto generate essential methods while in Java they must be manually written
- Such as: getter, setters, constructors, equal, toString, etc.