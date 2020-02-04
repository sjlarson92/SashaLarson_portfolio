package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.entity.Dog;
import com.springDemo.apiPractice.model.DogCompareResponse;
import com.springDemo.apiPractice.model.DogImageResponse;
import com.springDemo.apiPractice.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/dog")
public class DogController {

    private final DogService dogService;

    @Autowired
    public DogController(DogService dogService) {
        this.dogService = dogService;
    }

    @GetMapping("/all")
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }
//    @GetMapping("/greeting")
//    public String dogGreeting() {
//        return dogService.getDogGreeting();
//    }
//
//    @GetMapping("/default")
//    public Dog defaultDog() {
//        System.out.println("getting defaultDog");
//        return dogService.getDefaultDog();
//    }
//
//    @GetMapping("/new")
//    public Dog newDog(
//        @RequestParam String firstName,
//        @RequestParam String lastName,
//        @RequestParam int age,
//        @RequestParam boolean goodDog,
//        @RequestParam Dog.Breed breed
//        ) {
//        return dogService.createNewDog(firstName, lastName, age, goodDog, breed);
//    }
//
//    @GetMapping("/compare")
//    public DogCompareResponse compare(
//        @RequestParam String firstName,
//        @RequestParam String lastName,
//        @RequestParam int age,
//        @RequestParam boolean goodDog,
//        @RequestParam Dog.Breed breed
//    ) {
//        Dog defaultDog = dogService.getDefaultDog();
//        Dog dog1 = dogService.createNewDog(firstName, lastName, age, goodDog, breed);
//        return dogService.compareDogs(defaultDog, dog1);
//    }
//
//    @GetMapping("/images")
//    private DogImageResponse getDogImages(){
//        final String uri = "https://dog.ceo/api/breeds/image/random";
//        RestTemplate restTemplate = new RestTemplate();
//        DogImageResponse result = restTemplate.getForObject(uri, DogImageResponse.class);
//        return result;
//    }
}