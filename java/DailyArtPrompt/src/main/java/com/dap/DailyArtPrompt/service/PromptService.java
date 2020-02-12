package com.dap.DailyArtPrompt.service;

import com.dap.DailyArtPrompt.entity.Prompt;
import com.dap.DailyArtPrompt.repository.PromptRepository;
import jdk.vm.ci.meta.Local;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@Component
public class PromptService {

    final PromptRepository promptRepository;

    public PromptService(PromptRepository promptRepository) {
        this.promptRepository = promptRepository;
    }

    public HashMap<LocalDate, Prompt> getAllPrompts() {
        List<Prompt> allPromptsList = promptRepository.findAll();

        HashMap<LocalDate, Prompt> allPromptsHashMap = new HashMap<>();

        for (Prompt prompt : allPromptsList) {
            LocalDate date = LocalDate.parse(prompt.getDate());
            allPromptsHashMap.put(date, prompt);
        }

        return allPromptsHashMap;
    }
}