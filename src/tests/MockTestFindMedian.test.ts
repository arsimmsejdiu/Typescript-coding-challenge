import { describe, expect, it } from "vitest";
import { findMedian } from "../Week 1 preparation kit/day-one/MockTest";

describe("Find Median mock test", () => {
  it("should return the median when the array length is odd", () => {
    const arr = [3, 2, 1];
    const result = findMedian(arr);
    expect(result).toBe(2);
  });

  it("should return the median for an even-length array", () => {
    const arr = [4, 1, 2, 3];
    const result = findMedian(arr);
    expect(result).toBe(2.5);
  });

  it("should handle array with negative numbers correctly", () => {
    const arr = [-5, -10, -3, -4, -1];
    expect(findMedian(arr)).toBe(-4);
  });

  it("should handle arrays with single element", () => {
    const arr = [42];
    expect(findMedian(arr)).toBe(42);
  });

  it("should handle arrays with duplicated elements", () => {
    const arr = [1, 2, 2, 2, 3];
    expect(findMedian(arr)).toBe(2);
  });

  it("should retrun NaN when the array is empty", () => {
    const arr: number[] = [];
    const result = findMedian(arr);
    expect(result).toBeNaN();
  });

  it("should return the median for a large array", () => {
    const arr = Array.from({ length: 1001 }, (_, i) => i + 1);
    expect(findMedian(arr)).toBe(501);
  });
});
