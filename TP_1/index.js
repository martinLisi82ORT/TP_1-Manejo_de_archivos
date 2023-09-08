const fs = require('fs')

function leerArchivoComoString(archivo) {
    try {
        return dato = fs.readFileSync(archivo, 'utf-8')
    }
    catch (error) {
        return error.message
    }
}

console.log('1) Leer Archivo Como String')
const archivo = '../prueba.txt'
const lecturaArchivo = leerArchivoComoString(archivo)
console.log(lecturaArchivo)

console.log('')
console.log('---------------------------')
console.log('2) Escribir Texto En Archivo')


function escribirTextoEnArchivo(archivo1, textoNuevo, flag) {
    try {
        if (!flag) throw Error('El archivo no existe')
        fs.writeFileSync(archivo1, textoNuevo)
        return datoNuevo = fs.readFileSync('../prueba.txt', 'utf-8')
    }
    catch (error) {
        return error.message
    }
}

const archivo1 = '../prueba.txt'
const textoNuevo = 'Texto nuevo!'
const flag = false
const escrArchivo = escribirTextoEnArchivo(archivo1, textoNuevo, flag)
console.log(escrArchivo)

console.log('')
console.log('---------------------------')
console.log('3) Transformar String en Array de Numeros')

function transformarStringEnArrayDeNumeros(texto, separador) {
    const array = texto.split(separador);
    return arrayNum = array.map(n => n = parseInt(n, 10))
}

const texto = '123 | 456 | 789 | 1bc | 10'
const separador = '|'
const arrayNuevo = transformarStringEnArrayDeNumeros(texto, separador)
console.log(arrayNuevo)

console.log('')
console.log('---------------------------')
console.log('4) Transformar Array De Numeros A String')

function transformarArrayDeNumerosAUnSoloString(array) {
    // const cadena1 = array.toString(' ')
    return cadena = array.join(', ')
}

const array = [123, 456, 789, 10]
const unicoString = transformarArrayDeNumerosAUnSoloString(array)
console.log(unicoString)

console.log('')
console.log('---------------------------')
console.log('5) Combinar Dos Arrays')

function combinarDosArrays(array1, array2) {
    // Version corta
    const array = [...new Set([...array1, ...array2])] 
    return array.sort((a, b) => a - b)   

    // Version larga
    /*    const array = []
       let inx1 = 0
       let inx2 = 0
   
       while (inx1 < array1.length && inx2 < array2.length) {
           if (array1[inx1] < array2[inx2]) {
               array.push(array1[inx1])
               inx1++
           } else if (array2[inx2] < array1[inx1]) {
               array.push(array2[inx2])
               inx2++
           } else {
               array.push(array1[inx1])
               inx1++
               inx2++
           }
       } */

    return array
}

const array1 = [1, 2, 5, 10]
const array2 = [2, 3, 8, 10, 11]
const arrayComb = combinarDosArrays(array1, array2)
console.log(arrayComb)

console.log('')
console.log('---------------------------')
console.log('6) Combinar N Arrays')

function combinarNArrays(arrays) {
    const nArray = arrays.flat()
    return nArray.sort((a, b) => a - b)
}

const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]
const nArrayComb = combinarNArrays(arrays)
console.log(nArrayComb)

console.log('')
console.log('---------------------------')


