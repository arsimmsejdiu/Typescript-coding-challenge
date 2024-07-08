/*
* Problem Statement

Given a string, determine the index of a character that, when removed, makes the string a palindrome. If no such character exists, return -1. If the string is already a palindrome, return -1.

* Example

For example, given the string "abca", removing 'b' at index 1 results in "aca", which is a palindrome. Therefore, the function should return 1.
*/

export function palindromeIndex(s: string): number {
  function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try removing left or right character
      if (isPalindrome(s.substring(left + 1, right + 1))) {
        return left;
      }
      if (isPalindrome(s.substring(left, right))) {
        return right;
      }
      // If neither makes it a palindrome, return -1
      return -1;
    }
    left++;
    right--;
  }

  return -1; // String is already a palindrome
}

/*
* Explanation

	•	Function Logic: The palindromeIndex function checks whether a string s can be turned into a palindrome by removing exactly one character. 
        It uses a helper function isPalindrome to check if a substring is a palindrome.
	•	Palindrome Check: It iterates from both ends of the string towards the center (left and right indices), checking if characters at these positions are different.
        If so, it checks whether removing either character makes the string a palindrome.
	•	Handling Palindrome: If the string is already a palindrome (left never becomes less than right), the function returns -1.
	•	Efficiency: The function is efficient with a time complexity close to O(n) due to the single pass through the string and substring operations.

*/
