#!/bin/bash

# Load RVM, if you are using it
[[ -s $HOME/.rvm/scripts/rvm ]] && source $HOME/.rvm/scripts/rvm

# Expand PATH
export PATH=$HOME/bin:/usr/local/bin:/usr/local/sbin:$PATH
export NODE_PATH=/usr/local/lib/node_modules:$NODE_PATH

# Path to the bash it configuration
export BASH=$HOME/.bash_it

# Lock and Load a custom theme file
# location /.bash_it/themes/
export BASH_THEME='bobby'

# Set my editor and git editor
export EDITOR="/usr/bin/env subl"
export GIT_EDITOR='/usr/bin/env subl -w -n'

# Alias mate to subl :-)
alias mate=subl

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

# Add path to development version of rbfu
export PATH="$HOME/src/rbfu/bin:$PATH"

# Initialize rbfu
eval "$(rbfu --init --auto)"
