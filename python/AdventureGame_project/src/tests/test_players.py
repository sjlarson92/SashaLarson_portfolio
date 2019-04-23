import unittest

from src.models import updatePlayerChandChoice

# need to add mock db for dummy data

class TestUpdatePlayerChAndChoice(unittest.TestCase):
    def test_chapter(self):
        #test if chNum is updating correctly
        data = ['userName','userChoice',1]
        result = updatePlayerChandChoice(data)

        self.assertEqual(result[2], 2)

if __name__ == '__main__':
    unittest.main()
