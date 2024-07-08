import { describe, expect, it } from "vitest";
import { truckTour } from "../Week 1 preparation kit/day-four/MockTruckTour";

describe("Truck Tour Mock Test", () => {
    it('should find the correct starting pump index', () => {
        const pumps1: number[][] = [
            [4, 6],
            [6, 5],
            [7, 3],
            [4, 5]
        ];

        expect(truckTour(pumps1)).toBe(1);

        const pumps2: number[][] = [
            [1, 5],
            [10, 3],
            [3, 4]
        ];
        expect(truckTour(pumps2)).toBe(1);
    });

    it('should return -1 if completing the circle is impossible', () => {
        const pumps: number[][] = [
            [1, 5],
            [2, 6],
            [7, 3]
        ];

        expect(truckTour(pumps)).toBe(-1)
    });

    it('should handle the case where starting from the first pump is the solution', () => {
        const pumps: number[][] = [
            [6, 4],
            [3, 6],
            [7, 3]
        ];
        expect(truckTour(pumps)).toBe(2);
    })

    it('should handle edge cases with a single pump', () => {
        const pumps: number[][] = [
            [5, 5]
        ];
        expect(truckTour(pumps)).toBe(0);
    });

    it('should handle large inputs efficiently', () => {
        const largeInput: number[][] = Array.from({ length: 10000 }, (_, i) => [i + 1, i + 1]);
        largeInput[9998] = [largeInput[9998][0], largeInput[9998][1] + 1];
        largeInput[9999] = [largeInput[9999][0], largeInput[9999][1] - 1];

        expect(truckTour(largeInput)).toBe(9999); // Adjust the expected value
    });
})