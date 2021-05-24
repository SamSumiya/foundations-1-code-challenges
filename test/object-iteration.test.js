import { 
    makeMoreScreamingKeys,
    makeWeirdStringFromKeys,
    makeTuples
} from '../object-iteration.js';

const { test, skip } = QUnit;

const pet = { 
    name: 'scooter', 
    age: 1,
    type: 'puppy',
};

test('should return an object with screaming keys', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        NAME: 'scooter',
        AGE: 1,
        TYPE: 'puppy'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeMoreScreamingKeys(pet);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});



test('should make a string from the keys', (expect) => {
    //Arrange
    // Set up your arguments and expectations    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeWeirdStringFromKeys(pet);

    const shouldBeTrue = actual.includes('name') && actual.includes('age') && actual.includes('type');  
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(true, shouldBeTrue);
});

test('should return tuples', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        ['name', 'scooter'],
        ['age', 1],
        ['type', 'puppy']
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeTuples(pet);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});