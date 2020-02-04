package com.springDemo.apiPractice.entity;

import javax.persistence.*;

@Entity
@Table(name="dog")
public class Dog {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "age")
    private int age;

    @Column(name = "goodDog")
    private boolean goodDog;

    @Column(name = "breed")
    private String breed;

    public Dog(String firstName, String lastName, int age, boolean goodDog, String breed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.goodDog = goodDog;
        this.breed = breed;
    }

    public long getId() {return id;}

    public String getFirstName() {return firstName;}

    public String getLastName() {return lastName;}

    public int getAge() {return age;}

    public boolean isGoodDog() {return goodDog;}

    public String getBreed() {return breed;}

}