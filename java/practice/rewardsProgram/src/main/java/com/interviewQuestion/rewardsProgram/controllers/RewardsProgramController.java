package com.interviewQuestion.rewardsProgram.controllers;

import com.interviewQuestion.rewardsProgram.model.CustomerReward;
import com.interviewQuestion.rewardsProgram.model.TransactionRequestBody;
import com.interviewQuestion.rewardsProgram.service.RewardsProgramService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/rewards")
public class RewardsProgramController {
    RewardsProgramService rewardsProgramService = new RewardsProgramService();

    @GetMapping("/all")
    public HashMap<Integer, CustomerReward> getAllRewards(
            @RequestBody List<TransactionRequestBody> transactionRequestBodies
    ) {
        return rewardsProgramService.getAllRewards(transactionRequestBodies);
    }

}