function imprimirTriangulo(altura) {
   
    for (let i = 1; i <= altura; i++) {
        let linhaAsteriscos = '';
       
        for (let j = 0; j < i; j++) {
            linhaAsteriscos += '*';
        }
      
        console.log(linhaAsteriscos);
    }
}

const alturaTriangulo = 5;
console.log("Triângulo com altura", alturaTriangulo, ":");
imprimirTriangulo(alturaTriangulo);