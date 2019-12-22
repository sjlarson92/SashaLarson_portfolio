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

    public static void main(String[] args) {
        Dog myDog = new Dog();
        System.out.println("\n---------------Dog Default Constructor------------");
        System.out.println("\nfirstName: " + myDog.firstName + "\nlastName: " + myDog.lastName + "\n Age is: "
                + myDog.age + "\n isGoodBoy: " + myDog.isGoodDog + "\n Breed is: " + myDog.breed);

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

        Dog userDog = new Dog(firstName, lastName, age, isGoodDog, breed);
        System.out.println("\n--------------------" + "\nYou new Dog is: " + userDog.firstName + " " + userDog.lastName
                + "\nAge: " + userDog.age + "\nisGoodBoy: " + userDog.isGoodDog + "\nBreed: " + userDog.breed);
    }
}