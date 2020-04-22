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

- IntelliJ:
    - Plugins: 
        - Lombok
        - One Dark Theme 

- Postman

- Postgres
    - Download from: https://postgresapp.com/downloads.html

- zsh

- Oh My Zsh: 
    - clone this repository and follow directions on this page: https://github.com/wesbos/Cobalt2-iterm
    - See other themes at https://github.com/ohmyzsh/ohmyzsh/wiki/Themes (I'm using "cobalt2")
    - Change ✝ symbol by going to `~/.oh-my-zsh/themes/cobalt2.zsh-theme` and edit the symbol directly (source after to show changes/ I have changed this symbol to 'SL')
    - You can search for the symbol in vim by using `/✝` 

- Homebrew
    - java: I have since found that it is better to install java using SDK man instead of Homebrew as it is easier to switch versions with this
    - yarn 
        - `brew install yarn`
        
- Link/Sync Github
    - Clone repositories locally
    - On the first push you will need to login to GitHub with credentials

- Symlink .bash_profile Terminal Aliases (/dotfiles/.bash_profile)
    - Copy text in bash_profile (in dotfiles) to local /.bash_profile OR create alias for .bash_profile to directly link it to bash_profile in dotfiles
    - In terminal type following command: `ln -sfn ~/Desktop/SashasProjects/SashaLarson_portfolio/dotfiles/bash_profile ~/.bash_profile`
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