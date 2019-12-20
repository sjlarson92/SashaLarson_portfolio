public class Dog {
    enum Breed {
        BEAGLE, MUTT, WESTIE
    }

    String firstName;
    String lastName;
    int age;
    Boolean isGoodDog;
    Breed breed;

    public Dog() {
        this.firstName = "HeWhoShall";
        this.lastName = "NotBeNamed";
        this.age = 90;
        this.isGoodDog = false;
        this.breed = Breed.BEAGLE;
    }
    // any attributes - min: firstName, lastName, age, breed [specific type (enum,
    // not a string)], isGoodDog
    // any getters/setters/ maybe other stuff?

    // 1- no args should have funny first/last names, breed: beagle, isGoodDog false

}