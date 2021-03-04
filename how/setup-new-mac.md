## Add disk volumes (case-sensitive option enabled for dev)

## Install a package manager for macOS: [homebrew](https://brew.sh/)
``` bash
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
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

## Add Zsh configuration: [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)
``` bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
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

## (optional) [Separate work and personal SSH](https://dublin-java.tistory.com/62)

## Install a package manager for JavaScript: [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Install a Python distribution: [Miniconda](https://docs.conda.io/en/latest/miniconda.html)
```
$ brew install miniconda
...
$ conda init zsh
```

## Install a notebook: [Jupyter Notebook](https://jupyter.org/)
