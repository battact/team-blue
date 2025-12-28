import { add, greet } from './index';

describe('add function', () => {
    it('should add two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
        expect(add(-1, -1)).toBe(-2);
    });

    it('should handle zero', () => {
        expect(add(0, 5)).toBe(5);
    });
});

describe('greet function', () => {
    it('should greet a person by name', () => {
        expect(greet('Alice')).toBe('Hello, Alice!');
    });

    it('should work with empty string', () => {
        expect(greet('')).toBe('Hello, !');
    });
});