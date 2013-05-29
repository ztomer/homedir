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

# Lock and Load a custom theme file
# location /.bash_it/themes/
export BASH_THEME='envy'

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
