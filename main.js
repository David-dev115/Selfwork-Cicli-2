

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

let accumulator = 0;

let counter = 0;


for( let i = 0; i <=20; i++) {
    
    if ( i % 2 != 0) { 
        accumulator = accumulator + i
        counter ++
    }
    
}

console.log(`La somma dei numeri dispari è ${accumulator}`);
console.log(`La media dei numeri dispari è ${ accumulator/counter }  `);


