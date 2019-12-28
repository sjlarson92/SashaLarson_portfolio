package com.springDemo.apiPractice.model;

public class DogCompareResponse {
    String oldestDogName;
    
    public DogCompareResponse(Dog oldestDog) {
        this.oldestDogName = oldestDog.getFullName();
    }

    public String getOldestDogName() {
        return this.oldestDogName;
    }
}