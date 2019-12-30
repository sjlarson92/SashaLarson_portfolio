package com.dap.DailyArtPrompt.service;

import com.dap.DailyArtPrompt.model.Image;

public class ImageService {
    public Image getImage(String src) {
        return new Image(src);
    }
}