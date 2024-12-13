

// Prima parte

let num_x = Math.floor(Math.random() * (20 - 0 + 1) + 0);

let num_y = num_x % 2;


// se num_y è 0, il num_x geerato è pari
// se num_y è 1, il num_x benerato è dispari


if( num_y < 1 ) {
    console.log( `Il numero pari generato casualmente tra 0 e 20 è :${num_x}`);
} else{
    console.log( `Il numero generato è dispari : Aggiorna la pagina per generare un nuovo numero`);
    
}



// Seconda parte

let conteggio = 0;

let n = 20;


for( let i = 0; i <= n; i++) {
    
    if ( i % 2 != 0) { 
        i + conteggio;     
    }
    
conteggio = (i + conteggio)/10;

}

console.log(conteggio);

