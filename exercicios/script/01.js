function carregar(){
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

var minutos = new Date()
var min = minutos.getMinutes()

msg.innerHTML = `Agora são ${hora}:${min}.`

if(hora >=0 && hora < 12){
    imagem.src = 'midia/manhã.png'
    document.body.style.backgroundColor = 'rgb(238, 129, 109)'
}else if(hora >= 12 && hora < 18){
    imagem.src = 'midia/tarde.png'
    document.body.style.backgroundColor = 'rgb(184, 96, 45)'
}else{
    imagem.src = 'midia/noite.png'
    document.body.style.backgroundColor = '#666'
}
}