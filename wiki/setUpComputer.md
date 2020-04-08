# Setting Up New Computer

# Applications to Download:

- Itsycal
- Spectacle
- 1Password
- Sophos

- iTerm2: 
    - Download your color theme (I'm using Cobalt2)
    - Update in iTerm:
        - Preferences>Profiles>Colors>ColorPresets>Import
        - Choose your theme and Import
    - Reopen iTerm window to view changes

* Make sure you are downloading the latest compatible versions! Otherwise some apps may not run:

- VS Code Studio

- IntelliJ

- Postman

- Postgres
    - Download from: https://postgresapp.com/downloads.html

- zsh

- Oh My Zsh: follow these directions -> https://www.smashingmagazine.com/2015/07/become-command-line-power-user-oh-my-zsh-z/
    - See themes at https://github.com/ohmyzsh/ohmyzsh/wiki/Themes (I'm using "cobalt2")
    - Change ✝ symbol by going to `~/.oh-my-zsh/themes/cobalt2.zsh-theme` and edit the symbol directly (source after)
    - You can search for the symbol in vim by using `/✝` 

- Homebrew

- yarn 
    - `brew install yarn`
- java

- Link/Sync Github
    - Clone repositories locally
    - On the first push you will need to login to GitHub

- Link Terminal Aliases (/dotfiles/.bash_profile)
    - Copy text in bash_profile (in dotfiles) to local /.bash_profile OR create alias for .bash_profile to directly link it to bash_profile in dotfiles
    - add this line to the bottom of .zshrc file `source ~/.bash_profile`
    - then run `source ~/.zshrc` to get updated bash_profile

## 

# Stop Mac from rearranging screen by most used

- System Preferences -> Mission Control -> Uncheck box to 'Automatically rearrange spaces'

# Show hidden files

- In Finder, open up your Macintosh HD folder
- Press Command+Shift+Dot
- Your hidden files will become visible. Repeat step 2 to hide them again!

# Creating Aliases

- Aliases can be created in the .bash_profile `alias sl='cd ~/Desktop/folderName'` 

- Make sure to run `source .bash_profile` to refresh and add the new alias


# Adding Terminal Commands to PATH

- You can add terminal commands `psql` to your terminal by adding them to PATH in your .bash_profile 
`export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin/`

- Make sure to run `source .bash_profile` to refresh and add the new alias