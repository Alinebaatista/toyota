let menuHamburguer = document.getElementById('navMenuHamburguer').style

let botaoAbrir = document.getElementById('menuHamburguer')
botaoAbrir.addEventListener('click', function (){
    menuHamburguer.display = 'flex'
})

let botaoFechar = document.getElementById('botaoFechar')
botaoFechar.addEventListener('click', function (){
    menuHamburguer.display = 'none'
})