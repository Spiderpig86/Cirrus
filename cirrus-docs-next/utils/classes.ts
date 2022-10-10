import { SIZE_MULTIPLIER_PX } from '../constants';

export function GenerateNegativeClassVariants(numbers: number[], isPercent: boolean): [string, string][] {
    const classes = new Map();
    const negatives = new Map();
    for (let number of numbers) {
        if (isPercent) {
            classes.set(`${String(number)}p`, `${number}%`);
            if (number === 0) {
                continue;
            }
            negatives.set(`n${String(number)}p`, `-${number}%`);
        } else {
            classes.set(String(number), `${SIZE_MULTIPLIER_PX * number}px`);
            if (number === 0) {
                continue;
            }
            negatives.set(`n${String(number)}`, `-${SIZE_MULTIPLIER_PX * number}px`);
        }
    }
    return [...classes.entries(), ...negatives.entries()];
}

const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
};
