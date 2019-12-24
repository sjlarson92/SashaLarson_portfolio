import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Collections;

import static java.lang.System.out;

public class DogService {

    private static Dog.Breed setBreed(String args) {
        if (args.equals("a")) {
            return Dog.Breed.BEAGLE;
        } else if (args.equals("b")) {
            return Dog.Breed.MUTT;
        } else {
            return Dog.Breed.WESTIE;
        }
    };

    public Dog createNewDog() {
        Scanner myObj = new Scanner(System.in);
        Scanner in = new Scanner(System.in);

        out.println("\n----------------Create Your Own Dog---------------- \nEnter First Name: ");
        String firstName = myObj.nextLine();
        out.println("\nLast Name: ");
        String lastName = myObj.nextLine();

        out.println("\nAge: ");
        int age = in.nextInt();

        out.println("\n Is this dog a Good Dog? \na: Yes \nb: No");
        String goodBoy = myObj.nextLine();
        Boolean goodDog = goodBoy.equals("a") ? true : false;

        out.println("\nDog Breed: \nA: Beagle B: Mutt C: Westie ");
        String userInput = myObj.nextLine();
        Dog.Breed breed = setBreed(userInput);

        return new Dog(firstName, lastName, age, goodDog, breed);
    }

    public String getOldestDog(List<Dog> allDogs) {
        // List<Integer> dogAges = allDogs.stream().map(dog -> {
        // return dog.getAge();
        // }).collect(Collectors.toList());
        int max = allDogs.get(0).getAge();
        int index = 0;
        for (int i = 0; i < allDogs.size(); i++) {
            if (allDogs.get(i).getAge() > max) {
                max = allDogs.get(i).getAge();
                index = i;
            }
        }
        ;

        String oldestDog = allDogs.get(index).getFullName();
        return oldestDog;
    };

    public void getGoodDogs(Dog dog1, Dog dog2, Dog dog3) {
        if (dog1.isGoodDog()) {
            out.println(dog1.firstName);
        }
        if (dog2.isGoodDog()) {
            out.println(dog2.firstName);
        }
        if (dog3.isGoodDog()) {
            out.println(dog3.firstName);
        }
    };

    public void printDog(Dog dog) {
        out.println("Name: " + dog.firstName + " " + dog.lastName);
        out.println("Age: " + dog.age);
        out.println("Good Dog: " + dog.isGoodDog());
        out.println("Breed: " + dog.breed);
    }
}