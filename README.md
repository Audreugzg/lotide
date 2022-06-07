# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gaoz6/lotide`

**Require it:**

`const _ = require('@gaoz6/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(tail)`: Function will take in an array as input and output an array that contains every element except the first element. If the input function only have one element or empty,function will return an empty arrray.
* `function2(head)`: Function will take in an array as input and output the first element of the array.
* `function3(middle)`: Function will take in an array and retuen the middle-most elements of the given array.
* `function4(eqArrays)`: Function takes in two arrays and retuen true of false,based on a perfect match.
* `function5(assertArraysEqual)`: Function compare two arrays it takes in and print out a message telling us if they mach or not.
* `function6(assertEqual)`: Function compare two elemtnts it takes in and print out a message telling us if they mach or not.
* `function7(eqObjects)`: Function takes in two objects and retuen true of false,based on a perfect match.
* `function8(assertObjectsEqual)`: Function compare two objects it takes in and print out a message telling us if they mach or not.
* `function9(countLetters)`: Function will take in an string, and return a count of each of the letters in that string.
* `function10(countOnly)`: Function will take in a collection of items and the elements we want to count. The elements want to be count need to be set to true. The function return counts for a specific subset of those items.
* `function11(findKey)`: Function takes in an object ans a callback. It will scan the object and return the first key for which the call baack return a truthy value.if no key found, function will return undefined.
* `function12(letterPositions)`: Function will return all the index in the string where each character is found.
* `function13(map)`: Function will take in two arguments, an array to map and a call back function. The function will return a new array based on the result of the call back function.
* `function14(takeUntil)`: Function will take in two arguments, an array to take and a call back function. The function will return a new array until the the call baack return a truthy value.
* `function15(without)`: Function will take two array, the sencons input is the unwanted item. The function will return a subset of the given array and removing unwanted elements.
* `function16(findKeyByValue)`: Function takes in an object and a value. And return the first key which contains the given value.
* `function17(flatten)`: Function will take in an array containing elements including nested arrays of elements, and return an array with all the elements with no nested arrays.
Instruction





