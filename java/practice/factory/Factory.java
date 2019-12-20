import java.util.Scanner;

public class Factory {

    public static void main(String[] args) {
        Dog myDog = new Dog();
        System.out.println("\nfirstName: " + myDog.firstName + "\nlastName: " + myDog.lastName + "\n Age is: "
                + myDog.age + "\n isGoodBoy: " + myDog.isGoodDog + "\n Breed is: " + myDog.breed);

        // 1- (Display) Create a Dog obj, without any args (no args contructor)
        // 2- (Allow user to) Create another dog, all args
        // User should see the dog 2's new data
        // 3- (Allow user to) Create a DIFFERENT dog with all args
        // User should see the dog 3's new data
        // 4- do some dog comparisons
        // min req: show me oldest dog, all good dogs
    }
}