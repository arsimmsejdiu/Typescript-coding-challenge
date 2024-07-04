/*
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

Example:

grid = ['abc', 'def', 'ghi']

The grid is illustrated below.

a b c
a d e
e f g
The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. 
Only elements within the same row can be rearranged. They cannot be moved to a different row.

Function Description

Complete the gridChallenge function in the editor below.

gridChallenge has the following parameter(s):

string grid[n]: an array of strings
Returns

string: either YES or NO
Input Format

The first line contains , the number of testcases.

Each of the next  sets of lines are described as follows:
- The first line contains , the number of rows and columns in the grid.
- The next  lines contains a string of length 

Constraints

1 <= n <= 100
1 <= m <= 100

Each string consists of lowercase letters in the range ascii[a-z]

Output Format

For each test case, on a separate line print YES if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or NO otherwise.

Sample Input

STDIN   Function
-----   --------
1       t = 1
5       n = 5
ebacd   grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
fghij
olmkn
trpqs
xywuv
Sample Output

YES
Explanation

The x grid in the  test case can be reordered to

abcde
fghij
klmno
pqrst
uvwxy
*/

export function gridChallenge(grid: string[]): string {
  if (grid.length === 0) {
    return "YES"; // Edge case for empty grid
  }
  // Sort each row of the grid alphabetically
  const sortedRows = grid.map((row) => row.split("").sort().join(""));

  // Check if columns are sorted
  const m = sortedRows[0].length;

  for (let col = 0; col < m; col++) {
    const column = sortedRows.map((row) => row[col]);
    if (!column.every((val, i) => i === 0 || val >= column[i - 1])) {
      return "NO";
    }
  }

  return "YES";
}
