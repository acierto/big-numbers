export const multiply = (x, y) => {
    if ((x | 0) === 0 || (y | 0) === 0) {
        return '0';
    }

    const a = String(x).split('').reverse();
    const b = String(y).split('').reverse();
    const result = [];

    for (let i = 0; a[i] >= 0; i++) {
        for (let j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};