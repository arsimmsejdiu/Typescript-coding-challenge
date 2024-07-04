// The median of a list of numbers is essentially its middle element after sorting. The same number of
// elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
// Example
// Sorting Search Algorithms Easy problem-solving Core CS
// Problem Solving
// QUESTION DESCRIPTION
//  
// QUESTION 1
// Needs Review
// Score 105
// 
// 
// Mock Test  arsimsejdiudev@gmail.com
// 2/3
// The sorted array . The middle element and the median is .
// Function Description
// Complete the findMedian function in the editor below.
// findMedian has the following parameter(s):
// int arr[n]: an unsorted array of integers
// Returns
// int: the median of the array
// Input Format
// The first line contains the integer , the size of .
// The second line contains space-separated integers

export function findMedian(arr: number[]): number {
  // Write your code here
  //step 1. Sort the array
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const mid = Math.floor(n / 2);

  // step 2. Calculate the median
  if (n % 2 == 0) {
    //if even, average of the two middle numbers
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    // if odd, middle number
    return arr[mid];
  }
}
