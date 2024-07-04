import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  sumTwoELements,
  solveMeFirst,
} from "../Algorithm/SumOfTwoElements"; // Adjust the import path accordingly

describe("solveMeFirst", () => {
  it("should return the sum of two numbers", () => {
    expect(solveMeFirst(2, 3)).toBe(5);
    expect(solveMeFirst(-1, 1)).toBe(0);
    expect(solveMeFirst(0, 0)).toBe(0);
  });
});

describe("sumTwoElements", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2);
    vi.spyOn(console, "log");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  })

  it('should return sum of two randomly generated numbers', () => {
    const logSpy = vi.spyOn(console, 'log');
    sumTwoELements();
    expect(logSpy).toHaveBeenCalledWith(expect.any(Number));
    logSpy.mockRestore();
  });

  it('should correctly sum two random numbers between 0 and 10', () => {
    sumTwoELements();
    // 
    expect(console.log).toHaveBeenCalledWith(3);
  })
});
