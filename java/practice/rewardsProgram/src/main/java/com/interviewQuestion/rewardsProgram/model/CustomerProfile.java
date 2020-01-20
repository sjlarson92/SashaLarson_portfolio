package com.interviewQuestion.rewardsProgram.model;

import java.time.LocalDate;
import java.util.HashMap;

public class CustomerProfile {
    private int customerId;
    private String firstName;
    private String lastName;
    private HashMap<LocalDate, Double> transactionHistory;

    public CustomerProfile() {}

    public CustomerProfile(String firstName, String lastName, HashMap<LocalDate, Double> transaction
    ){
        //create unique customerId
        this.firstName = firstName;
        this.lastName = lastName;
        this.transactionHistory = transaction;
    }

    public int getCustomerId() { return this.customerId; }
    public String getFirstName() { return this.firstName; }
    public String getLastName() { return this.lastName; }
    public HashMap<LocalDate, Double> getTransactionHistory() { return this.transactionHistory; }
}