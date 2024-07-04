// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15

export function diagonalDifference(arr: number[][]): number  {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = arr.length;

    for(let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Explanation

// 	1.	Corrected Example Matrices:
// 	•	matrix1 is a 3x3 matrix where each row has three elements.
// 	•	matrix2 is also a 3x3 matrix with consistent row and column dimensions.
// 	2.	Function diagonalDifference:
// 	•	The function iterates over the rows of the matrix (for (let i = 0; i < n; i++)).
// 	•	It accumulates the sum of the primary diagonal (arr[i][i]) and the secondary diagonal (arr[i][n - 1 - i]).
// 	•	Finally, it computes the absolute difference between these two sums and returns the result.