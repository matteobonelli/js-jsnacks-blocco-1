let contenitore = [];
const buttonContenitore = document.querySelector('.btn');
const alertText = document.querySelector('.alert');

buttonContenitore.addEventListener('click', function(){
    contenitore = [];
    let contenitoreCodaArray = [];
    alertText.classList.remove('alert-danger');
    let inputContenitore = parseInt(document.getElementById('contenitore').value);
    let numeroCodaArray = parseInt(document.getElementById('numero-coda').value);
    console.log(inputContenitore, numeroCodaArray);
    if(isNaN(inputContenitore) || isNaN(numeroCodaArray) || numeroCodaArray > inputContenitore){
        alertText.innerText = 'Devi inserire un numero valido';
        alertText.classList.add('alert-danger');
        
    } else{
        for(let i = 0; i < inputContenitore; i++){
           let numeroGenerato = getRndInteger(0, 100);
            contenitore.push(numeroGenerato + ' ');
        }
        for(let c = contenitore.length - numeroCodaArray; c < contenitore.length; c++){
            contenitoreCodaArray.push(contenitore[c]);
        }
        console.log(contenitore);
        console.log(contenitoreCodaArray);
        alertText.innerHTML = `Gli ultimi elementi della tua lista sono:
        <div class = 'container'>${contenitoreCodaArray} </div>`;
        alertText.classList.add('alert-success');
    }
    alertText.classList.remove('d-none');
});



function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }