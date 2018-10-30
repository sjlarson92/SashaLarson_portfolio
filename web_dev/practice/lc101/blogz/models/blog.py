class Blog:
    def __init__(self, blog_id, user_id, name, post):
        # print("this is init function in example class")
        self.blog_id = blog_id
        self.user_id = user_id
        self.name = name
        self.post = post

    def get_name(self):
        return self.name

    def get_blog_id(self):
        return self.blog_id

    def get_user_id(self):
        return self.user_id

    def get_post(self):
        return self.post
