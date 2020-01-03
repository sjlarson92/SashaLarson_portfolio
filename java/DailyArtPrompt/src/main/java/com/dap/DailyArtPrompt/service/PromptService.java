package com.dap.DailyArtPrompt.service;

import com.dap.DailyArtPrompt.model.Prompt;

public class PromptService {
    public Prompt getPrompt() {
        return new Prompt("Test");
    }
}