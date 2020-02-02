package com.springDemo.apiPractice.model;

public class Dog {
    private String firstName;
    private String lastName;
    private int age;
    private boolean goodDog;
    private Breed breed;

    public enum Breed {
        BEAGLE, MUTT, WESTIE;
    }

    public Dog() {
        this.firstName = "HeWhoShall";
        this.lastName = "NotBeNamed";
        this.age = 666;
        this.goodDog = true;
        this.breed = Breed.BEAGLE;
    }

    public Dog(
        String firstName, 
        String lastName, 
        int age, 
        Boolean goodDog, 
        Breed breed
        ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.goodDog = goodDog;
        this.breed = breed;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public int getAge() {
        return this.age;
    }

    public boolean isGoodDog() {
        return this.goodDog;
    }

    public Breed getBreed() {
        return this.breed;
    }

    public String getFullName() {
        return this.firstName + " " + this.lastName;
    }

}