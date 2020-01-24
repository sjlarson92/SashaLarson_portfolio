package com.interviewQuestion.rewardsProgram.model;

import java.time.LocalDate;
import java.time.Month;
import java.util.HashMap;

public class CustomerReward {
    private int id;
    private String firstName;
    private String lastName;
    private double totalRewards;
    private HashMap<Month, Double> rewardsHistory;
    private HashMap<String, Integer> rewardsByMonth;
    private HashMap<LocalDate, Double> purchaseHistory;


    public CustomerReward() {}

    public CustomerReward(
            int id,
            String firstName,
            String lastName,
            double totalRewards,
            HashMap<Month, Double> rewardsHistory
//            HashMap<String, Integer> rewardsByMonth
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.totalRewards = totalRewards;
        this.rewardsHistory = rewardsHistory;
//        this.rewardsByMonth = rewardsByMonth;
    }

    public int getId() {return this.id; }
    public String getFirstName(){ return this.firstName;}

    public String getLastName(){return this.lastName;}

    public double getTotalRewards(){return this.totalRewards;}

    public HashMap<Month, Double> getRewardsHistory() { return rewardsHistory;}

//    public HashMap<String, Integer> getRewardsByMonth() {
//        return rewardsByMonth;
//    }
}