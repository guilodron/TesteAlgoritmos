// 1) Implemente um método que crie um novo array baseado nos valores passados.
function createArray(count, item) {
    const aux = [];
    for (i = 0; i < count; i++){
        aux.push(item);
    }

    return aux;
}
console.log('Questão 1. Entrada (3,a)')
console.log(createArray(3, 'a'));

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
function invertArray(arr){
    const invertedArray = [];
    for (i = arr.length - 1; i >= 0; i--){
        invertedArray.push(arr[i]);
    }
    return invertedArray;
}
console.log('Questão 2. Entrada [1,2,3,4]')
console.log(invertArray([1,2,3,4]))

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
function cleanArray(arr){
    return arr.filter(item => !!item)
}
console.log('Questão 3. Entrada [1,2,"",undefined]');
console.log(cleanArray([1,2,"",undefined]))

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
function convertArrayOfArrays(arr){
    return Object.fromEntries(arr);
}
console.log('Questão 4. Entrada [["c",2],["d",4]]')
console.log(convertArrayOfArrays([["c",2],["d",4]]))

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
function filterItems(arr, ...items){
    return arr.filter(item => !items.includes(item))
}
console.log('Questão 5. Entrada ([5,4,3,2,5], 5,3)')
console.log(filterItems([5,4,3,2,1], 5,3))

// 6) Implemente um método que retorne um array, sem valores duplicados.
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) == index)
}
console.log('Questão 6. Entrada [1,2,3,3,2,4,5,4,7,3]')
console.log(removeDuplicates([1,2,3,3,2,4,5,4,7,3]))

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
function compareArrays(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false
        }
    }
    return true;
}
console.log('Questão 7. Entrada [1,2,3,4], [1,2,3,4]')
console.log(compareArrays([1,2,3,4], [1,2,3,4]))

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
function flattenArray(arr){
    return arr.flat(Infinity)
}
console.log('Questão 8. Entrada [[1,2,[3], [4,5]]')
console.log(flattenArray([[1,2,[3], [4,5]]]));

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
function splitArray(arr, count){
    let aux = 0;
    const returnArr = [];
    let auxArr = [];
    arr.forEach(item => {
        if(aux == count){
            aux = 0;
            returnArr.push(auxArr)
            auxArr = [];
        }
        auxArr.push(item)
        aux++;
    })
    returnArr.push(auxArr)
    return returnArr;
}
console.log('Questão 9. Entrada [1,2,3,4,5],2')
console.log(splitArray([1,2,3,4,5], 2))

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item))
}
console.log('Questão 10. Entrada [6,8], [8,9]')
console.log(intersection([6,8], [8,9]))