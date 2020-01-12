package com.dap.DailyArtPrompt.model;

import java.time.LocalDate;

public class Prompt {
    private int id;
    private LocalDate date;
    private String text;

    public Prompt() {}

    public Prompt(int id, LocalDate date, String text) {
        this.id = id;
        this.date = date;
        this.text = text;
    }
    public int getId() {
        return this.id;
    }
    public LocalDate getDate() {
        return this.date;
    }
    public String getText() {
        return this.text;
    }
}