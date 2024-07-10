import { describe, expect, it } from "vitest";
import { expression } from "../Algorithm/BasicArithmeticAlternativeSyntax";

describe("Basic Arithmetic Calculation in Alternative Syntax", () => {
    it('should evaluate basic arithmetic expressions correctly', () => {
        expect(expression('5')).toEqual(5); // Single number
        expect(expression('1 + 2')).toEqual(1); // Addition
        expect(expression('3 * 4')).toEqual(3); // Multiplication
        expect(expression('10 / 2')).toEqual(10); // Division
        expect(expression('10 - 3')).toEqual(7); // Subtraction
        expect(expression('1 + 2 * 3')).toEqual(7); // Operator precedence
        expect(expression('2 * (3 + 4)')).toEqual(14); // Parentheses
    });

    it('should throw errors for invalid expressions', () => {
        expect(() => expression('')).toThrowError('Invalid expression: empty token'); // Empty expression
        expect(() => expression('+')).toThrowError('Invalid expression: empty token'); // Invalid single operator
        expect(() => expression('1 +')).toThrowError('Invalid expression: empty token'); // Incomplete expression
        expect(() => expression('abc + 2')).toThrowError('Invalid token: abc'); // Invalid token
    });
})