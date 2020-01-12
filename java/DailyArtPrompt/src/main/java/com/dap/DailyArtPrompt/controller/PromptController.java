package com.dap.DailyArtPrompt.controller;

import com.dap.DailyArtPrompt.model.Prompt;
import com.dap.DailyArtPrompt.service.PromptService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpHeaders;
import java.time.LocalDate;
import java.util.HashMap;

@RestController
@RequestMapping("/prompt")
public class PromptController {
    PromptService promptRepository = new PromptService();

    @GetMapping("/all")
    public ResponseEntity<HashMap<LocalDate, Prompt>> getAllPrompts() {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
        HashMap<LocalDate, Prompt> responseBody = promptRepository.getAllPrompts();
        return ResponseEntity.ok().headers(headers).body(responseBody);
    }
}