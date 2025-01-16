
//Arrays multidimensional a matriz

const matrix = [
[1, 2, 3, 4],
[10, 20, 30, 40],
[100, 200, 300, 400],
];


const rows = matrix.length
const cols = matrix[0].length

console.log(rows);  // 3
console.log(cols);  // 4
console.log(matrix[1][1]);


//Recorrer la matrix en filas y columnas y acumular el resultado

let accumulator = 0
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const element = matrix[i][j];
        accumulator += element
        console.log(element);
    }
    
}
console.log(accumulator);


//Tabla de multiplicar

function createMultiplicationTable(num){
    let accumulator = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }

}



//Revertir strings

function revertStringByArray(value='') {
   /*const array = value.split('')
   array.reverse()
   const result = array.join('')
   return result*/
   return value.split('').reverse().join('')
}
console.log(revertStringByArray('ornitorrinco'));