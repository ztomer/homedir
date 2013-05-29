#!/bin/bash

# Load RVM, if you are using it
[[ -s $HOME/.rvm/scripts/rvm ]] && source $HOME/.rvm/scripts/rvm

# Expand PATH
export PATH=$HOME/bin:/usr/local/bin:/usr/local/sbin:$PATH
export NODE_PATH=/usr/local/lib/node_modules:$NODE_PATH

# Add NPM-installed bins to PATH
export PATH=/usr/local/share/npm/bin:$PATH

# Path to the bash it configuration
export BASH=$HOME/.bash_it

# Configure prompt. (via http://neverstopbuilding.net/gitpro/)
MAGENTA="\[\033[0;35m\]"
YELLOW="\[\033[0;33m\]"
BLUE="\[\033[34m\]"
LIGHT_GRAY="\[\033[0;37m\]"
CYAN="\[\033[0;36m\]"
GREEN="\[\033[0;32m\]"
GIT_PS1_SHOWDIRTYSTATE=true

export PS1=$GREEN"\u@\h"'$(
    if [[ $(__git_ps1) =~ \*\)$ ]]
    then echo "'$YELLOW'"$(__git_ps1 " (%s)")
    elif [[ $(__git_ps1) =~ \+\)$ ]]
    then echo "'$MAGENTA'"$(__git_ps1 " (%s)")
    else echo "'$CYAN'"$(__git_ps1 " (%s)")
    fi)'$BLUE" \w"$LIGHT_GRAY": "

# Set my editor and git editor
export EDITOR="/usr/bin/env subl"
export GIT_EDITOR='/usr/bin/env subl -w -n'

# I like colors.
export CLICOLOR=1
export GREP_OPTIONS='--color=auto'

# Don't check mail when opening terminal.
unset MAILCHECK

# Load Bash It
[ -d "$BASH" ] && source $BASH/bash_it.sh

# My aliases
alias be="bundle exec"

# Add bash completion for homebrew installed packages
if [ -f `brew --prefix`/etc/bash_completion ]; then
  . `brew --prefix`/etc/bash_completion
fi

# Initialize chruby
source /usr/local/opt/chruby/share/chruby/chruby.sh
source /usr/local/opt/chruby/share/chruby/auto.sh

# Execute local .bash_profile if availab;e
[ -e "$HOME/.bash_profile.local" ] && source "$HOME/.bash_profile.local"
