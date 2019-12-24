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

    public String getOldestDog(Dog dog1, Dog dog2, Dog dog3) {
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
}