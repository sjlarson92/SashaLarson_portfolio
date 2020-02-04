package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.entity.Dog;
import com.springDemo.apiPractice.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Dog getDogById(@PathVariable Long id) {
        return dogService.getDogById(id);
    }

    @GetMapping("/new")
    public Dog newDog(
        @RequestParam String firstName,
        @RequestParam String lastName,
        @RequestParam int age,
        @RequestParam boolean goodDog,
        @RequestParam String breed
    ) {
        System.out.println("api to create new dog");
     return dogService.newDog(firstName,lastName, age, goodDog, breed);
    }
}