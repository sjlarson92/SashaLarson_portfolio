package com.dap.DailyArtPrompt.controller;

import com.dap.DailyArtPrompt.service.PromptService;
import com.dap.DailyArtPrompt.model.Prompt;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/prompt")
public class PromptController {
    PromptService promptService = new PromptService();
    @GetMapping("")
    public Prompt prompt() {

        return promptService.getPrompt();
    }
}