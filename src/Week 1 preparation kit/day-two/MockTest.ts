/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

export function flippingMatrix(matrix: number[][]): number {
  const n = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      maxSum += Math.max(
        matrix[i][j], // top-left
        matrix[i][2 * n - j - 1], // top-right
        matrix[2 * n - i - 1][j], // bottom-left
        matrix[2 * n - i - 1][2 * n - j - 1] // bottom-right
      );
    }
  }

  return maxSum;
}

/*

Explanation

1. We initialize `n` as half of the length of the matrix (since we're dealing with a square matrix).
2. We initialize `maxSum` to 0, which will store the maximum sum of elements across all possible quadruples.
3. We iterate over the first `n` rows and the first `n` columns of the matrix.
4. For each cell, we find the maximum value among the four elements in the quadruple (top-left, top-right, bottom-left, and bottom-right).
5. We add this maximum value to `maxSum`.
6. After iterating over all quadruples, we return `maxSum`, which represents the maximum sum of elements across all possible quadruples.

Note: This solution assumes that the input matrix is a square matrix of size `2n x 2n`, where `n` is an integer.

The provided code snippet is a TypeScript function called 
flippingMatrix that takes a 2D array of numbers (a matrix) as input and returns the maximum sum 
that can be obtained by flipping certain elements of the matrix.

Here's a breakdown of how the function works:

1. The function first calculates n, which is the length of one side of the square matrix divided by 2. 
This is because the matrix is symmetric, and we only need to consider the top-left quadrant.

2. The variable maxSum is initialized to 0. This will store the maximum sum of the selected elements.

3. The function uses two nested loops to iterate over the top-left quadrant of the matrix 
(the first n rows and n columns).

4. For each element in the top-left quadrant, the function calculates the maximum value among 
the following four elements:

* The element itself ( matrix[i][j]).

* The element in the top-right quadrant ( matrix[i][2 * n - j - 1]).

* The element in the bottom-left quadrant (matrix[2 * n - i - 1]j).

* The element in the bottom-right quadrant (matrix[2 * n - i - 1][2 * n - j - 1]).

This is because the matrix is symmetric, and we can choose the maximum value among the four corresponding elements in the four quadrants.

5. The maximum value calculated in step 4 is added to the maxSum variable.

6. After iterating over the entire top-left quadrant, the function returns the maxSum, 
which represents the maximum sum that can be obtained by flipping certain elements of the matrix.

This function can be useful in solving problems related to matrix manipulation, 
where you need to find the maximum or minimum sum of elements by applying certain transformations or flipping operations on the matrix.
*/
