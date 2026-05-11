let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];
let broj_novcanica = novcanice.length;
let brojac = 0;

while (brojac < broj_novcanica) {
    console.log('------------------');
    console.log('uslov prosao');
    console.log(`novcanica na poziciji niza [${brojac}]: ${novcanice[brojac]}`)
    
    brojac++;
}


if(brojac < broj_novcanica)
    console.log('brojac je manji');

STAO SAM NA 1:42:56