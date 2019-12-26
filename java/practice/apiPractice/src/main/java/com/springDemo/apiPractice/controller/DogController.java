package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.service.DogService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dog")
public class DogController {
    DogService dogService = new DogService();
    @RequestMapping("/greeting")
    public String test() {
        System.out.println("my computer is so slow");
        return dogService.getDogGreeting();
    }
}