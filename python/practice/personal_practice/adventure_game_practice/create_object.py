class Player:
    # print("this is example class")
    def __init__(self, full_name):
        # print("this is init function in example class")
        self.name = full_name
        self.chapter = 0
        self.choice = 0 # setting default value of self.choice to 0
        self.life = True

    def get_name(self):
        return self.name

    def get_choice(self):
        return self.choice

    def get_chapter(self):
        return self.chapter

    def set_name(self, new_name):
        self.name = new_name

    def set_choice(self, new_choice):
        self.choice = new_choice

    def next_chapter(self):
        self.chapter = self.chapter + 1

    def kill_player(self):
        self.life = False

    # def year_born(self):
    #     current_year = 2018
    #     birth_year = current_year - self.age
    #     return birth_year
    #
    # def how_tall(self):
    #     if self.tall > 5.5:
    #         x = "Wow you're tall!"
    #
    #     else:
    #         x = "Haha you're short"
    #
    #     return x
