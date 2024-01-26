// Scss test shim file
const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

const testPath = `tests/**/*.spec.scss`;

describe('Sass', () => {
    const testFiles = glob.sync(path.resolve(process.cwd(), testPath).replace(/\\/g, '/'));

    // Run on each file with describe() and it() functions
    // Update to v7 syntax https://github.com/oddbird/true/releases/tag/v7.0.0
    testFiles.forEach((file) => {
        sassTrue.runSass({ describe, it }, file, { loadPaths: ['node_modules'] })
    });
});
