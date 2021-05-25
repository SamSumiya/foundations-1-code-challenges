// Use the filter or find array methods to solve these problems

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

Output: 
[
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


export function getAllDairy(arr) {
    const newArr = arr.filter((item) => {
        return item.category === 'dairy'
    })
    return newArr; 
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const newArr = arr.filter(({price, category}) => {
        return price > 2 && category === 'fruit'
    })
    return newArr
}  


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const newArr = arr.find(item => {
        return item.id === 'cheese'
    })
    return newArr
}
  


/*
Output: 
['apple', 'banana']
*/

// export function listNamesOfAllFruits(arr) {
//     const newArray = [] 
//    const newArr = arr.filter(item => {
//     if (item.category === 'fruit') {
//         newArray.push(item.id)
//     }
//    })
//    return newArray
// }
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



export function listNamesOfAllFruits(arr) {
    const res = []; 

    const newArr = arr.filter(item => {
        return item.category === 'fruit'
    })
    .forEach(i => {
        res.push(i.id)    
    })
   
    return res
}