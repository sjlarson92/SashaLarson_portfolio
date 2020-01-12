package com.dap.DailyArtPrompt.controller;

import com.dap.DailyArtPrompt.service.ImageService;
import com.dap.DailyArtPrompt.model.Image;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;

@RestController
@RequestMapping("/image")
public class ImageController {
    ImageService imageService = new ImageService();
    @GetMapping("")
    public ResponseEntity<Image> getImage() {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
        Image responseBody = imageService.getImage();
        return ResponseEntity.ok().headers(headers).body(responseBody);
    }
}