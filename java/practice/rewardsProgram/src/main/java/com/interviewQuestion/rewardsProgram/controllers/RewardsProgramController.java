package com.interviewQuestion.rewardsProgram.controllers;

import com.interviewQuestion.rewardsProgram.model.CustomerReward;
import com.interviewQuestion.rewardsProgram.model.TransactionRequestBody;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/rewards")
public class RewardsProgramController {


    @GetMapping("")
    public HashMap<Integer, CustomerReward> getRewards(
            @RequestBody List<TransactionRequestBody> transactionRequestBodies
    ) {
        HashMap<String, Integer> rewardsByMonth = new HashMap<>();
        rewardsByMonth.put(transactionRequestBodies.get(0).getDate().toString(), 100);
        CustomerReward customerReward = new CustomerReward(
                transactionRequestBodies.get(0).getFirstName(),
                transactionRequestBodies.get(0).getLastName(),
                transactionRequestBodies.get(0).getPurchaseAmount(),
                rewardsByMonth
        );
        HashMap<Integer, CustomerReward> rewardsResponseBody = new HashMap<>();
        rewardsResponseBody.put(1, customerReward);
        return rewardsResponseBody;
    }

}