package com.springDemo.apiPractice.controller;

import com.springDemo.apiPractice.service.DogService;

public class DogController {
    DogService dogService = new DogService();

    public void test() {
        System.out.println("my computer is so slow");
        dogService.test();
    }
}