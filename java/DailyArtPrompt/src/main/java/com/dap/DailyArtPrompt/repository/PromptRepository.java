package com.dap.DailyArtPrompt.repository;

import com.dap.DailyArtPrompt.entity.Prompt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromptRepository extends JpaRepository<Prompt, Long>{

}