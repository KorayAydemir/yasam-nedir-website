let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/code/projects/react/newyasamnedir
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +5 src/client/index.js
badd +14 src/server/app.js
badd +1 src/server/index.js
badd +1 src/server/utils.js
badd +1113 ~/Library/Caches/typescript/5.1/node_modules/@types/express-serve-static-core/index.d.ts
badd +1 public/index.html
badd +31 webpack/webpack.dev.config.js
argglobal
%argdel
edit src/server/app.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 1resize ' . ((&columns * 93 + 67) / 134)
exe '2resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 2resize ' . ((&columns * 93 + 67) / 134)
exe '3resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 3resize ' . ((&columns * 40 + 67) / 134)
exe '4resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 4resize ' . ((&columns * 40 + 67) / 134)
argglobal
balt ~/Library/Caches/typescript/5.1/node_modules/@types/express-serve-static-core/index.d.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 14 - ((8 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 14
normal! 015|
wincmd w
argglobal
if bufexists(fnamemodify("webpack/webpack.dev.config.js", ":p")) | buffer webpack/webpack.dev.config.js | else | edit webpack/webpack.dev.config.js | endif
if &buftype ==# 'terminal'
  silent file webpack/webpack.dev.config.js
endif
balt src/server/app.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 31 - ((9 * winheight(0) + 9) / 19)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 31
normal! 020|
wincmd w
argglobal
if bufexists(fnamemodify("public", ":p")) | buffer public | else | edit public | endif
if &buftype ==# 'terminal'
  silent file public
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 3 - ((2 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 3
normal! 0
lcd ~/code/projects/react/newyasamnedir
wincmd w
argglobal
if bufexists(fnamemodify("~/code/projects/react/newyasamnedir/public/index.html", ":p")) | buffer ~/code/projects/react/newyasamnedir/public/index.html | else | edit ~/code/projects/react/newyasamnedir/public/index.html | endif
if &buftype ==# 'terminal'
  silent file ~/code/projects/react/newyasamnedir/public/index.html
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 2 - ((1 * winheight(0) + 9) / 19)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 2
normal! 0
lcd ~/code/projects/react/newyasamnedir
wincmd w
4wincmd w
exe '1resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 1resize ' . ((&columns * 93 + 67) / 134)
exe '2resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 2resize ' . ((&columns * 93 + 67) / 134)
exe '3resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 3resize ' . ((&columns * 40 + 67) / 134)
exe '4resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 4resize ' . ((&columns * 40 + 67) / 134)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
