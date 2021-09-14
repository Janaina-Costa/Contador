function contar(){
    let inicioContador = document.getElementById('inicio')
    let fimContagem = document.getElementById('fim')
    let passoContagem = document.getElementById('passo')
    let resultado = document.getElementById('res')
   

    if (inicioContador.value.length == 0 || fimContagem.value.length == 0 || 
        passoContagem.value.length == 0){
            resultado.innerHTML = 'Impossivel contar'
        }
        else{
            
        }
    //convertendo em numero
    let inicioContadorN = Number(inicioContador.value)
    let fimContagemN = Number(fimContagem.value)
    let passoContagemN = Number(passoContagem.value)

    if (passoContagemN == 0){
        alert('Passo inválido. Considerando PASSO = 1')
        passoContagemN = 1;
    }

    if(inicioContadorN<fimContagemN){
        //contagem crescente
        for(let i = inicioContadorN; i <= fimContagemN; i += passoContagemN){
            resultado.innerHTML += `${i} \u{1F3C3}`;
        }
    }
    else{
        //contagem regressiva
        for(let i = inicioContadorN; i >= fimContagemN; i -= passoContagemN){
            
            resultado.innerHTML += `${i} \u{1F3C3}`;
        }
        
       
    }
} 