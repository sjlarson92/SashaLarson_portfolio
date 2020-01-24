package com.interviewQuestion.rewardsProgram.utils;

import java.time.Month;
import java.util.HashMap;


public class RewardProgram {

    public double getPurchaseRewards(double purchaseAmount){

        if(50 < purchaseAmount && purchaseAmount <= 100){
            return Math.floor(purchaseAmount - 50);
        }
        else if(purchaseAmount > 100) {
            return Math.floor((purchaseAmount - 100)*2 + 50);
        }
        else {
            return 0;
        }
    }

    public Double getTotalRewards(HashMap<Month, Double> rewardsHistory) {
        double sum = 0.0f;
        for (double f : rewardsHistory.values()) {
            sum += f;
        }
        return sum;
    }
}


