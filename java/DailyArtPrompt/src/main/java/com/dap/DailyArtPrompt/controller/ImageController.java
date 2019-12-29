package com.dap.DailyArtPrompt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/images")
public class ImageController {

    @RequestMapping("/getImages")
    public String images() {
        System.out.println("hello");
        return "Hello World";
    }
}