class User:
    def __init__(self, user_id, username, password):
        # print("this is init function in example class")
        self.user_id = user_id
        self.username = username
        self.password = password

    def get_username(self):
        return self.username

    def get_user_id(self):
        return self.user_id

    def get_password(self):
        return self.password
