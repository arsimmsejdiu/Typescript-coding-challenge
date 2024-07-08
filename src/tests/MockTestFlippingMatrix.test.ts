import { describe, expect, it } from "vitest";
import { flippingMatrix } from "../Week 1 preparation kit/day-two/MockTest";

describe("Flipping Matrix mock test", () => {
  it("should return the correct sum for  a 2 x 2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const result = flippingMatrix(matrix);
    expect(result).toEqual(4);
  });

  it("should handle the smallest possible matrix (2x2)", () => {
    const matrix = [
      [5, 1],
      [3, 7],
    ];

    const result = flippingMatrix(matrix);
    expect(result).toEqual(7);
  });

  it("should return the correct maximum sum for the upperleft quadrant", () => {
    const matrix1 = [
      [112, 42, 83, 119],
      [56, 125, 56, 49],
      [15, 78, 101, 43],
      [62, 98, 114, 108],
    ];
    const expected1 = 414;
    expect(flippingMatrix(matrix1)).toBe(expected1);

    const matrix2 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const expected2 = 54; //
    expect(flippingMatrix(matrix2)).toBe(expected2);
  });

  it("should handle larger matrices correctly", () => {
    const matrix = [
      [107, 54, 128, 15],
      [12, 75, 110, 138],
      [100, 96, 34, 85],
      [75, 15, 28, 112],
    ];
    const expected = 488;
    expect(flippingMatrix(matrix)).toBe(expected);
  });
});

// 1.	Test Case 1:
// 	•	Matrix: [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]
// 	•	Expected result is 414, calculated by summing the maximum values from each possible position in the upper-left quadrant.
// 	2.	Test Case 2:
// 	•	Matrix: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// 	•	Expected result is 34, calculated by summing the maximum values from each possible position in the upper-left quadrant.
// 	3.	Test Case 3:
// 	•	Matrix: [[1, 2], [3, 4]]
// 	•	Expected result is 4, since it is the maximum value in a single quadrant matrix.
// 	4.	Test Case 4:
// 	•	Matrix: [[107, 54, 128, 15], [12, 75, 110, 138], [100, 96, 34, 85], [75, 15, 28, 112]]
// 	•	Expected result is 488, calculated by summing the maximum values from each possible position in the upper-left quadrant.
