import { describe, expect, it } from "vitest";
import { palindromeIndex } from "../Week 1 preparation kit/day-three/MockPalindromeIndex";

describe("Palindrome index mock test", () => {
  it('should find the correct index to remoce from "aaab"', () => {
    expect(palindromeIndex("aaab")).toBe(3);
  });

  it('should find the correct index to remove for "baa"', () => {
    expect(palindromeIndex("baa")).toBe(0);
  });

  it('should return -1 for "aaa"', () => {
    expect(palindromeIndex("aaa")).toBe(-1);
  });

  it("should hndle strings where removing characters do not form palindrome", () => {
    expect(palindromeIndex("abb")).toBe(0);
    expect(palindromeIndex("bba")).toBe(2);
  });

  it("should return -1 for empty string", () => {
    expect(palindromeIndex("")).toBe(-1);
  });

  it("should handle long strings efficiently", () => {
    const longString = "a".repeat(100000);
    expect(palindromeIndex(longString)).toBe(-1);
  });

  it("should handle a string if neither makes it a palindrome, return -1", () => {
    expect(palindromeIndex("abc")).toBe(-1);
  })

  it('should hadle a string if its aleary a palindrome', () => {
    expect(palindromeIndex('racecar')).toBe(-1);
  })
});
