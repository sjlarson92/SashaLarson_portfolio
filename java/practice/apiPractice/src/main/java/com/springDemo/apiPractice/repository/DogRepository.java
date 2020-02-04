package com.springDemo.apiPractice.repository;

import com.springDemo.apiPractice.entity.Dog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogRepository extends JpaRepository<Dog, Long>{}