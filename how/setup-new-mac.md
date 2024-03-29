## Add disk volumes (case-sensitive option enabled for dev)

## Disable `Keyboard > Text` Settings
- [ ] Add period with double space
- [ ] Use smart quotes and dashes

## Install a package manager for macOS: [homebrew](https://brew.sh/)
``` bash
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

## Install iTerm2 via Homebrew
``` bash
brew install --cask iterm2
```

## Add Zsh configuration `.zshrc`:
``` bash
setopt interactivecomments
PS1='▸ '
```

## Install Google Chrome via Homebrew
``` bash
brew install --cask google-chrome
```

## Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
``` bash
brew install git

git config --global init.defaultBranch main
```

## Install VS Code
``` bash
brew install --cask visual-studio-code
```

## Install a version manager for Node.js: [nvm](https://github.com/nvm-sh/nvm)
``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | zsh
```

## Install [Node.js](https://nodejs.org/en/) via nvm
``` bash
nvm install node # "node" is an alias for the latest version
```

## [Connect to GitHub with SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

### (optional) [Separate work and personal SSH](https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/)

## Install a package manager for JavaScript: [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Install a Python distribution: [Miniconda](https://docs.conda.io/en/latest/miniconda.html)

```
$ brew install miniconda
...
$ conda init zsh
```

## Install a notebook: [Jupyter Notebook](https://jupyter.org/)

## Connect an old Wacom tablet: [wacom-driver-fix](https://github.com/thenickdude/wacom-driver-fix)
