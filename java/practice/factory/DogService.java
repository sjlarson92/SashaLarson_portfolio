import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

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

        out.println("----------------Create Your Own Dog----------------");
        out.println("Enter First Name: ");
        String firstName = myObj.nextLine();
        out.println();
        out.println("Last Name: ");
        String lastName = myObj.nextLine();
        out.println();
        out.println("Age: ");
        int age = in.nextInt();
        out.println();
        out.println("Is this dog a Good Dog?");
        out.println();
        out.println("Yes or No");
        String goodBoy = myObj.nextLine();
        boolean goodDog = goodBoy.equals("y") ? true : false;
        out.println();
        out.println("Dog Breed:");
        out.println("A: Beagle B: Mutt C: Westie ");
        out.println();
        String userInput = myObj.nextLine();
        Dog.Breed breed = setBreed(userInput);

        return new Dog(firstName, lastName, age, goodDog, breed);
    }

    public Dog getOldestDog(List<Dog> allDogs) {
        int max = allDogs.get(0).getAge();
        int index = 0;
        for (int i = 0; i < allDogs.size(); i++) {
            if (allDogs.get(i).getAge() > max) {
                max = allDogs.get(i).getAge();
                index = i;
            }
        }

        return allDogs.get(index);
    };

    public void printGoodDogs(List<Dog> allDogs) {
        for (int i = 0; i < allDogs.size(); i++) {
            if (allDogs.get(i).isGoodDog()) {
                out.println(allDogs.get(i).getFullName());
                out.println();
            }
        }
    };

    public void printDog(Dog dog) {
        out.println("Name: " + dog.getFullName());
        out.println("Age: " + dog.getAge());
        out.println("Good Dog: " + dog.isGoodDog());
        out.println("Breed: " + dog.getBreed());
        out.println();
    }
}