import { describe, it, expect, vi } from "vitest";
import { plusMinus } from "../Week 1 preparation kit/day-one/PlusMinus";

describe("Given an array of integers, calculate the ratios of its elements ", () => {
  it("should correctly calculate ratios when array contains positive, negative, and zero values", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const arr = [1, -1, 0, 1, -1];
    plusMinus(arr);
    expect(consoleSpy).toHaveBeenCalledWith("0.400000");
    expect(consoleSpy).toHaveBeenCalledWith("0.400000");
    expect(consoleSpy).toHaveBeenCalledWith("1.000000");
    consoleSpy.mockRestore();
  });

  it("should handle an empty array without errors", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const arr: number[] = [];
    plusMinus(arr);
    expect(consoleSpy).toHaveBeenCalledWith("NaN");
    expect(consoleSpy).toHaveBeenCalledWith("NaN");
    expect(consoleSpy).toHaveBeenCalledWith("NaN");
    consoleSpy.mockRestore();
  });
});
