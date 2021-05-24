// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/


export function makeArrayOfNamesWithMap(arr) {
    const newArr = arr.map(({name}) => {
        return name
    })
    return newArr
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/
export function makeArrayWithIsHungry(arr) {
    const newArr = arr.map(item => {
        const obj = {}; 
        obj.name = item.name
        obj.isHungry = true
        obj.type = item.type
        return obj
    })
    return newArr
 }
 

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    // const obj = {} 
    const newArr = arr.map(item => {
        const obj = {} 
        obj.name = item.name.toUpperCase(); 
        obj.type = item.type
    return obj
    })
    return newArr
}

/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const newArr = arr.map(item => {
        return item.name + item.type
    })
    return newArr 
}
/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const newArr = arr.map(item => {
        const innerArr = []
        const nameArr = []
        const typeArr = []
        nameArr.push('name', item.name)
        typeArr.push('type', item.type)
        innerArr.push(nameArr, typeArr)
        return innerArr
    })
return newArr
}