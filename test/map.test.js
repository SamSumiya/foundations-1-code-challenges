// IMPORT MODULES under test here:
import { 
    makeArrayOfNamesWithMap,
    makeArrayWithIsHungry,
    makeShoutingArray,
    makeStringArray,
    makeArrayOfArraysOfArrays
} from '../map.js';

const { test, skip } = QUnit;

const pets = [
    { name: 'scooter', type: 'puppy' },
    { name: 'sassy', type: 'puppy' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];


test('should return all names', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['scooter', 'sassy', 'legzo', 'fluff'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeArrayOfNamesWithMap(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return all objects with an added isHungry property equal to true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        { name: 'scooter', isHungry: true, type: 'puppy' },
        { name: 'sassy', isHungry: true, type: 'puppy' },
        { name: 'legzo', isHungry: true, type: 'frog' },
        { name: 'fluff', isHungry: true, type: 'squirrel' },
    ];    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeArrayWithIsHungry(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return a shouting array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        { name: 'SCOOTER', type: 'puppy' },
        { name: 'SASSY', type: 'puppy' },
        { name: 'LEGZO', type: 'frog' },
        { name: 'FLUFF', type: 'squirrel' },
    ];    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeShoutingArray(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return a proper array of strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['scooterpuppy', 'sassypuppy', 'legzofrog', 'fluffsquirrel'];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStringArray(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return a proper array of arrays', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        [['name', 'scooter'], ['type', 'puppy']], 
        [['name', 'sassy'], ['type', 'puppy']], 
        [['name', 'legzo'], ['type', 'frog']], 
        [['name', 'fluff'], ['type', 'squirrel']]
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeArrayOfArraysOfArrays(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});



