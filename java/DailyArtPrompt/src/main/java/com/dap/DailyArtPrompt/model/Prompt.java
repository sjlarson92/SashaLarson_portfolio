package com.dap.DailyArtPrompt.model;

public class Prompt {
    private int id;
    private String date;
    private String text;

    public Prompt(){

    }

    public Prompt(String text) {
        this.id = 1;
        this.date = "01-02-2020";
        this.text = text;
    }

    public int getId() {return this.id;}

    public String getDate() {return this.date;}

    public String getText() {return this.text;}
}