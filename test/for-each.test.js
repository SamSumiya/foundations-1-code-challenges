// IMPORT MODULES under test here:
import { 
    makeArrayOfNames,
    makeReversedArrayOfTypes,
    makeSpanishLanguageArray,
} from '../for-each.js';

const { test, skip } = QUnit;

const pets = [
    {
        type: 'cat',
        name: 'coco',
    },
    {
        type: 'frog',
        name: 'jumper',
    }
];

test('should make an array of names', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['coco', 'jumper'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeArrayOfNames(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should make a reverse array of type', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['frog', 'cat'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeReversedArrayOfTypes(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should make a spanish array of pet objects', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        {
            nombre: 'coco',
            tipo: 'cat',
        },
        {
            nombre: 'jumper',
            tipo: 'frog',
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeSpanishLanguageArray(pets);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

