package com.springDemo.apiPractice.service;

import com.springDemo.apiPractice.model.Dog;
import com.springDemo.apiPractice.model.DogCompareResponse;

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

    public void compareDogs(Dog defaultDog, Dog dog1) {
        System.out.println("dog1 name is: " + dog1.getFullName());
        Dog oldestDog = defaultDog.getAge() > dog1.getAge() ? defaultDog : dog1 ;
        System.out.println("oldestDog: " + oldestDog.getFullName());
    }
}