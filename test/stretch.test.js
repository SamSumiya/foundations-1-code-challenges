// IMPORT MODULES under test here:
import { 
    organizePricesByKey,
    makeAHashMap,
    countByCategory,
} from '../stretch.js';

const { test, skip } = QUnit;

const groceries = [
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
];

test('should organize prices by key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        apple: 3,
        banana: 1,
        'dog food': 5,
        milk: 2,
        cheese: 4
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = organizePricesByKey(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should make a hash map', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
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
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeAHashMap(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should make a count object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        fruit: 2,
        other: 1,
        dairy: 2
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countByCategory(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
