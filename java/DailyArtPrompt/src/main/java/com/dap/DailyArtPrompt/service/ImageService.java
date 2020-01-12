package com.dap.DailyArtPrompt.service;

import com.dap.DailyArtPrompt.model.Image;
import com.dap.DailyArtPrompt.model.ImageResponse;
import org.springframework.web.client.RestTemplate;

public class ImageService {
    public Image getImage() {
        final String uri = "https://dog.ceo/api/breeds/image/random";
        RestTemplate restTemplate = new RestTemplate();
        ImageResponse image = restTemplate.getForObject(uri, ImageResponse.class);

        return new Image(image.getMessage());
    }
}