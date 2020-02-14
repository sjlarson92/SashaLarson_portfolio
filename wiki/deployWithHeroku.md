# Deploy App with Heroku

- Dyno = Server (essentially)

- If moving app from inside a repo make sure to connect to GitHub and then connect to Heroku

```sh
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/sjlarson92/app-name.git
git push -u origin master
```

- `heroku git:remote -a app-name` connects project repo to Heroku

- check `git remote -v` to make sure you are pushing/fetchign from both Github and heroku

- use `git push heroku` to push to heroku
