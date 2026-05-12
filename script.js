function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years').value;

    //PARSE FLOAT SLUZI ZA PRETVARANJE STRINGA U DECIMALNI BROJ

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years);

    // Formula za stopu inflacije
    let worth = money + (money * (inflationRate / 100));

    for(let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }
    console.log(worth);

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`

    document.querySelector('.container').appendChild(newElement);

}






