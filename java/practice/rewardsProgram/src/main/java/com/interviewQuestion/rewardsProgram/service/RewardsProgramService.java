package com.interviewQuestion.rewardsProgram.service;

import com.interviewQuestion.rewardsProgram.model.CustomerReward;
import com.interviewQuestion.rewardsProgram.model.TransactionRequestBody;
import com.interviewQuestion.rewardsProgram.utils.RewardProgram;

import java.util.HashMap;
import java.util.List;

public class RewardsProgramService {

    RewardProgram rewardProgram = new RewardProgram();

    public HashMap<Integer, CustomerReward> getAllRewards(List<TransactionRequestBody> transactionRequestBodies){

        HashMap<Integer, CustomerReward> customerData = new HashMap<>();

        double totalRewards = rewardProgram.getTotalRewards(transactionRequestBodies.get(0).getPurchaseAmount());

        CustomerReward customerReward = new CustomerReward(
                transactionRequestBodies.get(0).getId(),
                transactionRequestBodies.get(0).getFirstName(),
                transactionRequestBodies.get(0).getLastName(),
                totalRewards
        );
        customerData.put(transactionRequestBodies.get(0).getId(), customerReward);

        return customerData;
    }

}