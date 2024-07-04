// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .

export function findLonelyIntegers(arr: number[]): number {
    return arr.reduce((acc, val) => acc ^ val, 0);
}

// Explanation

// 	1.	reduce with XOR:
// 	•	The reduce function iterates through the array, applying the XOR operation to each element with an accumulator.
// 	•	Starting with an initial accumulator value of 0, the XOR operation is applied to each element of the array.
// 	•	Due to the properties of XOR, all paired elements cancel out, leaving only the unique element.

// Example

// For exampleArray1 = [1, 2, 3, 2, 1]:

// 	•	The XOR operations are: 0 ^ 1 ^ 2 ^ 3 ^ 2 ^ 1
// 	•	Simplifies to: (0 ^ 1) ^ 2 ^ 3 ^ 2 ^ 1 -> 1 ^ 2 ^ 3 ^ 2 ^ 1 -> (1 ^ 2) ^ 3 ^ 2 ^ 1 -> 3 ^ 3 ^ 1 -> 0 ^ 1 -> 1
// 	•	So, the output is 3.

// For exampleArray2 = [4, 9, 4, 6, 9, 6, 8]:

// 	•	The XOR operations are: 0 ^ 4 ^ 9 ^ 4 ^ 6 ^ 9 ^ 6 ^ 8
// 	•	Simplifies to: (0 ^ 4) ^ 9 ^ 4 ^ 6 ^ 9 ^ 6 ^ 8 -> 4 ^ 9 ^ 4 ^ 6 ^ 9 ^ 6 ^ 8 -> 0 ^ 6 ^ 9 ^ 6 ^ 8 -> 0 ^ 9 ^ 8 -> 8
// 	•	So, the output is 8.

// This method is efficient with a time complexity of O(n) and a space complexity of O(1), making it an optimal solution for the “Lonely Integer” problem.