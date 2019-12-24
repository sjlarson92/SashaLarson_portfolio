import java.util.Scanner;

import static java.lang.System.out;

public class Factory {

    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        Dog defaultDog = new Dog();
        DogService dogService = new DogService();

        out.println("------------DEFAULT DOG------------");
        out.println("Name: " + defaultDog.firstName + " " + defaultDog.lastName);
        out.println("Age: " + defaultDog.age);
        out.println("Good Dog: " + defaultDog.isGoodDog());
        out.println("Breed: " + defaultDog.breed);

        Dog dog1 = dogService.createNewDog();
        out.println("---------NEW DOG #1-----------");
        out.println("Name: " + dog1.firstName + " " + dog1.lastName);
        out.println("Age: " + dog1.age);
        out.println("Good Dog: " + dog1.isGoodDog());
        out.println("Breed: " + dog1.breed);

        Dog dog2 = dogService.createNewDog();
        out.println("---------NEW DOG #2-----------");
        out.println("Name: " + dog2.firstName + " " + dog1.lastName);
        out.println("Age: " + dog2.age);
        out.println("Good Dog: " + dog2.isGoodDog());
        out.println("Breed: " + dog2.breed);

        out.println("--------Dog Comparisons--------");
        out.println("Oldest Dog is: " + dogService.getOldestDog(defaultDog, dog1, dog2));

        out.println("All the good dogs are: ");
        dogService.getGoodDogs(defaultDog, dog1, dog2);
    }
}