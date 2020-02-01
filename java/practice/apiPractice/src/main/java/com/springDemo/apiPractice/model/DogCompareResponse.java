package com.springDemo.apiPractice.model;

import java.util.List;

public class DogCompareResponse {
    private String oldestDogName;
    private List<String> goodDogs;

    public DogCompareResponse() {}
    public DogCompareResponse(Dog oldestDog, List<String> goodDogs) {
        this.oldestDogName = oldestDog.getFullName();
        this.goodDogs = goodDogs;
    }

    public String getOldestDogName() {
        return this.oldestDogName;
    }

    public List<String> getGoodDogs() {
        return this.goodDogs;
    }
}