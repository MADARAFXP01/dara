const help = (p, date, user, wame) => {
return `Olรก @${user} bem vindo ao โDAKI๐ฅโ, 
vejo aqui que vocรช assinou meu contrato entรฃo tem acesso ao menu,
se quiser ver minhas redes sociais escreva o comandos ${p}sociais.

โญโโโโโโโโโโโโโโโโโโโโฎ
โโDAKI BOT๐ฅโ
โ  
โ ๐ ๐๐๐ญ๐: ${date}
โ ๐ ๐๐๐ฆ๐: 
โ ${wame}
โ ๐ค๐๐จ๐ช๐ฬ๐ง๐๐ค: ${user}
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ โก ๐๐๐๐๐พ๐๐๐ผ๐๐ โก
โ
โ ${p}listblockcmd 
โ ${p}listpalavra 
โ ${p}menu 
โ ${p}ping 
โ ${p}blocklist 
โ ${p}blacklist 
โ ${p}criador  
โ ${p}toimg (resp sticker) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ ๐พ๐๐๐ผ๐ฟ๐๐ ๐
โ
โ ${p}blockcmd (cmd sem prefix) 
โ ${p}unblockcmd (cmd sem prefix) 
โ ${p}antispamcmd (1 or 0) 
โ ${p}antipv (1 or 0) 
โ ${p}infinityblock (1 or 0) 
โ ${p}antiligar (1 or 0)
โ ${p}addpalavra (txt) 
โ ${p}rmpalavra (txt) 
โ ${p}block (num) 
โ ${p}unblock (num) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐งโโ๏ธ ๐ผ๐๐๐๐ผ๐๐๐ ๐งโโ๏ธ
โ
โ ${p}akinator
โ ${p}resetaki
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ฃ๏ธ ๐๐๐๐๐ผ๐ฟ๐๐ ๐ฃ๏ธ
โ
โ ${p}seumadruga
โ ${p}ibere
โ ${p}eminem
โ ${p}rick
โ ${p}faustao
โ ${p}patolino
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ    ๐ณ๏ธ ๐๐๐๐ ๐ณ๏ธ
โ
โ ${p}votohelp  
โ ${p}votoinit (txt) | opt1 | opt2
โ ${p}clearvoto 
โ ${p}votostatus 
โ ${p}voto (opc) 
โ ${p}votofinish 
โ ${p}gpvotohelp 
โ ${p}gpvotoinit 
โ ${p}gpclearvoto 
โ ${p}gpvotostatus 
โ ${p}gpvoto 
โ ${p}gpvotofinish 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐โโ๏ธ ๐ฝ๐๐ผ๐ ๐๐๐๐ฟ๐ผ๐ ๐โโ๏ธ
โ
โ ${p}byeadd (txt) 
โ ${p}welcomeadd (txt) 
โ ${p}welcomehelp 
โ ${p}welcome (1 or 0) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ โฑ๏ธ ๐พ๐๐๐๐ผ๐ฟ๐๐ โฑ๏ธ
โ
โ ${p}checkativo (dial)  
โ ${p}rankativo 
โ ${p}atividade  
โ ${p}filtroativo (qnt) 
โ ${p}banativos 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ ๐๐๐๐ผ๐ ๐
โ
โ ${p}mute (marcar) 
โ ${p}desmute (marcar)  
โ ${p}mutados 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ซ ๐๐๐๐๐ ๐ซ
โ
โ ${p}level (n/a, num) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ฎ ๐๐ผ๐๐๐ ๐๐ ๐ฎ
โ
โ ${p}jogatina (1 or 0) 
โ ${p}stealrandom 
โ ${p}steal (dial number) 
โ ${p}cassino 
โ ${p}flip  
โ ${p}doarxp (xp) (dial number) 
โ ${p}roletarandom 
โ ${p}roletaneg 
โ ${p}roletapos 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   โณ ๐๐๐๐๐๐๐ โณ
โ
โ ${p}rmlimituser 
โ ${p}resetlimit  
โ ${p}limitcmd (1 or 0) 
โ ${p}mylimit 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ    โ ๐ผ๐๐๐ โ
โ
โ ${p}antidoc (1 or 0) 
โ ${p}antiloc (1 or 0) 
โ ${p}antiimg (1 or 0) 
โ ${p}antipalavra (1 or 0) 
โ ${p}antivideo (1 or 0)  
โ ${p}antisticker (1 or 0) 
โ ${p}antiaudio (1 or 0) 
โ ${p}antictt (1 or 0) 
โ ${p}antilink (1 or 0) 
โ ${p}antiporn (1 or 0) 
โ ${p}antifake (1 or 0) 
โ ${p}dontback (1 or 0) 
โ ${p}antilinkhard (1 or 0) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ฅ ๐๐๐๐๐๐ ๐ฅ
โ
โ ${p}listfake 
โ ${p}listbr 
โ ${p}listddd (country code) 
โ ${p}dbackadd (num) 
โ ${p}dbackrm (num)  
โ ${p}fechargp 
โ ${p}fecharhr 12:00
โ ${p}mudarnome 
โ ${p}abrirgp 
โ ${p}abrirhr 12:00
โ ${p}linkgroup 
โ ${p}listadmin 
โ ${p}leave 
โ ${p}kick (dial num)  
โ ${p}ban (resp msg) 
โ ${p}promote (dial num) 
โ ${p}demote (dial num) 
โ ${p}roletrussablock (1 or 0) 
โ ${p}simih (1 or 0) 
โ ${p}autostickerimg (1 or 0) 
โ ${p}autoreply (1 or 0) 
โ ${p}marcar 
โ ${p}marcar2 
โ ${p}marcar3 
โ ${p}hidemarcar (txt) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ    ๐ ๐๐๐ ๐
โ
โ ${p}attp (txt) 
โ ${p}attp2 (txt) 
โ ${p}attp3 (txt) 
โ ${p}attp4 (txt) 
โ ${p}attp5 (txt) 
โ ${p}attp6 (txt) 
โ ${p}ttp (txt) 
โ ${p}ttp2 (txt) 
โ ${p}ttp3 (txt) 
โ ${p}ttp4 (txt) 
โ ${p}ttp5 (txt) 
โ ${p}ttp6 (txt) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐จ ๐๐๐๐๐๐๐ ๐จ
โ
โ obs: coloque "me"
โ ou marque alguรฉm
โ
โ ${p}triggerfig 
โ ${p}triggered 
โ ${p}amongus 
โ ${p}lisa (txt) 
โ ${p}sepie 
โ ${p}invert 
โ ${p}greyscale  
โ ${p}lgbt 
โ ${p}blur 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐๏ธ ๐๐๐๐๐ผ๐๐๐๐ ๐๏ธ
โ
โ obs: coloque "me"
โ ou marque alguรฉm
โ
โ ${p}trash 
โ ${p}thomas 
โ ${p}tatto 
โ ${p}stonks 
โ ${p}spank 
โ ${p}rip 
โ ${p}notstonks 
โ ${p}mms 
โ ${p}karaba 
โ ${p}jail 
โ ${p}hitler 
โ ${p}facepalm 
โ ${p}bluediscord 
โ ${p}blackdiscord 
โ ${p}delete 
โ ${p}confusedstonks 
โ ${p}dobross 
โ ${p}beatiful 
โ ${p}affect 
โ ${p}ad 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  โจ ๐๐๐๐พ๐๐๐ โจ
โ
โ ${p}stiker (leg, resp img) 
โ ${p}sticker (leg, resp img) 
โ ${p}csticker (leg, resp img) 
โ ${p}cstiker (leg, resp img) 
โ ${p}fstiker (leg, resp img) 
โ ${p}fsticker (leg, resp img) 
โ ${p}nstiker (pack) (author) 
โ ${p}nsticker (pack) (author) 
โ ${p}nfstiker (pack) (author) 
โ ${p}nfsticker (pack) (author) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ฅ ๐๐๐๐๐๐ผ ๐๐๐๐๐ผ ๐ฅ
โ
โ ${p}helproleta 
โ ${p}roletarussahard 
โ ${p}roletarussamed 
โ ${p}roletarussaeasy 
โ ${p}roletarussapac 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ #๏ธโฃ ๐๐๐๐ ๐ฟ๐ผ ๐๐๐๐๐ผ #๏ธโฃ
โ
โ ${p}ttt (dificulty) 
โ ${p}coord (coordenada)  
โ ${p}tttme 
โ ${p}tttrank 
โ ${p}ttthelp 
โ ${p}delttc  
โ ${p}tictactoe 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ ๐๐๐๐๐ ๐
โ
โ ${p}packmega18
โ ${p}nhentai โฎcodeโฏ
โ ${p}nsfw (1 or 0) 
โ ${p}randomhentai  
โ ${p}nsfwblowjob  
โ ${p}nsfwneko 
โ ${p}nsfwtrap 
โ ${p}anal  
โ ${p}cum 
โ ${p}yuri 
โ ${p}hentainekogif  
โ ${p}futanari  
โ ${p}nsfwfeet 
โ ${p}nsfwfeetgif 
โ ${p}girlmasturbate  
โ ${p}girlmasturbategif  
โ ${p}lesbian 
โ ${p}eroyuri 
โ ${p}eroneko
โ ${p}erokitsune 
โ ${p}spank
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ต ๐ผ๐๐ฟ๐๐ ๐ต
โ
โ ${p}gtts (la) (txt) 
โ ${p}lyrics 
โ ${p}ptlyrics  
โ ${p}play (music name) 
โ ${p}playv2 (music name) 
โ ${p}tomp3 (cap, resp vid) 
โ ${p}ytmp4 (yt url) 
โ ${p}ytmp3 (yt url) 
โ ${p}ytsrc (query) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ ๐ซ๐ฐ๐ฝ๐ฌ๐น๐บ๐จฬ๐ถ ๐
โ 
โ ${p}papel 
โ ${p}pedra 
โ ${p}tesoura 
โ ${p}cassino 
โ ${p}darkjokes 
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ฑ ๐๐๐๐ฟ๐ผ ๐ฑ
โ ${p}dolarhoje
โ ${p}rublohoje
โ ${p}ienehoje
โ ${p}librahoje
โ ${p}bitcoinhoje
โ ${p}realhoje
โ ${p}cvoin (c1)|(c2)
โ ${p}ccoin (c1)|(c2)|(num)
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ฎ ๐๐๐๐๐๐๐๐๐ ๐ฎ
โ ${p}ship (num1) (num2)
โ ${p}corno (num1)
โ ${p}nazista (num1)
โ ${p}comunista (num1)
โ ${p}dado
โ ${p}gay (num1)
โ ${p}qi (num1)
โ ${p}seudia (num1)
โ ${p}feio (num1)
โ ${p}bv (num1)
โ ${p}gado (num1)
โ ${p}gostoso (num1)
โ ${p}gostosa (num1)
โ ${p}randomship (n1, n/a)
โฐโโโโโโโโโโโโโโโโโโโโฏ
`
}

exports.help = help


