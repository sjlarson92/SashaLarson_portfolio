package com.dap.DailyArtPrompt.service;

import com.dap.DailyArtPrompt.model.Prompt;

import java.util.HashMap;
import java.time.LocalDate;

public class PromptRepository {
    public HashMap<LocalDate, Prompt> getAllPrompts(){
        HashMap<LocalDate, Prompt> prompts = new HashMap<>();

        LocalDate date = LocalDate.now();
        // Add keys and values (Date, Prompt)
        prompts.put(date, new Prompt(7, date, "Spring Boot is fun!"));
        prompts.put(date.minusDays(1), new Prompt(6, date.minusDays(1), "I love cupcakes"));
        prompts.put(date.minusDays(2), new Prompt(5, date.minusDays(2), "Captain America dies"));
        prompts.put(date.minusDays(3), new Prompt(4, date.minusDays(3), "I'm keeping the xmas lights up"));
        prompts.put(date.minusDays(4), new Prompt(3, date.minusDays(4), "I need a job"));
        prompts.put(date.plusDays(1), new Prompt(8, date.plusDays(1), "If Peter Piper picked a pack of pickled peppers"));
        prompts.put(date.minusDays(5), new Prompt(2, date.minusDays(5), "then where's the pack of picked peppers"));
        prompts.put(date.minusDays(6), new Prompt(1, date.minusDays(6), "Peter Piper picked?!"));
        prompts.put(date.plusDays(2), new Prompt(9, date.plusDays(2), "MARTHA!!!!!"));
        prompts.put(date.plusDays(3), new Prompt(10, date.plusDays(3), "Why would you say that name?!"));
        return prompts;
    }
}