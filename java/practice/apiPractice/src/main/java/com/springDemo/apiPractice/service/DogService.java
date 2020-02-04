package com.springDemo.apiPractice.service;

import com.springDemo.apiPractice.entity.Dog;
import com.springDemo.apiPractice.repository.DogRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class DogService {

    final DogRepository dogRepository;

    public DogService(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    public List<Dog> getAllDogs() {
        System.out.println("getting all dogs");
        List<Dog> allDogs = dogRepository.findAll();
        return allDogs;
    }

    public Dog getDogById(long id) {
        System.out.println("getting dog by id: " + id);
        Optional<Dog> optionalDog = dogRepository.findById(id);
        System.out.println(optionalDog.isPresent()
                ? optionalDog.get().getFirstName()
                : "No dogs by that id");
        return optionalDog.orElse(null);
    }

    public Dog newDog(
            String firstName,
            String lastName,
            int age,
            boolean goodDog,
            String breed
    ) {
        System.out.println("creating new dog");
        Dog newDog = dogRepository.save( new Dog(firstName, lastName, age, goodDog, breed));
        System.out.println("newDog: " + newDog.getFirstName());
        return newDog;
    }
//
//    public Dog getDefaultDog() {
//        return new Dog();
//    }
//
//    public Dog createNewDog(
//        String firstName,
//        String lastName,
//        int age,
//        Boolean goodDog,
//        Dog.Breed breed
//        ) {
//        return new Dog(firstName, lastName, age, goodDog, breed);
//    }
//
//    public DogCompareResponse compareDogs(
//            Dog defaultDog,
//            Dog dog1
//    ) {
//        List<String> goodDogs = new ArrayList<>();
//        if(defaultDog.isGoodDog()){
//            goodDogs.add(defaultDog.getFullName());
//        }
//        if(dog1.isGoodDog()) {
//            goodDogs.add(dog1.getFullName());
//        }
//        Dog oldestDog = defaultDog.getAge() > dog1.getAge() ? defaultDog : dog1 ;
//        return new DogCompareResponse(oldestDog, goodDogs);
//    }
}