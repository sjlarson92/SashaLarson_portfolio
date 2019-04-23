import unittest
from helpers import alphabet_position, rotate_character

class TestHelpers(unittest.TestCase):
    def test_alpahbetPosition(self):
        data = 'A'
        result = alphabet_position(data)

        self.assertEqual(result, 0)

if __name__ == '__main__':
    unittest.main()
