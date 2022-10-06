let janelaResultado = document.getElementById('resultado')

let divResultado = document.getElementById('divResult')

let btnEnviar = document.getElementById('btnEnviar')

let total

let totalParcelas

btnEnviar.addEventListener('click', function(){
    let modelo = document.getElementById('selModelo').value
    let pais = document.getElementById('selPais').value

    let parcela = document.getElementById('selParcelas').value
    let formaPag = document.getElementById('selFormaPag').value

    let entrada = document.getElementById('inputEntrada').value
    let bruto = document.getElementById('inputBruto').value

    let moeda = String()

    let imposto = Number()

    if (entrada.length == 0 || bruto.length == 0){
        alert("[ERRO] Um ou mais campos não foram preenchidos.")

    } else {
        if (isNaN(entrada) != true && isNaN(bruto) != true){

            entrada = parseFloat(entrada)
            bruto = parseFloat(bruto)

            switch (pais){
                case "BRASIL":
                    moeda = 'R$'
                    imposto = 15
                break

                case "EUA":
                    moeda = 'U$'
                    imposto = 5
                break

                case "JAPÃO":
                    moeda = '¥'
                    imposto = 12
                break

                case "ALEMANHA":
                    moeda = '€'
                    imposto = 15
                break
            }

            total = bruto + bruto * (imposto/100) - entrada
            totalParcelas = total / parcela

            divResultado.innerHTML = `<p>Modelo Selecionado: ${modelo}</p>
                                      <p>País: ${pais} (Imposto de ${imposto}%)</p>
                                      <p>Entrada de ${moeda}${entrada.toFixed(2)}</p>
                                      <p>Valor Bruto: ${moeda}${bruto.toFixed(2)}</p>
                                      <p>Forma de Pagamento: ${formaPag}
                                      <p>Valor final: ${moeda}${total.toFixed(2)}</p><br><br>`

            if (parcela == 0){
                divResultado.innerHTML += `<p>Parcelas: À vista.</p>`

            } else {
                divResultado.innerHTML += `<p>Parcelas: ${parcela}x de ${moeda}${totalParcelas.toFixed(2)}</p>`

            }

            janelaResultado.style.display = 'flex'


        } else {
            alert("[ERRO] Insira apenas valores numéricos.")
        }
    }

})

let btnFechar = document.getElementById('btnFechar')
btnFechar.addEventListener('click', function(){
    janelaResultado.style.display = 'none'
})