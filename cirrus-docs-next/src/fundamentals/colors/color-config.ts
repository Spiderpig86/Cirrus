import { Swatch } from './display';

const v1Colors = [
    ['primary', 'f03d4d'],
    ['light', 'f6f9fc'],
    ['dark', '363636'],
    ['link', '5e5cc7'],
    ['link-dark', '4643e2'],
    ['info', '2972fa'],
    ['success', '0dd157'],
    ['warning', 'fab633'],
    ['danger', 'fb4143'],
];

export const v2Colors = ['pink', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'gray'];

export const v1: Swatch[] = v1Colors.map((color: string[]) => {
    return {
        name: color[0],
        class: `bg-${color[0]}`,
        hex: color[1],
    };
});

export const v2: Map<string, Swatch[]> = new Map([
    ['pink', generateV2Swatches('pink', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['red', generateV2Swatches('red', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['orange', generateV2Swatches('orange', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['yellow', generateV2Swatches('yellow', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['green', generateV2Swatches('green', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['teal', generateV2Swatches('teal', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['blue', generateV2Swatches('blue', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['indigo', generateV2Swatches('indigo', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['purple', generateV2Swatches('purple', ['100', '200', '300', '400', '500', '600', '700', '800', '900'])],
    ['gray', generateV2Swatches('gray', ['000', '100', '200', '300', '400', '500', '600', '700', '800', '900'])],
]);

function generateV2Swatches(name: string, levels: string[]): Swatch[] {
    return levels.map((level: string) => {
        return {
            name: name + '-' + level,
            class: `bg-${name}-${level}`,
        };
    });
}
