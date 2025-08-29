console.log('Simulador de Sube');
let saldo = 0; // var de control
let viaje;

     // condicion de corte
while( saldo > 0 ){
    viaje = prompt('¿Cuanto sale el viaje?');
    saldo = saldo - viaje;  // Act de la var de control
    console.info('Saldo: $' + saldo);
}

console.log('No tenes saldo suficiente ' + saldo);

/* do {
    
} while (condition); */