// Scss test shim file
const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

const testPath = `tests/**/*.spec.scss`;

describe('Sass', () => {
    const testFiles = glob.sync(path.resolve(process.cwd(), testPath));

    // Run on each file with describe() and it() functions
    testFiles.forEach((file) => sassTrue.runSass({ file: file, includePaths: ['node_modules'] }, { describe, it }));
});
