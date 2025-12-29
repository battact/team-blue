import { add, greet } from '../index';

describe('index', () => {
    describe('add', () => {
        it('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        it('should add two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        it('should add a positive and negative number', () => {
            expect(add(5, -3)).toBe(2);
            expect(add(-5, 3)).toBe(-2);
        });

        it('should return the same number when adding zero', () => {
            expect(add(5, 0)).toBe(5);
            expect(add(0, 5)).toBe(5);
            expect(add(0, 0)).toBe(0);
        });

        it('should handle decimal numbers', () => {
            expect(add(1.5, 2.5)).toBe(4);
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        });

        it('should handle large numbers', () => {
            expect(add(1000000, 2000000)).toBe(3000000);
        });

        it('should handle very small numbers', () => {
            expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
        });
    });

    describe('greet', () => {
        it('should greet a person by name', () => {
            expect(greet('World')).toBe('Hello, World!');
        });

        it('should greet with different names', () => {
            expect(greet('Alice')).toBe('Hello, Alice!');
            expect(greet('Bob')).toBe('Hello, Bob!');
        });

        it('should handle empty string', () => {
            expect(greet('')).toBe('Hello, !');
        });

        it('should handle names with spaces', () => {
            expect(greet('John Doe')).toBe('Hello, John Doe!');
        });

        it('should handle special characters in name', () => {
            expect(greet("O'Brien")).toBe("Hello, O'Brien!");
            expect(greet('José')).toBe('Hello, José!');
        });

        it('should handle unicode characters', () => {
            expect(greet('田中')).toBe('Hello, 田中!');
            expect(greet('🎉')).toBe('Hello, 🎉!');
        });

        it('should preserve whitespace in name', () => {
            expect(greet('  Alice  ')).toBe('Hello,   Alice  !');
        });
    });
});
