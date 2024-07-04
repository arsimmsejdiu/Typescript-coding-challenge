import { describe, expect, it } from "vitest";
import { caesarCipher } from "../Week 1 preparation kit/day-three/CaesarCypher";

describe("Caesar Cypher", () => {
  it("should shift lowercase letters correctly when given a positive shift value", () => {
    const input = "abc";
    const shift = 3;
    const expectedOutput = "def";
    expect(caesarCipher(input, shift)).toBe(expectedOutput);
  });

  it("should return an empty string when input is empty", () => {
    const input = "";
    const shift = 5;
    const expectedOutput = "";
    expect(caesarCipher(input, shift)).toBe(expectedOutput);
  });

  it("should return input string as is when shift is 0", () => {
    const result = caesarCipher("Hello, World!", 0);
    expect(result).toBe("Hello, World!");
  });

  it("should correctly shift letters with a positive shift", () => {
    const result = caesarCipher("Hello, World!", 3);
    expect(result).toBe("Khoor, Zruog!");
  });

  it("should correctly shift letters with a negative shift", () => {
    const result = caesarCipher("Khoor, Zruog!", -3);
    expect(result).toBe("Hello, World!");
  });

  it("should handle shifting across alphabet boundaries", () => {
    const result = caesarCipher("XYZ", 3);
    expect(result).toBe("ABC");
  });

  it("should preserve non-alphabetic characters", () => {
    const result = caesarCipher("Hello, World!", 1);
    expect(result).toBe("Ifmmp, Xpsme!");
  });

  it("should handle empty string input", () => {
    const result = caesarCipher("", 5);
    expect(result).toBe("");
  });

  it("should handle large shifts gracefully", () => {
    const result = caesarCipher("Hello, World!", 1000);
    expect(result).toBe("Tqxxa, Iadxp!");
  });
});

/*
Explanation of Tests

		1.	it('should return the original string when the shift is 0', ...):
	•	Tests the scenario where the shift (k) is 0. According to the function, if k is 0, the function should return the input string s unchanged.
	2.	it('should correctly shift letters with a positive shift', ...):
	•	Tests the scenario where k is positive. Verifies that the function correctly shifts each letter in the input string s by k positions forward in the alphabet.
	3.	it('should correctly shift letters with a negative shift', ...):
	•	Tests the scenario where k is negative. Ensures that the function correctly shifts each letter in the input string s by k positions backward in the alphabet.
	4.	it('should handle shifting across alphabet boundaries', ...):
	•	Tests the scenario where the shift causes letters to wrap around the alphabet boundaries (e.g., shifting ‘XYZ’ by 3 results in ‘ABC’).
	5.	it('should preserve non-alphabetic characters', ...):
	•	Tests that non-alphabetic characters (like punctuation and spaces) are preserved and not shifted.
	6.	it('should handle empty string input', ...):
	•	Tests the scenario where the input string s is empty. Verifies that the function returns an empty string in this case.
	7.	it('should handle large shifts gracefully', ...):
	•	Tests the scenario where k is a large positive number. Checks that the function handles large shifts correctly and wraps around the alphabet as expected.
*/
