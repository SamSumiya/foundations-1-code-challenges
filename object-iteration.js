// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/


export function makeMoreScreamingKeys(someObject) {
    const obj = {}
    const keys = Object.keys(someObject)
    keys.forEach(key => {
        const newKey = key.toUpperCase()
        obj[newKey] = someObject[key]
    })
    return obj
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    let myString = '';
    for (let key in someObject) {
        myString += key
    }
    return myString; 
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/
export function makeTuples(someObject) {
    const newArr = []; 

    for (let key in someObject) {
        const innerArr = []; 
        innerArr.push(key, someObject[key])
        newArr.push(innerArr)
    }
    return newArr 
}