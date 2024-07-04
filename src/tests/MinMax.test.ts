import { describe, it, expect, vi } from "vitest";
import { miniMaxSum } from "../Week 1 preparation kit/day-one/MinMaxSum";

describe("Min Max Sum", () => {
  it("should calculate the min sum (sum of the four first element)", () => {
    const consoleSpy = vi.spyOn(console, "log");
    miniMaxSum([1, 3, 5, 7, 9]);
    expect(consoleSpy).toHaveBeenCalledWith("16 24");
    consoleSpy.mockRestore();
  });

  it('should handle array with minimum possible values', () => {
    const consoleSpy = vi.spyOn(console, "log");
    miniMaxSum([1, 1, 1, 1, 1]);
    expect(consoleSpy).toHaveBeenCalledWith("4 4")
    consoleSpy.mockRestore();
  })
});
