const btnTelefone1 = document.querySelector('.buttonTel1');
const btnTelefone2 = document.querySelector('.buttonTel2');
const telefone1 = document.querySelector('.telefone1');
const telefone2 = document.querySelector('.telefone2');

const cpf = document.querySelector('.inputCPF');
const tel = document.querySelector('.inputTel');
const btnEnviarMsg = document.querySelector('.btnEnviarMsg');


const valor1 = document.querySelector('.valor1');
const valor2 = document.querySelector('.valor2');
const valor3 = document.querySelector('.valor3');
const resultado = document.querySelector('.resultado');
const btnCalcular = document.querySelector('.buttonCalcular');

const downloadButton = document.querySelector('.downloadButton');

const modal = document.getElementById('imageModal');
const btnAbrirImg = document.getElementById('btnAbrirImg');
const btnFechar = document.querySelector('.close');

const menuIcon = document.querySelector(".menu-icon");
const menuResponsivo = document.querySelector("#menu-responsivo");





//Funcionalidade para ver o telefone
btnTelefone1.addEventListener('click', verTel1);
btnTelefone2.addEventListener('click', verTel2);

function verTel1(){
    if (telefone1.style.display === "none" || telefone1.style.display === ""){
        telefone1.style.display = "block";
    } else {
        telefone1.style.display = "none";
    }
}

function verTel2(){
    if (telefone2.style.display === "none" || telefone2.style.display === ""){
        telefone2.style.display = "block";
    } else {
        telefone2.style.display = "none";
    }
}



//Funcionalidade para máscara do cpf e telefone
cpf.addEventListener('keypress',() =>{
    let cpfLength = cpf.value.length;

    if (cpfLength === 3 || cpfLength === 7){
        cpf.value += '.';
    }
    if (cpfLength === 11){
        cpf.value += '-';
    }
})

tel.addEventListener('keypress',() =>{
    let telLength = tel.value.length;

    if (telLength === 0) {
        tel.value += '(';
    }
    if (telLength === 3) {
        tel.value += ') ';
    }
    if (telLength === 4) {
        tel.value += ' ';
    }
    if (telLength === 10) {
        tel.value += '-';
    }
})

btnEnviarMsg.addEventListener('click',()=>{
    if (cpf.value === '' || tel.value === ''){
        alert('Insira os dados corretamente, por favor.');
    } else {
        alert('Os dados foram enviados com sucesso!');
    }
    
})



//Funcionalidade Regra de 3
btnCalcular.addEventListener('click', ()=>{
    const v1 = parseFloat(valor1.value);
    const v2 = parseFloat(valor2.value);
    const v3 = parseFloat(valor3.value);

    if (!isNaN(v1) && !isNaN(v2) && !isNaN(v3) && v1 !== 0) {
        const res = (v2 * v3) / v1;
        resultado.value = res.toFixed(2); // Resultado com duas casas decimais
    } else {
        resultado.value = 'Erro';
    }
})



//Funcionalidade para a imagem abrir 
function abrirModal() {
    modal.style.visibility = 'visible';
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.visibility = 'hidden';
    modal.style.display = 'none';
}

btnAbrirImg.addEventListener('click', abrirModal);
btnFechar.addEventListener('click', fecharModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        fecharModal();
    }
});




//Funcionalidade para fazer o download da imagem
downloadButton.addEventListener('click', ()=>{
    const imageUrl = './imgs/casa.webp';
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'casa.webp';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})





//Funcionalidade para o menu icon
menuIcon.addEventListener("click", function () {
    if (menuResponsivo.style.display === "block") {
        menuResponsivo.style.display = "none";
    } else {
        menuResponsivo.style.display = "block";
    }
});