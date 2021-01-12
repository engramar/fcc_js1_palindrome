const Palindrome = require('./app')

describe('Palindrome', () => {

    test('Test Case 1 - Check if palindrome', () => {
        expect(Palindrome('eye')).toBe(true); 
    });

    test('Test Case 2 - Check if palindrome', () => {
        expect(Palindrome('_eye')).toBe(true); 
    });

    test('Test Case 3 - Check if palindrome', () => {
        expect(Palindrome('race car')).toBe(true); 
    });

    test('Test Case 4 - Check if palindrome', () => {
        expect(Palindrome('not a palindome')).toBe(false); 
    });

    test('Test Case 5 - Check if palindrome', () => {
        expect(Palindrome('A man, a plan, a canal. Panama')).toBe(true); 
    });

    test('Test Case 6 - Check if palindrome', () => {
        expect(Palindrome('never odd or even')).toBe(true); 
    });

    test('Test Case 7 - Check if palindrome', () => {
        expect(Palindrome('nope')).toBe(false); 
    });

    test('Test Case 8 - Check if palindrome', () => {
        expect(Palindrome('almostomla')).toBe(false); 
    });

    test('Test Case 9 - Check if palindrome', () => {
        expect(Palindrome('My age is 0, 0 si ega ym.')).toBe(true); 
    });

    test('Test Case 10 - Check if palindrome', () => {
        expect(Palindrome('1 eye for of 1 eye.')).toBe(false); 
    });

    test('Test Case 11 - Check if palindrome', () => {
        expect(Palindrome('0_0 (: /-\ :) 0-0')).toBe(true); 
    });

    test('Test Case 11 - Check if palindrome', () => {
        expect(Palindrome('five|\_/|four')).toBe(false); 
    });

});