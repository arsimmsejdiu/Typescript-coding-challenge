import { describe, expect, it } from "vitest";
import { superDigit } from "../Week 1 preparation kit/day-four/RecursiveDigitSum";

describe("Recursive Super Digit Sum", () => {
  it("should calculate super digit correctly for a single digit", () => {
    const n = "7";
    const k = 3;

    expect(superDigit(n, k)).toEqual(7); // 7 is single digit so the result is 7
  });

  it("should calculate super digit correctly for multiple digits", () => {
    const n = "9875";
    const k = 1;
    expect(superDigit(n, k)).toEqual(2); // 9 + 8 + 7 + 5 = 29 => 2 + 9 = 11 => 1 + 1 = 2
  });

  it('should handle large numbers and repetition factors', () => {
    const n = '123';
    const k = 3;
    expect(superDigit(n, k)).toEqual(9); // (1 + 2 + 3) * 3 = 18 => 1 + 8 = 9
  });

  it('should handle zero corrently', () => {
    const n = '0';
    const k = 10;
    expect(superDigit(n, k)).toEqual(0); // 0 repeated 10 times is still 0
  })
});
