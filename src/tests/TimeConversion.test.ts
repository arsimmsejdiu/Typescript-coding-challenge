import { describe, it, expect, vi } from "vitest";
import { timeConversion } from "../Week 1 preparation kit/day-one/TimeConversion";

describe("Given a time in -hour AM/PM format, convert it to military (24-hour) time.", () => {
    it('should convert 12:00:00AM to 00:00:00', () => {
        const input = '12:00:00AM';
        const expectedOutput = '00:00:00';
        expect(timeConversion(input)).toBe(expectedOutput)
    })

    it('should convert 10:30:23PM to 22:30:23', () => {
        const input = '10:30:23PM';
        const expectedOutput = '22:30:23';
        expect(timeConversion(input)).toBe(expectedOutput)
    })
})
