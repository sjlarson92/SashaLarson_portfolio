package com.dap.DailyArtPrompt.service;

import com.dap.DailyArtPrompt.entity.Prompt;
import com.dap.DailyArtPrompt.repository.PromptRepository;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class PromptService {

    final PromptRepository promptRepository;

    public PromptService(PromptRepository promptRepository) {
        this.promptRepository = promptRepository;
    }

    public List<Prompt> getAllPrompts() {
        System.out.println("getting all prompts");
        List<Prompt> allPrompts = promptRepository.findAll();
        return allPrompts;
    }
}


//    public HashMap<LocalDate, Prompt> getAllPrompts(){
//        HashMap<LocalDate, Prompt> prompts = new HashMap<>();
//
//        LocalDate date = LocalDate.now();
//        // Add keys and values (Date, Prompt)
//        prompts.put(date, new Prompt(7, date, "Rainy Day"));
//        prompts.put(date.minusDays(1), new Prompt(6, date.minusDays(1), "Beach Vacation"));
//        prompts.put(date.minusDays(2), new Prompt(5, date.minusDays(2), "Sunflowers"));
//        prompts.put(date.minusDays(3), new Prompt(4, date.minusDays(3), "Full Moon"));
//        prompts.put(date.minusDays(4), new Prompt(3, date.minusDays(4), "Road Trip"));
//        prompts.put(date.plusDays(1), new Prompt(8, date.plusDays(1), "Galaxy"));
//        prompts.put(date.minusDays(5), new Prompt(2, date.minusDays(5), "Sunset"));
//        prompts.put(date.minusDays(6), new Prompt(1, date.minusDays(6), "Winter wonderland"));
//        prompts.put(date.plusDays(2), new Prompt(9, date.plusDays(2), "Sports"));
//        prompts.put(date.plusDays(3), new Prompt(10, date.plusDays(3), "Puppy Love"));
//        return prompts;
//    }
//}