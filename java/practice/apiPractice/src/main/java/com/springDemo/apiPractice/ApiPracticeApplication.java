package com.springDemo.apiPractice;

import com.springDemo.apiPractice.controller.DogController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiPracticeApplication {

	public static void main(String[] args) {
		DogController dogController = new DogController();
		SpringApplication.run(ApiPracticeApplication.class, args);
		System.out.println("Spring boot is fun");
		dogController.test();

	}

}
