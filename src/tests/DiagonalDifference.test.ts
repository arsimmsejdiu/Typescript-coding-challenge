import { describe, expect, it } from "vitest";
import { diagonalDifference } from "../Week 1 preparation kit/day-two/DiagonalDifference";

describe("Given a square matrix, calculate the absolute difference between the sums of its diagonals.", () => {
  it("should return 0 for a 1x1 matrix", () => {
    const matrix = [[5]];
    expect(diagonalDifference(matrix)).toBe(0);
  });

  it("should return correct diagonal difference for 3x3 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(diagonalDifference(matrix)).toBe(0);
  });

  it("should return the correct diagonal difference for a 3x3 matrix", () => {
    const matrix = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(matrix)).toBe(15);
  });

  it('should handle negative numbers correctly', () => {
    const matrix = [
        [6, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
    ];
    expect(diagonalDifference(matrix)).toBe(8);
});

  it("should return 0 for an empty matrix", () => {
    const matrix: number[][] = [];
    expect(diagonalDifference(matrix)).toBe(0);
  });

  it('should return the correct diagonal difference for a larger matrix', () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    expect(diagonalDifference(matrix)).toBe(0);
});
});
