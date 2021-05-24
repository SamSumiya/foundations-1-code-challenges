// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/
export function organizePricesByKey(arr) {
    const obj = {}; 
    arr.forEach(item => {
        obj[item.id] = item.price
    })
    return obj
}
/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    const hash = {}; 
    arr.forEach(item => {
        hash[item.id] = item
    })

    return hash
}

/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    const obj = {}; 
    // let i = 0; 
    arr.forEach(item => {
        // console.log(item)
        console.log(obj[item.category])
        if (obj[item.category] === undefined) {
            
            obj[item.category] = 1; 
        } else if (obj[item.category] >=1 ) {
            obj[item.category]++;

        }
    }) 
    console.log(obj)
    return obj
}