let contenitore = [];
const buttonContenitore = document.querySelector('.btn');
const alertText = document.querySelector('.alert');

buttonContenitore.addEventListener('click', function(){
    contenitore = [];
    alertText.classList.remove('alert-danger');
    let inputContenitore = parseInt(document.getElementById('contenitore').value);
    console.log(inputContenitore);
    if(isNaN(inputContenitore)){
        alertText.innerText = 'Devi inserire un numero valido';
        alertText.classList.add('alert-danger');
        
    } else{
        for(let i = 0; i < inputContenitore; i++){
            numeroGenerato = getRndInteger(0, 100);
            contenitore.push(numeroGenerato);
        }
        console.log(contenitore);
        alertText.innerText = `Gli ultimi elementi della tua lista sono:
     ${contenitore.slice(contenitore.length - 5, contenitore.length)}`;
        alertText.classList.add('alert-success');
    }
    alertText.classList.remove('d-none');
});



function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }