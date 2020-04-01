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
- VS Code Studio
- IntelliJ
- Postman
- zsh
- Homebrew
- yarn
- java
- Link/Sync Github
- Link Terminal Aliases (/dotfiles/.bash_profile)

## 

# Stop Mac from rearranging screen by most used

- System Preferences -> Mission Control -> Uncheck box to 'Automatically rearrange spaces'

# Creating Aliases

- Aliases can be created in the .bash_profile `alias sl='cd ~/Desktop/folderName'` 

- Make sure to run `source .bash_profile` to refresh and add the new alias


# Adding Terminal Commands to PATH

- You can add terminal commands `psql` to your terminal by adding them to PATH in your .bash_profile 
`export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin/`

- Make sure to run `source .bash_profile` to refresh and add the new alias