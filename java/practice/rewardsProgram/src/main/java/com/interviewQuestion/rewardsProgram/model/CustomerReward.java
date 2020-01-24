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

    public CustomerReward() {}

    public CustomerReward(
            int id,
            String firstName,
            String lastName,
            Double totalRewards,
            HashMap<Month, Double> rewardsHistory
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.totalRewards = totalRewards;
        this.rewardsHistory = rewardsHistory;
    }

    public int getId() {return this.id; }
    public String getFirstName() { return this.firstName;}

    public String getLastName() { return this.lastName; }

    public double getTotalRewards() { return this.totalRewards; }

    public void setTotalRewards(double totalRewards) {
        this.totalRewards = totalRewards;
    }

    public HashMap<Month, Double> getRewardsHistory() { return rewardsHistory;}

}