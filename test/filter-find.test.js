// IMPORT MODULES under test here:
import { 
    getAllDairy,
    getAllFruitsThatCostMoreThanTwo,
    findTheCheese,
    listNamesOfAllFruits
} from '../filter-find.js';

const { test, skip } = QUnit;

const groceries = [
    { 
        id: 'orange',
        price: 1,
        quantity: 1,
        category: 'fruit'
    },
    { 
        id: 'kiwi',
        price: 3,
        quantity: 1,
        category: 'fruit'
    },
    { 
        id: 'rice',
        price: 2,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'goat milk',
        price: 4,
        quantity: 2,
        category: 'dairy'
    },
    { 
        id: 'cheese',
        price: 7,
        quantity: 4,
        category: 'dairy'
    },
];

test('should return all dairy', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [{ 
        id: 'goat milk',
        price: 4,
        quantity: 2,
        category: 'dairy'
    },
    { 
        id: 'cheese',
        price: 7,
        quantity: 4,
        category: 'dairy'
    }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAllDairy(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('should return all fruits that cost more than 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [{ 
        id: 'kiwi',
        price: 3,
        quantity: 1,
        category: 'fruit'
    },
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAllFruitsThatCostMoreThanTwo(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return the cheese', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 
        id: 'cheese',
        price: 7,
        quantity: 4,
        category: 'dairy'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findTheCheese(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should list all the fruit names', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['orange', 'kiwi'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = listNamesOfAllFruits(groceries);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});