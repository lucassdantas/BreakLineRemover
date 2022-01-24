/*let botao = document.querySelector("#botao")
    let x = botao.addEventListener("click", function () {
        let n1 = document.querySelector("#text").value
        let r = document.querySelector("#resposta")
        let aviso = document.querySelector("#aviso")
        let z = "0"
        if (n1.length > 8) {
            aviso.innerText = ("São permitidos apenas 8 caracteres")
        } else { if (n1 < 0) {
            aviso.innerText = ("Digite um número maior que 0")
        }       else{ 
            aviso.innerText = (" ")
                    do {
                        z = (String(n1%2)) + z
                        n1 = (parseInt(n1/2))
                    } while (1 <= n1);
                    let z2 = z.slice(0, -1)
                    r.value = z2
                    }
                }
        })
   let a =  document.addEventListener("keypress", function(e) {
        if(e.key === "Enter") {
            let n1 = document.querySelector("#numero").value
            let r = document.querySelector("#resposta")
            let aviso = document.querySelector("#aviso")
            let z = "0"
            if (n1.length > 8) {
                aviso.innerText = ("São permitidos apenas 8 caracteres")
            } else { if (n1 < 0) {
                aviso.innerText = ("Digite um número maior que 0")
            }       else{ 
                aviso.innerText = (" ")
                        do {
                            z = (String(n1%2)) + z
                            n1 = (parseInt(n1/2))
                        } while (1 <= n1);
                        z2 = z.slice(0, -1)
                        r.value = z2
                        }
                    }
        }
    })*/
let botao = document.querySelector("#botao")
botao.addEventListener("click", function(){
    let text = document.querySelector("#text").value
    let resposta = document.querySelector("#resposta")
    let formatacao = text.replace(/\n/g, ", ")
    resposta.value=(formatacao)
})
