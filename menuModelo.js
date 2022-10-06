let fundoImagem1 = document.getElementById('fundoImagem1')
let veiculoImagem1 = document.getElementById('veiculoImagem1')
let tituloVeiculo1 = document.getElementById('tituloVeiculo1')
let descricaoVeiculo1 = document.getElementById('descricaoVeiculo1')

let fundoImagem2 = document.getElementById('fundoImagem2')
let veiculoImagem2 = document.getElementById('veiculoImagem2')
let tituloVeiculo2 = document.getElementById('tituloVeiculo2')
let descricaoVeiculo2 = document.getElementById('descricaoVeiculo2')

let fundoImagem3 = document.getElementById('fundoImagem3')
let veiculoImagem3 = document.getElementById('veiculoImagem3')
let tituloVeiculo3 = document.getElementById('tituloVeiculo3')
let descricaoVeiculo3 = document.getElementById('descricaoVeiculo3')

let botoesModelos = document.getElementsByClassName('botao')

let btnmMod = document.getElementById('botao1')
let btnmPick = document.getElementById('botao2')
let btnmHib = document.getElementById('botao3')

let botaoPasseio = botoesModelos[0]
botaoPasseio.addEventListener('click', function(){

    btnmMod.style.backgroundColor = '#ff0101'
    btnmMod.style.color = 'white' //Selecionado

    btnmPick.style.backgroundColor = 'white'
    btnmPick.style.color = '#ff0101' //Desativado

    btnmHib.style.backgroundColor = 'white'
    btnmHib.style.color = '#ff0101' //Desativado

    /**/

    fundoImagem1.src = 'imgs/home/blue-shape.png'
    veiculoImagem1.src = 'imgs/home/yaris-seda.png'
    tituloVeiculo1.innerHTML = `Yaris SEDAN`
    descricaoVeiculo1.innerHTML = `Linhas dinâmicas que fluem em toda a lateral do veículo. Uma nova grade inspirada no one motion design, que se utiliza de formas contínuas e que junto com os faróis em LED, expressam uma harmonia de um carro urbano sem perder a esportividade.`

    fundoImagem2.src = `imgs/home/red-triangle.png`
    veiculoImagem2.src = `imgs/home/yaris-hatch-vermelho.png`
    tituloVeiculo2.innerHTML = `Yaris HATCH`
    descricaoVeiculo2.innerHTML = `Espelhos retrovisores externos elétricos na cor do carro e pisca integrado, grade inferior tipo colmeia, maçanetas externas e para-choques dianteiro e traseiro na cor do carro, roda de aço 15″ com calota na cor prata.`

    fundoImagem3.src = `imgs/home/geometric-shape.png`
    veiculoImagem3.src = `imgs/home/corolla.png`
    tituloVeiculo3.innerHTML = `COROLLA`
    descricaoVeiculo3.innerHTML = `A grade frontal cromada se combina harmoniosamente aos faróis dianteiros de LED³ com luzes diurnas (DRL) que conferem forte identidade ao modelo. Linhas laterais contínuas conectam a parte dianteira às lanternas traseiras de LED³ de forma fluída, conferindo dinamismo.`

})

let botaoPickups = botoesModelos[1]
botaoPickups.addEventListener('click', function(){

    btnmMod.style.backgroundColor = 'white'
    btnmMod.style.color = '#ff0101' //Desativado

    btnmPick.style.backgroundColor = '#ff0101'
    btnmPick.style.color = 'white' //Selecionado

    btnmHib.style.backgroundColor = 'white'
    btnmHib.style.color = '#ff0101' //Desativado

        /**/

    fundoImagem1.src = 'imgs/home/purple-shape.png'
    veiculoImagem1.src = 'imgs/home/hilux-cabine.png'
    tituloVeiculo1.innerHTML = `HILUX Cabine Símples`
    descricaoVeiculo1.innerHTML = `Feita para não deixar você na mão. A Hilux é equipada com o motor diesel 2.8 L 16 V turbo, com 42,8 kgf.m de torque. É a força extra que, ao lado da tração 4×4 com acionamento eletrônico e bloqueio do diferencial, garante a performance necessária para suportar os trabalhos mais pesados.`

    fundoImagem2.src = `imgs/home/white-shade-shape.png`
    veiculoImagem2.src = `imgs/home/corolla-cross.png`
    tituloVeiculo2.innerHTML = `COROLLA CROSS`
    descricaoVeiculo2.innerHTML = `A excelente dirigibilidade do Corolla Cross é garantida pelos motores. Para as versões XRV e XRX, a tecnologia híbrida garante máxima eficiência e, para as versões XR e XRE, o motor 2.0L que produz 177 cavalos de potência melhor desempenho.`

    fundoImagem3.src = `imgs/home/blue-green-shape.png`
    veiculoImagem3.src = `imgs/home/rav4.png`
    tituloVeiculo3.innerHTML = `RAV4`
    descricaoVeiculo3.innerHTML = `Design dinâmico com curvas retilíneas que transmitem força e modernidade e seguem a nova tendência de design global da Toyota. As novas rodas de liga leve aro 18” com desenho único e o teto solar estilo wide moonroof com barras longitudinais agregam versatilidade, o que torna o RAV4 um SUV que se adapta a qualquer estilo.`

})

let botaoHibridos = botoesModelos[2]
botaoHibridos.addEventListener('click', function(){
    
    btnmMod.style.backgroundColor = 'white'
    btnmMod.style.color = '#ff0101' //Desativado

    btnmPick.style.backgroundColor = 'white'
    btnmPick.style.color = '#ff0101' //Desativado

    btnmHib.style.backgroundColor = '#ff0101'
    btnmHib.style.color = 'white' //Selecionado

    /**/

    fundoImagem1.src = `imgs/home/geometric-shape.png`
    veiculoImagem1.src = `imgs/home/corolla.png`
    tituloVeiculo1.innerHTML = `COROLLA`
    descricaoVeiculo1.innerHTML = `A grade frontal cromada se combina harmoniosamente aos faróis dianteiros de LED³ com luzes diurnas (DRL) que conferem forte identidade ao modelo. Linhas laterais contínuas conectam a parte dianteira às lanternas traseiras de LED³ de forma fluída, conferindo dinamismo.`

    fundoImagem2.src = `imgs/home/purple-shape.png`
    veiculoImagem2.src = `imgs/home/sw4.png`
    tituloVeiculo2.innerHTML = `SW4`
    descricaoVeiculo2.innerHTML = `O SW4 traz a melhor experiência a bordo. Seu interior refinado e moderno com acabamentos texturizados e soft touch proporciona o conforto que você precisa. O sistema multimídia de tela de 8" traz a comodidade das funções GPS², TV Digital⁵, MP3, USB, Bluetooth®, conectividade Android Auto e Apple CarPlay e câmera de ré.`

    fundoImagem3.src = `imgs/home/white-shade-shape.png`
    veiculoImagem3.src = `imgs/home/corolla-cross.png`
    tituloVeiculo3.innerHTML = `COROLLA CROSS`
    descricaoVeiculo3.innerHTML = `A excelente dirigibilidade do Corolla Cross é garantida pelos motores. Para as versões XRV e XRX, a tecnologia híbrida garante máxima eficiência e, para as versões XR e XRE, o motor 2.0L que produz 177 cavalos de potência melhor desempenho.`

})