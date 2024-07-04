/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Example


The alphabet is rotated by , matching the mapping above. The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.

Constraints



 is a valid ASCII string without any spaces.
*/

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

export function caesarCipher(s: string, k: number): string {
    // Write your code here
    if(s.length === 0 || k === 0) {
        return s; // if the string is empty or the shift is zero, return the string as is 
    }
    // normalize the shift to be within 0 - 25 range
    const shift = k % 26;
    
    function shiftChar(char: string, shift: number): string  {
        let code = char.charCodeAt(0);
        
        //Determine the base (A or a) and total number of letter (26)
        let base = code >= 65 && code <= 90 ? 65 : 97; 
        let totalLetters = 26;
        
        //Apply the shift
        let shiftedCode = base + ((code - base + shift) % totalLetters);
        
        return String.fromCharCode(shiftedCode);
    }
    
    // Map each character in the string with the shift
    const result = s.split("").map(char => {
        if(/[A-Z]/.test(char)) {
            return shiftChar(char, shift);
        } else if(/[a-z]/.test(char)) {
            return shiftChar(char, shift)
        } else {
            return char // Preserve the non alphabetic characters
        }
    })
    
    return result.join("");
}

// Explanation of the Code

// 	•	Edge Cases: The function checks if the input string s is empty or if the shift k is 0. If either condition is true, it returns the input string s as is.
// 	•	Shift Normalization: The shift k is normalized using k % 26 to ensure it wraps around within the 26 letters of the alphabet.
// 	•	Character Shifting: The shiftChar function handles the shifting logic for each character:
// 	•	Determines if the character is uppercase or lowercase.
// 	•	Computes the new character code after applying the shift and ensures it wraps around using modulo operations.
// 	•	Mapping and Joining: The main function splits the input string into an array of characters, maps each character to its shifted counterpart (or leaves it unchanged if it’s not a letter), and finally joins the array back into a string to return the result.

// This implementation efficiently handles the Caesar Cipher transformation in TypeScript, ensuring all edge cases and letter wrapping are correctly managed. Adjustments can be made as needed for specific requirements or additional constraints.