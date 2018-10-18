import {multiply} from 'index';

describe('multiply', () => {
    it('should calculate the result with an expected results', () => {
        expect(multiply("226553150", "1023473145")).toBe("231871064940156750");
    });
});