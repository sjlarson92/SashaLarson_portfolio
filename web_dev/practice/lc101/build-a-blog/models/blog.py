class Blog:
    def __init__(self, id, title, text):
        # print("this is init function in example class")
        self.name = title
        self.id = id
        self.post = text

    def get_name(self):
        return self.name

    def get_id(self):
        return self.id

    def get_post(self):
        return self.post
