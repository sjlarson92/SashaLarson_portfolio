import java.util.Scanner;

public class Factory {
    static Dog.Breed setBreed(String args) {
        if (args.equals("a")) {
            return Dog.Breed.BEAGLE;
        } else if (args.equals("b")) {
            return Dog.Breed.MUTT;
        } else {
            return Dog.Breed.WESTIE;
        }
    };

    static Dog createNewDog() {
        Scanner myObj = new Scanner(System.in);
        Scanner in = new Scanner(System.in);

        System.out.println("\n----------------Create Your Own Dog---------------- \nEnter First Name: ");
        String firstName = myObj.nextLine();
        System.out.println("\nLast Name: ");
        String lastName = myObj.nextLine();

        System.out.println("\nAge: ");
        int age = in.nextInt();

        System.out.println("\n Is this dog a Good Dog? \na: Yes \nb: No");
        String goodBoy = myObj.nextLine();
        Boolean isGoodDog = goodBoy.equals("a") ? true : false;

        System.out.println("\nDog Breed: \nA: Beagle B: Mutt C: Westie ");
        String userInput = myObj.nextLine();
        Dog.Breed breed = setBreed(userInput);

        return new Dog(firstName, lastName, age, isGoodDog, breed);
    }

    static String getOldestDog(Dog dog1, Dog dog2, Dog dog3) {
        int d1Age = dog1.getAge();
        int d2Age = dog2.getAge();
        int d3Age = dog3.getAge();
        String oldestDog;
        if (d1Age > d2Age) {
            if (d1Age > d3Age) {
                oldestDog = dog1.firstName;
            } else {
                oldestDog = dog3.firstName;
            }
        } else {
            if (d2Age > d3Age) {
                oldestDog = dog2.firstName;
            } else {
                oldestDog = dog3.firstName;
            }
        }
        return oldestDog;
    };

    static void getGoodDogs(Dog dog1, Dog dog2, Dog dog3) {
        if (dog1.isGoodDog) {
            System.out.println(dog1.firstName);
        }
        if (dog2.isGoodDog) {
            System.out.println(dog2.firstName);
        }
        if (dog3.isGoodDog) {
            System.out.println(dog3.firstName);
        }
    };

    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        Dog defaultDog = new Dog();
        System.out.println("\n------------DEFAULT DOG------------");
        System.out.println("\nfirstName: " + defaultDog.firstName + "\nlastName: " + defaultDog.lastName + "\n Age is: "
                + defaultDog.age + "\n isGoodBoy: " + defaultDog.isGoodDog + "\n Breed is: " + defaultDog.breed);

        Dog dog1 = createNewDog();
        System.out.println("\n---------NEW DOG-----------" + "\nName: " + dog1.firstName + " " + dog1.lastName
                + "\nAge: " + dog1.age + "\nisGoodBoy: " + dog1.isGoodDog + "\nBreed: " + dog1.breed);

        Dog dog2 = createNewDog();
        System.out.println("\n---------NEW DOG 2-----------" + "\nName: " + dog2.firstName + " " + dog2.lastName
                + "\nAge: " + dog2.age + "\nisGoodBoy: " + dog2.isGoodDog + "\nBreed: " + dog2.breed);

        System.out.println("--------Dog Comparisons--------");
        System.out.println("Oldest Dog is: " + getOldestDog(defaultDog, dog1, dog2));

        System.out.println("All the good dogs are: ");
        getGoodDogs(defaultDog, dog1, dog2);
    }
}