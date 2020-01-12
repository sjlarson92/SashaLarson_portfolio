package com.dap.DailyArtPrompt.model;

import java.util.ArrayList;
import java.util.List;

public class Image {
    private int id;
    private String src;
    private boolean liked;
    private List<String> comments = new ArrayList<>();

    public Image() {}

    public Image(String src) {
        this.id = 1;
        this.src = src;
        this.liked = false;
    }

    public int getId() {
        return this.id;
    }

    public String getSrc() {
        return this.src;
    }

    public boolean getLiked() {
        return this.liked;
    }

    public List<String> getComments() {
        return this.comments;
    }
}