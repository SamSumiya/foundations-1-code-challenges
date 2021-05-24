// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let newArr = []; 
    arr.forEach((a) => {
        newArr.push(a.name)
    })
    return newArr;
 }

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let newArr = []; 

    for (let i = arr.length - 1; i >=0; i--) {
        newArr.push(arr[i].type)
    }
    return newArr
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArr = []; 
 
    arr.forEach(item => {
        const obj = {};
         obj.nombre = item.name
         obj.tipo = item.type
         newArr.push(obj)
    })
    return newArr
 } 
