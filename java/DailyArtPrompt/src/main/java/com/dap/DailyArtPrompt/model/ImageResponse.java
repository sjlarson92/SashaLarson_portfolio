package com.dap.DailyArtPrompt.model;

public class ImageResponse {
    private String message;
    private String status;

    public ImageResponse() {}

    public ImageResponse(String message, String status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return this.message;
    }

    public String getStatus() {
        return this.status;
    }
}