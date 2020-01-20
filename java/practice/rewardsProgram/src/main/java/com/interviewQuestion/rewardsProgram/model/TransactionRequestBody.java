package com.interviewQuestion.rewardsProgram.model;

import java.time.LocalDate;

public class TransactionRequestBody {
    private int id;
    private String firstName;
    private String lastName;
    private double purchaseAmount;
    private LocalDate date;

    public TransactionRequestBody(){}

    public TransactionRequestBody(
            int id,
            String firstName,
            String lastName,
            double purchaseAmount,
            LocalDate date
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.purchaseAmount = purchaseAmount;
        this.date = date;
    }
    public int getId() { return this.id; }
    public String getFirstName() { return this.firstName; }
    public String getLastName() { return this.lastName; }
    public double getPurchaseAmount() { return this.purchaseAmount; }
    public LocalDate getDate() { return this.date; }

}