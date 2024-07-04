import { describe, expect, it } from "vitest";
import { gridChallenge } from "../Week 1 preparation kit/day-four/GridChallenge";

describe("Grid Challange", () => {
  it("should return YES for a grid that can be rearanged as required", () => {
    const grid1 = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
    expect(gridChallenge(grid1)).toBe("YES");

    const grid2 = ["abc", "ade", "efg"];
    expect(gridChallenge(grid2)).toBe("YES");
  });

  it("should return NO for a grid that cannot be rearanged as required", () => {
    const grid1 = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
    expect(gridChallenge(grid1)).toBe('YES');
  
    const grid2 = ['zyx', 'wvu', 'tsr'];
    expect(gridChallenge(grid2)).toBe('NO');
  });

  it('should handle single row grids', () => {
    const grid = ['abc'];
    expect(gridChallenge(grid)).toBe('YES');
  });

  it('should handle single column grids', () => {
    const grid = ['a', 'b', 'c'];
    expect(gridChallenge(grid)).toBe('YES');
  });

  it('should handle empty grids', () => {
    const grid: string[] = [];
    expect(gridChallenge(grid)).toBe('YES');
  });

  it('should handle grids with one element', () => {
    const grid = ['a'];
    expect(gridChallenge(grid)).toBe('YES');
  });

  it('should handle grids with rows of varying lengths', () => {
    const grid = ['abc', 'de', 'f'];
    expect(gridChallenge(grid)).toBe('NO');
  });
});
