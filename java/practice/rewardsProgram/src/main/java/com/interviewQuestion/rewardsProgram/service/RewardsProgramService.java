package com.interviewQuestion.rewardsProgram.service;

import com.interviewQuestion.rewardsProgram.model.CustomerReward;
import com.interviewQuestion.rewardsProgram.model.TransactionRequestBody;
import com.interviewQuestion.rewardsProgram.utils.RewardProgram;

import java.time.LocalDate;
import java.time.Month;
import java.util.HashMap;
import java.util.List;

public class RewardsProgramService {

    RewardProgram rewardProgram = new RewardProgram();

    public HashMap<Integer, CustomerReward> getAllRewards(List<TransactionRequestBody> transactionRequestBodies){

        HashMap<Integer, CustomerReward> customerData = new HashMap<>();

        for(TransactionRequestBody transactionRequestBody : transactionRequestBodies){
            double purchaseRewards = rewardProgram.getPurchaseRewards(transactionRequestBody.getPurchaseAmount());
            if(customerData.containsKey(transactionRequestBody.getId())){

                if(customerData.get(transactionRequestBody.getId()).getRewardsHistory().
                        containsKey(transactionRequestBody.getDate().getMonth())){
                    Double newRewardsMonthTotal = customerData.get(transactionRequestBody.getId()).getRewardsHistory()
                            .get(transactionRequestBody.getDate().getMonth()) + purchaseRewards;
                    customerData.get(transactionRequestBody.getId()).getRewardsHistory().put(
                            transactionRequestBody.getDate().getMonth(),newRewardsMonthTotal);
                }
                else {
                    customerData.get(transactionRequestBody.getId()).getRewardsHistory().put(
                            transactionRequestBody.getDate().getMonth(),purchaseRewards);
                }
            //update total rewards
                Double updatedTotalRewards = rewardProgram.getTotalRewards(customerData.get(transactionRequestBody.getId()).getRewardsHistory());
                customerData.get(transactionRequestBody.getId()).setTotalRewards(updatedTotalRewards);
            }
            else {

                HashMap<Month, Double> rewardsHistory = new HashMap<>();
                rewardsHistory.put(transactionRequestBody.getDate().getMonth(), purchaseRewards);
                CustomerReward customerReward = new CustomerReward(
                        transactionRequestBody.getId(),
                        transactionRequestBody.getFirstName(),
                        transactionRequestBody.getLastName(),
                        purchaseRewards,
                        rewardsHistory
                );
                customerData.put(transactionRequestBody.getId(), customerReward);
            }

        }

        return customerData;
    }

}