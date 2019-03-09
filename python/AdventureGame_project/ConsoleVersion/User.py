

class Player: # this creates a class called Users
    def __init__(self, username):
        self.name = username
        self.chapter = 0
        self.choice = 0
        self.life = True

    def get_name(self):
        return self.name

    def get_chapter(self):
        return self.chapter

    def get_choice(self):
        return self.choice

    def set_name(self, new_name):
        self.name = new_name

    def set_choice(self, new_choice):
        self.choice = new_choice

    def next_chapter(self):
        self.chapter = self.chapter + 1

    def kill_player(self):
        self.life = False

    def check_life(self):
        return self.life
