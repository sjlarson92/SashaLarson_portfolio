package com.interviewQuestion.rewardsProgram.controllers;

import com.interviewQuestion.rewardsProgram.model.CustomerReward;
import com.interviewQuestion.rewardsProgram.model.TransactionRequestBody;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;

@RestController
@RequestMapping("/rewards")
public class RewardsProgramController {


    @GetMapping("")
    public HashMap<Integer, CustomerReward> getRewards(
            @RequestBody TransactionRequestBody transactionRequestBody) {
        HashMap<String, Integer> rewardsByMonth = new HashMap<>();
        rewardsByMonth.put(transactionRequestBody.getDate().toString(), 100);
        CustomerReward customerReward = new CustomerReward(
                transactionRequestBody.getFirstName(),
                transactionRequestBody.getLastName(),
                transactionRequestBody.getPurchaseAmount(),
                rewardsByMonth
        );
        HashMap<Integer, CustomerReward> rewardsResponseBody = new HashMap<>();
        rewardsResponseBody.put(1, customerReward);
        return rewardsResponseBody;
    }

}