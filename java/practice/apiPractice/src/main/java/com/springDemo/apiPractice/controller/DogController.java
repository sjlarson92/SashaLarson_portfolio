package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.service.DogService;
import com.springDemo.apiPractice.model.Dog;
import com.springDemo.apiPractice.model.DogCompareResponse;
import com.springDemo.apiPractice.model.DogImageResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/dog")
public class DogController {
    DogService dogService = new DogService();

    @RequestMapping("/greeting")
    public String dogGreeting() {
        return dogService.getDogGreeting();
    }

    @RequestMapping("/default")
    public Dog defaultDog() {
        System.out.println("getting defaultDog");
        return dogService.getDefaultDog();
    }

    @RequestMapping("/new")
    public Dog newDog(
        @RequestParam String firstName, 
        @RequestParam String lastName, 
        @RequestParam int age, 
        @RequestParam boolean goodDog, 
        @RequestParam Dog.Breed breed
        ) {
        return dogService.createNewDog(firstName, lastName, age, goodDog, breed);
    }

    @RequestMapping("/compare")
    public DogCompareResponse compare(
        @RequestParam String firstName, 
        @RequestParam String lastName, 
        @RequestParam int age, 
        @RequestParam boolean goodDog, 
        @RequestParam Dog.Breed breed
    ) {
        Dog defaultDog = dogService.getDefaultDog();
        Dog dog1 = dogService.createNewDog(firstName, lastName, age, goodDog, breed);
        return dogService.compareDogs(defaultDog, dog1);
    }

    @RequestMapping("/images")
    private DogImageResponse getDogImages(){
        final String uri = "https://dog.ceo/api/breeds/image/random";
        RestTemplate restTemplate = new RestTemplate();
        DogImageResponse result = restTemplate.getForObject(uri, DogImageResponse.class);
        return result;
    }
}