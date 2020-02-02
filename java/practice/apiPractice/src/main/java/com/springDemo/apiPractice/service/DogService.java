package com.springDemo.apiPractice.service;

import java.util.ArrayList;
import java.util.List;
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

    public DogCompareResponse compareDogs(
            Dog defaultDog,
            Dog dog1
    ) {
        List<String> goodDogs = new ArrayList<>();
        if(defaultDog.isGoodDog()){
            goodDogs.add(defaultDog.getFullName());
        }
        if(dog1.isGoodDog()) {
            goodDogs.add(dog1.getFullName());
        }
        Dog oldestDog = defaultDog.getAge() > dog1.getAge() ? defaultDog : dog1 ;
        return new DogCompareResponse(oldestDog, goodDogs);
    }
}