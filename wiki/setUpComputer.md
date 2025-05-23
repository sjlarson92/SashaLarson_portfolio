# Setting Up New Computer

# Applications to Download:

- Rectangle
- 1Password
- 
- Scroll Reverser
  - Only reverse scroll for mouse

- iTerm2: 
    - Update color theme (half-life)
    - Reopen iTerm window to view changes

* Make sure you are downloading the latest compatible versions! Otherwise some apps may not run:

- IntelliJ:
    - Plugins: 
        - Lombok
        - One Dark Theme 
        - Nyan Progress Bar

- Postman

- Postgres/DB
    - Download from: https://postgresapp.com/downloads.html
    - Set up password for superuser

- zsh
  - https://ohmyz.sh/#install

- Oh My Zsh: 
    - clone this repository and follow directions on this page: https://github.com/wesbos/Cobalt2-iterm
    - See other themes at https://github.com/ohmyzsh/ohmyzsh/wiki/Themes (I'm using "cobalt2")
    - Change ✝ symbol by going to `~/.oh-my-zsh/themes/cobalt2.zsh-theme` and edit the symbol directly (source after to show changes/ I have changed this symbol to 'SL')
    - You can search for the symbol in vim by using `/✝`

- Symlink .bash_profile Terminal Aliases (/dotfiles/.bash_profile)
    - Copy text in bash_profile (in dotfiles) to local /.bash_profile OR create alias for .bash_profile to directly link it to bash_profile in dotfiles of SashaLarson_portfolio (this must be cloned down to work)
    - In terminal type following command: `ln -sfn ~/Desktop/SashaLarson_portfolio/dotfiles/bash_profile ~/.bash_profile`
    - add this line to the bottom of .zshrc file `source ~/.bash_profile`
    - then run `source ~/.zshrc` to get updated bash_profile

# Set up Permission for GitHub
- Generate A New SSH Key and Add it to SSH Agent on local machine
  - https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  1. Open Terminal
  2. Paste the following text in the terminal, replacing the email used in the example with your GitHub email address.`ssh-keygen -t ed25519 -C "your_email@example.com"`
  3. Computer will prompt you to enter a file in which to save the key. Press Enter, unless you are specifically designating a different file
  4. Computer will prompt for passphrase, if not passphrase just press enter
  5. Open the SSH config file on your computer `vim ~/.ssh.config` if it does not exist create it `touch ~/.ssh/config`
  6. Modify file to contain the following lines. If you SSH key file has a different name or path modify the text to match.
```
Host github.com
AddKeysToAgent yes
UseKeychain yes
IdentityFile ~/.ssh/id_ed25519
```
7. Add your SSH **Private** key to the SSH agent and store passphare in keychain (paste this command in the terminal)
   `ssh-add --apple-use-keychain ~/.ssh/id_ed25519`
8. Add your SSH **Public** key to your account on GitHub which is under your account > Access > SSH and GPG keys
9. To verify this has been set up properly under the git folder in your cloned project check the user.name and user.email
   `git config user.name`
   `git config user.email`

# Setting up projects with GitHub
- Clone repositories locally
    - Clone repository from Github using the SSH link
    - For example this repo is `git@github.com:sjlarson92/SashaLarson_portfolio.git`
    - The terminal command to clone this is: `git clone git@github.com:sjlarson92/SashaLarson_portfolio.git`

# Stop Mac from rearranging screen by most used
- System Preferences -> Mission Control -> Uncheck box to 'Automatically rearrange spaces'

# Show hidden files

- In Finder, open up your Macintosh HD folder
- Press Command+Shift+Dot
- Your hidden files will become visible. Repeat step 2 to hide them again!

# Creating Aliases

- Aliases can be created in the .bash_profile `alias sl='cd ~/Desktop/folderName'` 

- Make sure to run `source .bash_profile` to refresh and add the new alias

```
alias la='ls -la'
alias cs='cd ~/Desktop/{folderName}'
alias gs='git status'
alias ga='git add . && git status'
alias gcm='git commit -m'
alias gclean='echo "Doing a git pull, git fetch --all --prune and a gclean" && git pull && git fetch --all --prune && git branch --merged | grep -v "\*" | grep -Ev "(\*|master|develop|staging)" | xargs -n 1 git branch -d'
alias python='python3'
```


# Adding Terminal Commands to PATH

- You can add terminal commands `psql` to your terminal by adding them to PATH in your .bash_profile 
`export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin/`

- Make sure to run `source .bash_profile` to refresh and add the new alias