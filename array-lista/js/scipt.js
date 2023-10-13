let fruitsList = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'cocomero',
    'mandarino',
    'limone',
    'fragola'
];
const alertText = document.querySelector('.alert');
const btn = document.querySelector('.btn');
const pesca = 'pesca';


fruitsList.push(pesca);
console.log(fruitsList);

btn.addEventListener('click', function(){
    let founded = false;
    console.log(founded);
    for(let i = 0; i < fruitsList.length; i++){
        let fruitTrovato = fruitsList[i];
        console.log(fruitTrovato);
        if(fruitTrovato === 'cocomero'){
            founded = true;
        }
    }
    console.log(founded);
    if(founded){
        alertText.innerText = 'Trovato! Devo solo preparare il cocktail.';
        alertText.classList.add('alert-success');
    } else{
        alertText.innerText = 'Oh no, devo uscire a comprare il cocomero!';
        alertText.classList.add('alert-danger');
    }
    alertText.classList.remove('d-none');
});
