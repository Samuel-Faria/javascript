function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO], verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'

            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','midia/criança h.png')
            }else if(idade >= 12 && idade < 25){
                //jovem
                img.setAttribute('src','midia/jovem h.png')
            }else if(idade >=25 && idade < 60){
                //adulto
                img.setAttribute('src','midia/adulto.png')
            }else if(idade >=60){
                //idoso
                img.setAttribute('src','midia/idoso.png')
            }else{
                //invalido
                img.innerText("[ERRO], invalido")
            }
        }else if(fsex[1].checked){
            genero = 'mulher'

            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','midia/criança m.png')
            }else if(idade >= 12 && idade < 25){
                //jovem
                img.setAttribute('src','midia/jovem m.png')
            }else if(idade >=25 && idade < 60){
                //adulto
                img.setAttribute('src','midia/adulta.png')
            }else if(idade >=60){
                //idoso
                img.setAttribute('src','midia/idosa.png')
            }else{
                //invalido
                img.innerText("[ERRO], invalido!")
            }
        }
        img.style.height = '200px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}