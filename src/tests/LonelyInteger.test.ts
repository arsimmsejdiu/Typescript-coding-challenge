import { describe, expect, it } from "vitest";
import { findLonelyIntegers } from "../Week 1 preparation kit/day-two/LonelyInteger";

describe("Given an array of integers, where all elements but one occur twice, find the unique element.", () => {
  it("should return the lonely integer when there is one lonely integer", () => {
    const arr = [1, 2, 3, 2, 1];
    expect(findLonelyIntegers(arr)).toBe(3);
  });

  it("should handle the smallest possible array size", () => {
    const arr = [1, 2, 2];
    const result = findLonelyIntegers(arr);
    expect(result).toBe(1);
  });

  it("should return 0 when the array is empty", () => {
    const arr: number[] = [];
    expect(findLonelyIntegers(arr)).toBe(0);
  });

  it("should return the lonely integer when the array has one element", () => {
    const arr = [42];
    expect(findLonelyIntegers(arr)).toBe(42);
  });

  it("should handle negative numbers correctly", () => {
    const arr = [-1, -1, -2, -2, -3];
    expect(findLonelyIntegers(arr)).toBe(-3);
  });

  it("should return the lonely integer when there are multiple pairs and one lonely integers", () => {
    const arr = [4, 9, 4, 8, 9, 7, 8];
    expect(findLonelyIntegers(arr)).toBe(7);
  });
});
