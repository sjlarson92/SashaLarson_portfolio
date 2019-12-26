package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.service.DogService;
import com.springDemo.apiPractice.model.Dog;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return dogService.getDefaultDog();
    }
}