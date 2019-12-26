package com.springDemo.apiPractice.service;

import com.springDemo.apiPractice.model.Dog;

public class DogService {
    public String getDogGreeting() {
        return "Woof";
    }

    public Dog getDefaultDog() {
        Dog defaultDog = new Dog();
        return defaultDog;
    }
}