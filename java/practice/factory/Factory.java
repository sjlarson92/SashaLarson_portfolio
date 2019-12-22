import java.util.Scanner;

public class Factory {
    static Dog.Breed getBreed(String args) {
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
        Dog.Breed breed = getBreed(userInput);

        return new Dog(firstName, lastName, age, isGoodDog, breed);
    }

    static void engine() {
        Boolean gameRunning = true;
        Dog[] dogList;
        Scanner myObj = new Scanner(System.in);
        Dog defaultDog = new Dog();
        System.out.println("\n------------DEFAULT DOG------------");
        System.out.println("\nfirstName: " + defaultDog.firstName + "\nlastName: " + defaultDog.lastName + "\n Age is: "
                + defaultDog.age + "\n isGoodBoy: " + defaultDog.isGoodDog + "\n Breed is: " + defaultDog.breed);

        do {
            System.out.println(
                    "\n----------CHOOSE WHAT TO DO NEXT:------------ \nA: CREATE NEW DOG  B: COMPARE DOGS C: QUIT");
            String userDecision = myObj.nextLine();

            if (userDecision.equals("a")) {
                Dog newDog = createNewDog();
                System.out.println("\n---------NEW DOG-----------" + "\nName: " + newDog.firstName + " "
                        + newDog.lastName + "\nAge: " + newDog.age + "\nisGoodBoy: " + newDog.isGoodDog + "\nBreed: "
                        + newDog.breed);
            } else if (userDecision.equals("b")) {
                System.out.println("\n-------Compare feature is under construction-----");
            } else {
                gameRunning = false;
            }
        } while (gameRunning);
    }

    public static void main(String[] args) {
        engine();

        // Dog dog1 = createNewDog();
        // System.out.println("\n---------NEW DOG-----------" + "\nName: " +
        // dog1.firstName + " " + dog1.lastName
        // + "\nAge: " + dog1.age + "\nisGoodBoy: " + dog1.isGoodDog + "\nBreed: " +
        // dog1.breed);

        // Dog dog2 = createNewDog();
        // System.out.println("\n---------NEW DOG 2-----------" + "\nName: " +
        // dog2.firstName + " " + dog2.lastName
        // + "\nAge: " + dog2.age + "\nisGoodBoy: " + dog2.isGoodDog + "\nBreed: " +
        // dog2.breed);
    }
}