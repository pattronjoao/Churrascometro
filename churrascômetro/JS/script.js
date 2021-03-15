// Homens 500 gr carne < 6hrs >= 650gr
// Mulheres 400gr carne < 6hrs >= 500gr
// Cerveja 1200ml /pessoa que bebe < 6hrs >= 1500ml
// Refrigerante/Água 800ml pessoa < 6hrs >= 1100ml

//Crianças valem por 0,5/pessoa

let inputHomens = document.getElementById('homens');
let inputMulheres = document.getElementById('mulheres');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
    var element = document.getElementById("resultado");
    element.classList.toggle("mystyle");

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = carnePH(duracao) * homens + (carnePM(duracao) * mulheres + (400/2 * criancas));
    let qntTotalCerveja = cervejaP(duracao) * homens;
    let qntTotalBebidas = bebidasP(duracao) * mulheres + (bebidasP(duracao) / 2 * criancas);
    let qntTotalFrango = frangoPH(duracao) * homens + (frangoPM(duracao) * mulheres + (200/2 * criancas));

    resultado.innerHTML = `<p>${qntTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${qntTotalFrango/1000} Kg de Frango</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja/357)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas/2000)} Garrafas de Refri</p>`
    
    window.alert('Bebidas álcoolicas somente para maiores de 18 anos!')
  }

function carnePH(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 500;
    }
}

function frangoPH(duracao){
    if(duracao >= 6){
        return 300;
    }else{
        return 200;
    }
}

function carnePM(duracao){
    if(duracao >= 6){
        return 500;
    }else{
        return 400;
    }
}

function frangoPM(duracao){
    if(duracao >= 6){
        return 200;
    }else{
        return 100;
    }
}

function cervejaP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasP(duracao){
    if(duracao >= 6){
        return 1100;
    }else{
        return 800;
    }
}

