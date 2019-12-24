import java.util.Scanner;

import static java.lang.System.out;

public class Factory {

    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        Dog defaultDog = new Dog();
        out.println("------------DEFAULT DOG------------");
        out.println("\nfirstName: " + defaultDog.firstName + "\nlastName: " + defaultDog.lastName + "\n Age is: "
                + defaultDog.age + "\n isGoodBoy: " + defaultDog.isGoodDog() + "\n Breed is: " + defaultDog.breed);

        Dog dog1 = createNewDog();
        out.println("\n---------NEW DOG-----------" + "\nName: " + dog1.firstName + " " + dog1.lastName + "\nAge: "
                + dog1.age + "\nisGoodBoy: " + dog1.isGoodDog() + "\nBreed: " + dog1.breed);

        Dog dog2 = createNewDog();
        out.println("\n---------NEW DOG 2-----------" + "\nName: " + dog2.firstName + " " + dog2.lastName + "\nAge: "
                + dog2.age + "\nisGoodBoy: " + dog2.isGoodDog() + "\nBreed: " + dog2.breed);

        out.println("--------Dog Comparisons--------");
        out.println("Oldest Dog is: " + getOldestDog(defaultDog, dog1, dog2));

        out.println("All the good dogs are: ");
        getGoodDogs(defaultDog, dog1, dog2);
    }
}