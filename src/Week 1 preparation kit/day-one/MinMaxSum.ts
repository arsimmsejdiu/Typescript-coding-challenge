// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

export function miniMaxSum(arr: number[]): void {
    // Sort the array in ascending oder
    arr.sort((a, b) => a - b);

    // Calculate the minimum sum (sum of the first four elements)
    const minSum = arr.slice(0, 4).reduce((acc, val) => acc + val , 0 );

    // Calculate the maximum sum (sum of the last four elements)
    const maxSum = arr.slice(1).reduce((acc, val) => acc + val, 0);

    console.log(`${minSum} ${maxSum}`);
}

// Explanation

// 	1.	Sorting the Array:
// 	•	arr.sort((a, b) => a - b) sorts the array in ascending order.
// 	2.	Calculating the Minimum Sum:
// 	•	arr.slice(0, 4) creates a sub-array containing the first four elements.
// 	•	reduce((acc, val) => acc + val, 0) sums these elements.
// 	3.	Calculating the Maximum Sum:
// 	•	arr.slice(1) creates a sub-array excluding the first element (thus containing the last four elements).
// 	•	reduce((acc, val) => acc + val, 0) sums these elements.
// 	4.	Printing the Results:
// 	•	The results are printed as space-separated integers using a template literal.

// When you run the example array [1, 3, 5, 7, 9], the function will print: 16 24
