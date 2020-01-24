package com.interviewQuestion.rewardsProgram.utils;

import com.interviewQuestion.rewardsProgram.model.CustomerProfile;
import com.interviewQuestion.rewardsProgram.model.CustomerReward;
import com.interviewQuestion.rewardsProgram.model.TransactionRequestBody;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

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
}