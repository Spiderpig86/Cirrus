import prop from './package.json' assert { type: 'json' };
import minify from 'gulp-clean-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import gulp from 'gulp';
import concat from 'gulp-concat';
import header from 'gulp-header';
import sizereport from 'gulp-sizereport';
import gzip from 'gulp-gzip';
import size from 'gulp-size';
const head =
    '/*\r\n* Cirrus ' +
    prop.version +
    `\r\n* Stanley Lim, Copyright ${new Date().getFullYear()}\r\n* https://cirrus-ui.com\r\n*/\r\n`;

const environment = {
    isCi: process.env.CI ?? false, // Github actions default variable is always set to true
};

generateGulpBuild(`ext`, `src/cirrus-ext.scss`, `cirrus`, `./dist/`);
generateGulpBuild(`core`, `src/cirrus-core.scss`, `cirrus-core`, `./dist/`);

// source file name
// file name
function generateGulpBuild(taskName, sassFilePath, outputName, distDir) {
    gulp.task(taskName, () => {
        return gulp
            .src([sassFilePath])
            .pipe(
                sass({
                    includePaths: ['./node_modules'],
                })
            )
            .on('error', sass.logError)
            .pipe(
                sass.sync().on('error', function (err) {
                    sass.logError.call(this, err);

                    // Fail job if in CI
                    if (environment.isCi) {
                        throw err;
                    }
                })
            )
            .pipe(concat(`${outputName}.css`))
            .pipe(header(head))
            .pipe(size())
            .pipe(gulp.dest(distDir))
            .on('error', (err) => {
                console.error(err);
                process.exit(1);
            });
    });

    gulp.task(
        `minify-${taskName}`,
        gulp.series(taskName, () => {
            return gulp
                .src([`${distDir}${outputName}.css`])
                .pipe(
                    minify(
                        {
                            level: {
                                1: {
                                    all: true,
                                    normalizeUrls: false,
                                },
                                2: {
                                    all: false,
                                    removeDuplicateRules: true,
                                    reduceNonAdjacentRules: true,
                                    removeDuplicateFontRules: true,
                                    removeDuplicateMediaBlocks: true,
                                    mergeAdjacentRules: true,
                                    mergeIntoShorthands: true,
                                    mergeMedia: true,
                                    mergeNonAdjacentRules: true,
                                    mergeSemantically: false,
                                    removeEmpty: true,
                                },
                            },
                        },
                        (details) => {
                            console.log('FULL');
                            console.log(details.name + ': ' + details.stats.originalSize);
                            console.log(`${outputName}.min.css ${details.stats.minifiedSize}`);
                        }
                    )
                )
                .pipe(header(head))
                .pipe(size())
                .pipe(concat(`${outputName}.min.css`))
                .pipe(gulp.dest(distDir))
                .on('error', (err) => {
                    console.error(`Error encountered for task ${taskName}. Failing.`);
                    process.exit(1);
                });
        })
    );

    // Create Gzipped build
    gulp.task(
        `gzip-${taskName}`,
        gulp.series(taskName, `minify-${taskName}`, () => {
            return gulp
                .src([`${distDir}${outputName}.min.css`])
                .pipe(gzip())
                .pipe(
                    sizereport({
                        gzip: true,
                        total: false,
                    })
                )
                .pipe(gulp.dest(distDir))
                .on('error', (err) => {
                    console.error(`Error encountered for task ${taskName}. Failing.`);
                    process.exit(1);
                });
        })
    );
}

gulp.task('watch', () => gulp.watch('./src/**/*.scss', gulp.parallel('minify-ext', 'minify-core')));

gulp.task('default', gulp.parallel('minify-ext', 'minify-core'));

gulp.task('gzip', gulp.parallel('gzip-ext', 'gzip-core'));
