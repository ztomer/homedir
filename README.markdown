## homedir

Files from my home directory (work, laptop and shared hosting). Forked from
[Carlo](http://github.com/carlo/homedir) who forked it from
[Brad](http://github.com/bradleywright/homedir) who forked it from
[Norm](http://github.com/norm/homedir).
Wow, this is getting confusing.

## Installation

**Please note** that this is not really meant as a software package
that you install on your own system(s) to gain certain features (or not), but
rather as a piece of reference (and, of course, for my own use).

If you do want to use it anyway, I recommend creating a fork before making
any significant changes. If you're crazy enough to use my stuff as-is, this
is how to do it:

    git clone git://github.com/hmans/homedir.git
	  cd homedir
	  ./install.sh

Please note that running `install.sh` will create stuff in your actual home directory. In case of file name collisions, existing files will be renamed, existing symlinks will be removed.
