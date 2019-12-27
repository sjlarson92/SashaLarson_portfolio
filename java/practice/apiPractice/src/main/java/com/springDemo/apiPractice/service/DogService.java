package com.springDemo.apiPractice.service;

import com.springDemo.apiPractice.model.Dog;

public class DogService {
    public String getDogGreeting() {
        return "Woof";
    }

    public Dog getDefaultDog() {
        return new Dog();
    }

    public Dog createNewDog(
        String firstName, 
        String lastName, 
        int age, 
        Boolean goodDog, 
        Dog.Breed breed
        ) {
        return new Dog(firstName, lastName, age, goodDog, breed);
    }
}