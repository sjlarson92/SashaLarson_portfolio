package com.dap.DailyArtPrompt.entity;

import javax.persistence.*;

@Entity
@Table(name="prompt")
public class Prompt {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column(name = "date")
    private String date;

    @Column(name = "text")
    private String text;

    public long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getText() {
        return text;
    }
}