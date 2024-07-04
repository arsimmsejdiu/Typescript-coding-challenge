import { describe, expect, it } from "vitest";
import { towerBreakers } from "../Week 1 preparation kit/day-three/TowerBreakers";

describe("Tower Breaker", () => {
    it('should return 2 when n is even and m is greater than 1', () => {
        expect(towerBreakers(4, 3)).toBe(2)
    });

    it('should handle greacefully when n is 0', () => {
        expect(towerBreakers(0, 3)).toBe(2)
    });

    it('should return 2 when n is even', () => {
        expect(towerBreakers(4, 5)).toBe(2);
    });

    it('should return 1 when n is odd and m is odd', () => {
        expect(towerBreakers(3, 5)).toBe(1);
    });

    it('should handle endge cases: n is odd and m is 1', () => {
        expect(towerBreakers(3, 1)).toBe(2); // second player wins because m is 1
    })
})