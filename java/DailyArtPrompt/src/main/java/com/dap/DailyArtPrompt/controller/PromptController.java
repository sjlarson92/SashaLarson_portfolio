package com.dap.DailyArtPrompt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/prompt")
public class PromptController {
    @GetMapping("")
    public String prompt() {
        return "Prompt";
    }
}