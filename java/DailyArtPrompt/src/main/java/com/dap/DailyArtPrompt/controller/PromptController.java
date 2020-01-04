package com.dap.DailyArtPrompt.controller;

import com.dap.DailyArtPrompt.service.PromptRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.HashMap;

@RestController
@RequestMapping("/prompt")
public class PromptController {
    PromptRepository promptRepository = new PromptRepository();

    @GetMapping("")
    public HashMap<String, String> prompt() {

        return promptRepository.getPrompts();
    }
}