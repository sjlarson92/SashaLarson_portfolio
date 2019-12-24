public class Dog {
    enum Breed {
        BEAGLE, MUTT, WESTIE
    }

    String firstName;
    String lastName;
    int age;
    Boolean goodDog;
    Breed breed;

    public Dog() {
        this.firstName = "HeWhoShall";
        this.lastName = "NotBeNamed";
        this.age = 666;
        this.goodDog = false;
        this.breed = Breed.BEAGLE;
    }

    public Dog(String firstName, String lastName, int age, Boolean goodDog, Breed breed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.goodDog = goodDog;
        this.breed = breed;
    }

    public int getAge() {
        return this.age;
    }

    public Boolean isGoodDog() {
        return this.goodDog;
    }

}