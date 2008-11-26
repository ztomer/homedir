set nocompatible
set ls=2
set showmode
set tabstop=4
set shiftwidth=4
set expandtab
set softtabstop=4
if has('mouse')
    set mouse=a
endif
set nomodeline
set showmatch
set title

" i18n friendly
set fileencoding=utf-8

if has('syntax') && (&t_Co > 2 || has('win32'))
    syntax on
    colorscheme elflord
    set background=dark
endif

if has('cmdline_info')
    set ruler
    set rulerformat=%30(%=\:b%n%y%m%r%w\ %l,%c%V\ %P%)
    set showcmd
endif

filetype on

set whichwrap=h,l,~,[,]
set backspace=eol,start,indent

