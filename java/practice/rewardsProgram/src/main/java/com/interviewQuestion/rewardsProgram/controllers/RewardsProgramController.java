package com.interviewQuestion.rewardsProgram.controllers;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/rewards")
public class RewardsProgramController {

    @GetMapping("")
    public String getRewards(
            @RequestParam String firstName,
            @RequestParam String lastName,
            @RequestParam double purchaseAmount,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
            ) {
        return (
                "firstName: " + firstName + " lastname: " + lastName + " purchaseAmount: " + purchaseAmount + " date: " + date
        );
    }

}