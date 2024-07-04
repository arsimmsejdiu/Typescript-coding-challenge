// In this challenge, the task is to debug the existing code to successfully execute all provided test files.

// Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.

// Example.

// Now if we permute the array as , the result is a zig zag sequence.

// Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

// Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.

// To restore the original code, click on the icon to the right of the language selector.

// Input Format

// The first line contains  the number of test cases. The first line of each test case contains an integer , denoting the number of array elements. The next line of the test case contains  elements of array .

// Constraints

//  ( is always odd)

// Output Format

// For each test cases, print the elements of the transformed zig zag sequence in a single line.

// let inputString: string = "";
// let inputLines: string[] = [];
// let currentLine: number = 0;

// export function readLine(): string {
//   return inputLines[currentLine++];
// }

// export function main() {
//   let testCase: number = parseInt(readLine());
//   for (let t = 0; t <= testCase; t++) {
//     let n: number = parseInt(readLine());
//     let arr: number[] = readLine().split(" ").map(Number);
//   }
// }

export function findZigZagSequence(arr: number[], n: number): void {
  arr.sort((a, b) => a - b);
  let mid = Math.floor((n - 1) / 2);
  let temp = arr[mid];
  arr[mid] = arr[n - 1];
  arr[n - 1] = temp;

  let start = mid + 1;
  let end = n - 2;
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log(arr.join(" "));
}

// Explanation of Changes:

// 	1.	Sorting the Array: Ensure the array is sorted so we can easily form the zig zag sequence.
// 	2.	Finding the Midpoint: Calculate the midpoint correctly to divide the array into two halves.
// 	3.	Swapping Elements: Swap the middle element with the last element to start the zig zag pattern.
// 	4.	Reversing the Second Half: Reverse the second half of the array to ensure it is in decreasing order.

// Modifications:

// 	•	Sort the array: arr.sort((a, b) => a - b);
// 	•	Correct midpoint calculation: let mid = Math.floor((n - 1) / 2);
// 	•	Swap the middle element with the last element: let temp = arr[mid]; arr[mid] = arr[n - 1]; arr[n - 1] = temp;
// 	•	Reverse the second half: while (start <= end) { ... }
