package com.dap.DailyArtPrompt.controller;

import com.dap.DailyArtPrompt.model.Prompt;
import com.dap.DailyArtPrompt.service.PromptRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.util.HashMap;

@RestController
@RequestMapping("/prompt")
public class PromptController {
    PromptRepository promptRepository = new PromptRepository();

    @GetMapping("/all")
    public HashMap<LocalDate, Prompt> getAllPrompts() {

        return promptRepository.getAllPrompts();
    }
}