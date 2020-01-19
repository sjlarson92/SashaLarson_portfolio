package com.interviewQuestion.rewardsProgram.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rewards")
public class RewardsProgramController {

    @GetMapping("")
    public String getRewards() {
        return "this is the getRewards route";
    }

}