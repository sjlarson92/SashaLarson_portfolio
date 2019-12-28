package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.service.DogService;
import com.springDemo.apiPractice.model.Dog;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/dog")
public class DogController {
    DogService dogService = new DogService();

    @RequestMapping("/greeting")
    public String dogGreeting() {
        return dogService.getDogGreeting();
    }

    @RequestMapping("/defaultDog")
    public Dog defaultDog() {
        System.out.println("getting defaultDog");
        return dogService.getDefaultDog();
    }

    @RequestMapping("/newDog")
    public Dog newDog(
        @RequestParam String firstName, 
        @RequestParam String lastName, 
        @RequestParam int age, 
        @RequestParam boolean goodDog, 
        @RequestParam Dog.Breed breed
        ) {
        return dogService.createNewDog(firstName, lastName, age, goodDog, breed);
    }

    @RequestMapping("/compareDogs")
    public void compare(
        @RequestParam String firstName, 
        @RequestParam String lastName, 
        @RequestParam int age, 
        @RequestParam boolean goodDog, 
        @RequestParam Dog.Breed breed
    ) {
        System.out.println("compareDogs");
        Dog defaultDog = dogService.getDefaultDog();
        Dog dog1 = dogService.createNewDog(firstName, lastName, age, goodDog, breed);
        dogService.compareDogs(defaultDog, dog1);
    }
}