import { describe, expect, it, vi } from "vitest";
import { minimumBribes } from "../Week 1 preparation kit/day-four/MinimumBribes";

describe("Minimum Bribes", () => {
    it("should calculate the correct number of bribes from valid scenarios", () => {
        const q = [2, 1, 5, 3, 4];
        const n = [1,2,5,3,7,8,6,4]
        const consoleSpy = vi.spyOn(console, "log");
        minimumBribes(q);
        expect(consoleSpy).toHaveBeenCalledWith(3);

        consoleSpy.mockClear();
        minimumBribes(n);
        expect(consoleSpy).toHaveBeenCalledWith(7);

        consoleSpy.mockRestore();
    });

    it('should identify chaotic scenarios correctly', () => {
        const consoleSpy = vi.spyOn(console, "log");
        const q = [2, 5, 1, 3, 4];
        minimumBribes(q);
        expect(consoleSpy).toHaveBeenCalledWith("Too chaotic");
        
        consoleSpy.mockRestore();
    });

    it('should handle edge cases with no bribes', () => {
        const consoleSpy = vi.spyOn(console, "log");
        const q = [1, 2, 3, 4, 5];
        minimumBribes(q);
        expect(consoleSpy).toHaveBeenCalledWith(0);
        
        consoleSpy.mockRestore();
    });

    it('should handle edge cases with a single element', () => {
        const consoleSpy = vi.spyOn(console, "log");
        const q = [1];
        minimumBribes(q);
        expect(consoleSpy).toHaveBeenCalledWith(0);
        
        consoleSpy.mockRestore();
    });

    it('should handle large inputs efficiently', () => {
        // Generate a large valid input with a known number of bribes
        const largeInput = Array.from({ length: 100000 }, (_, i) => i + 1);
        //simulate some bribes
        [largeInput[9998], largeInput[9999]] = [largeInput[9999], largeInput[9998]]
        const consoleSpy = vi.spyOn(console, "log");

        minimumBribes(largeInput);
        expect(consoleSpy).toHaveBeenCalledWith(1);

        consoleSpy.mockRestore();
    })
})