import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

import static java.lang.System.out;

public class Factory {

    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        List<Dog> allDogs = new ArrayList<>();
        Dog defaultDog = new Dog();
        allDogs.add(defaultDog);

        DogService dogService = new DogService();

        out.println("------------DEFAULT DOG------------");
        dogService.printDog(defaultDog);

        Dog dog1 = dogService.createNewDog();
        allDogs.add(dog1);
        out.println("---------NEW DOG #1-----------");
        dogService.printDog(dog1);

        Dog dog2 = dogService.createNewDog();
        allDogs.add(dog2);
        out.println("---------NEW DOG #2-----------");
        dogService.printDog(dog2);

        out.println("--------Dog Comparisons--------");
        out.println("Oldest Dog is: " + dogService.getOldestDog(allDogs));

        out.println("All the good dogs are: ");
        dogService.getGoodDogs(allDogs);
    }
}