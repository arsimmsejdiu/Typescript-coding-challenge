import { describe, expect, it, vi } from "vitest";
import { findZigZagSequence } from "../Week 1 preparation kit/day-three/ZigZagSequence";

describe("Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.", () => {
  it("should print the correct zig zag sequence for the given input", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const n = arr.length;

    const consoleSpy = vi.spyOn(console, "log");
    findZigZagSequence(arr, n);

    expect(consoleSpy).toHaveBeenCalledWith("1 2 3 7 6 5 4");

    consoleSpy.mockRestore();
  });

  it("should handle another example correctly", () => {
    const arr = [2, 3, 5, 1, 4, 6, 7];
    const n = arr.length;

    const consoleLogSpy = vi.spyOn(console, "log");

    findZigZagSequence(arr, n);

    expect(consoleLogSpy).toHaveBeenCalledWith("1 2 3 7 6 5 4");

    consoleLogSpy.mockRestore();
  });

  it("should handle a case with different numbers", () => {
    const arr = [10, 20, 30, 40, 50, 60, 70];
    const n = arr.length;

    const consoleLogSpy = vi.spyOn(console, "log");

    findZigZagSequence(arr, n);

    expect(consoleLogSpy).toHaveBeenCalledWith("10 20 30 70 60 50 40");

    consoleLogSpy.mockRestore();
  });

  it("should correctly sort and rearrange an array of distinct positive integers", () => {
    const arr = [4, 3, 7, 8, 6, 2, 1];
    const n = arr.length;

    findZigZagSequence(arr, n);
    expect(arr).toEqual([1, 2, 3, 8, 7, 6, 4]);
  });

  it("should handle an array with a single element", () => {
    const arr = [1];
    const n = arr.length;
    
    findZigZagSequence(arr, n);
    expect(arr).toEqual([1]);
  });
});
