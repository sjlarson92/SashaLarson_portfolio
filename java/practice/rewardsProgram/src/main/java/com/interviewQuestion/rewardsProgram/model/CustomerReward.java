package com.interviewQuestion.rewardsProgram.model;

import java.util.HashMap;

public class CustomerReward {
    private String firstName;
    private String lastName;
    private double totalRewards;
    private HashMap<String, Integer> rewardsByMonth;

    public CustomerReward() {}

    public CustomerReward(
            String firstName,
            String lastName,
            double totalRewards,
            HashMap<String, Integer> rewardsByMonth
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.totalRewards = totalRewards;
        this.rewardsByMonth = rewardsByMonth;
    }

    public String getFirstName(){ return this.firstName;}

    public String getLastName(){return this.lastName;}

    public double getTotalRewards(){return this.totalRewards;}

    public HashMap<String, Integer> getRewardsByMonth() {
        return rewardsByMonth;
    }
}