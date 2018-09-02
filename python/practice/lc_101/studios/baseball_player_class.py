class Baseball_player:
    def __init__(self, name, jersey_num):
        self.name = name
        self.number = jersey_num
        self.hits = 0
        self.rbi = 0
        self.games_played = 0

    def game(self, hits, rbi):
        self.games_played = self.games_played + 1
        self.hits = self.hits + hits
        self.rbi = self.rbi + rbi
        return self.games_played

jim = Baseball_player('jimmy', 13)

jim.game(2,3)

print(jim.games_played)

jim.game(3,4)

print(jim.hits)
