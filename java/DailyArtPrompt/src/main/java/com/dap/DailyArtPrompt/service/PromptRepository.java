package com.dap.DailyArtPrompt.service;

// Import the HashMap class
import java.util.HashMap;

public class PromptRepository {
    public HashMap<String, String> getPrompts(){
        // Create a HashMap object called capitalCities
        HashMap<String, String> prompts = new HashMap<>();

        // Add keys and values (Date, Prompt)
        prompts.put("01-03-2020", "Dog");
        prompts.put("01-04-2020", "Cat");
        prompts.put("01-05-2020", "Horse");
        prompts.put("01-06-2020", "Cars");
        System.out.println(prompts);

        return prompts;
    }
}