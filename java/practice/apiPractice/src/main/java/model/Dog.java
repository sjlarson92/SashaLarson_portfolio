package com.springDemo.apiPractice.model;

public class Dog {
    enum Breed {
        BEAGLE, MUTT, WESTIE
    }

    String firstName;
    String lastName;
    int age;
    boolean goodDog;
    Breed breed;

    public Dog() {
        this.firstName = "HeWhoShall";
        this.lastName = "NotBeNamed";
        this.age = 666;
        this.goodDog = false;
        this.breed = Breed.BEAGLE;
    }

    public Dog(String firstName, String lastName, int age, Boolean goodDog, Breed breed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.goodDog = goodDog;
        this.breed = breed;
    }

    public int getAge() {
        return this.age;
    }

    public String getFullName() {
        return this.firstName + " " + this.lastName;
    }

    public boolean isGoodDog() {
        return this.goodDog;
    }

    public Breed getBreed() {
        return this.breed;
    }

}