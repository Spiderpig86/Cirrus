import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Pagination } from '../../../layouts/components/pagination';
import { TableWrapper } from '../../../layouts/components/table-wrapper';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { ExternalLink } from '../../../layouts/components/link';
import { BuildSizeTable } from '../../../layouts/components/build-size-table';

export const DevelopingPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Developing</title>
            </Head>
            <div>
                <section id="developing" className="padtop">
                    <div className="content">
                        <Headline title="Developing on Cirrus" link="#developing" />
                        <div className="divider"></div>
                        <p>
                            One of the best parts of the framework is that it is open source. You can modify and extend
                            different portions of it to suit your needs.
                        </p>
                    </div>
                </section>

                <section id="overview" className="padtop">
                    <div className="content">
                        <Headline title="Overview" link="#overview" size="4" />
                        <div className="divider"></div>
                        <p>
                            The framework builds into two different flavors: <b>core</b> and <b>ext (or full)</b>.
                        </p>
                        <BuildSizeTable />
                        <div className="space"></div>

                        <h6 className="m-0">Core</h6>
                        <p className="m-0">
                            This only contains the essential styles needed to build a project with Cirrus. It consists
                            of these components:
                        </p>
                        <ul>
                            <li>
                                <b>Base</b>
                                <ul>
                                    <li>Animations</li>
                                    <li>Font</li>
                                    <li>Grid</li>
                                    <li>Layout</li>
                                    <li>Media</li>
                                    <li>Modifiers</li>
                                    <li>Spacing</li>
                                </ul>
                            </li>
                            <li>
                                <b>Core Components</b>
                                <ul>
                                    <li>Button</li>
                                    <li>Code</li>
                                    <li>Footer</li>
                                    <li>Forms</li>
                                    <li>Frames</li>
                                    <li>Header</li>
                                    <li>Links</li>
                                    <li>Lists</li>
                                    <li>Progress</li>
                                    <li>Table</li>
                                </ul>
                            </li>
                            <li>
                                <b>Utilities</b>
                                <ul>
                                    <li>Absolute</li>
                                    <li>Clearfix</li>
                                    <li>Display</li>
                                    <li>Flex</li>
                                    <li>Misc</li>
                                    <li>Opacity</li>
                                    <li>Overflow</li>
                                    <li>Position</li>
                                    <li>Round</li>
                                    <li>Shadows</li>
                                    <li>Z-Index</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            In the <code>dist</code> folder, these styles are found in the{' '}
                            <code>cirrus-core.min.css</code> file{' '}
                            <a
                                className="u u-LR"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Spiderpig86/Cirrus/blob/master/dist/cirrus-core.min.css"
                            >
                                here
                            </a>
                            .
                        </p>
                        <div className="space"></div>

                        <h6 className="m-0">Ext</h6>
                        <p className="m-0">
                            This adds an extension to the framework with more styles, layouts, and{' '}
                            <b>pre-built components</b> for quick prototyping.
                        </p>
                        <ul>
                            <li>
                                <b>Everything in Core</b>
                            </li>
                            <li>
                                <b>Extended Components</b>
                                <ul>
                                    <li>Avatar</li>
                                    <li>Breadcrumb</li>
                                    <li>Card</li>
                                    <li>Form Extended</li>
                                    <li>Link Extended</li>
                                    <li>Modal</li>
                                    <li>Pagination</li>
                                    <li>Placeholder</li>
                                    <li>Tabs</li>
                                    <li>Tags</li>
                                    <li>Tiles</li>
                                    <li>Toast</li>
                                    <li>Tooltips</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            All these styles are combined with the <code>core</code> build in the{' '}
                            <code>cirrus.min.css</code> file in the <code>dist</code> folder{' '}
                            <a
                                className="u u-LR"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Spiderpig86/Cirrus/blob/master/dist/cirrus.min.css"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="build">
                    <div className="content">
                        <Headline title="Building from Source" link="#build" size="4" />
                        <div className="divider"></div>
                        <p>Developing your own version of Cirrus is quite simple with these simple steps.</p>
                        <div className="space" />
                        <h5>Get the Source</h5>
                        <p>
                            You can clone the <b>source</b> of the project straight from Github. You can add files or
                            remove them from the <code>/src</code> directory to fit your needs.
                        </p>
                        <div className="row">
                            <a rel="nofollow" href="https://github.com/Spiderpig86/Cirrus" target="_blank">
                                <button className="btn btn-info">Source Code</button>
                            </a>
                        </div>
                        <div className="space" />
                        <h5>Building the Project</h5>
                        <p>
                            Cirrus can be modified to include only components that you will need. Since it is processed
                            with <a href="http://gulpjs.com/">Gulp</a> swapping different components in and out of your
                            distribution build is very simple.
                        </p>
                        <p>Just follow the following steps:</p>
                        <ol style={{ listStyle: 'inside' }}>
                            <li>Open the root directory in your terminal.</li>
                            <li>
                                Remember to run <code>npm install</code> to get all the necessary dependencies.
                            </li>
                            <li>
                                Modify <code>gulpfile.js</code> to add or remove components and then run{' '}
                                <code>gulp minify</code> to build the regular and minified versions.
                            </li>
                            <li>
                                These build files should appear in the <code>/dist</code> directory.
                            </li>
                        </ol>
                        <p>
                            <b>Gulp Commands</b>
                        </p>
                        <ul style={{ listStyle: 'inside' }}>
                            <li>
                                <code>gulp compile</code> - just compile the CSS without minification.
                            </li>
                            <li>
                                <code>gulp minify</code> - compile the CSS with{' '}
                                <a
                                    className="u u-LR"
                                    href="https://github.com/jakubpawlowicz/clean-css#level-2-optimizations"
                                >
                                    level 2 minification
                                </a>
                                .
                            </li>
                            <li>
                                <code>gulp watch</code> - automate compiling and minication.
                            </li>
                        </ul>
                        <div className="space" />
                    </div>
                </section>

                <section className="padtop" id="folder-structure">
                    <div className="content">
                        <Headline title="Folder Structure" link="#folder-structure" size="4" />
                        <div className="divider"></div>

                        <p>The project is organized like this:</p>
                        <CodeBlock
                            code={`├── CODE_OF_CONDUCT.md
├── config
├── CONTRIBUTING.md
├── dist
│   ├── cirrus-all.css
│   ├── cirrus-all.min.css
│   ├── cirrus-core.css
│   ├── cirrus-core.min.css
│   ├── cirrus.css
│   └── cirrus.min.css
├── gulpfile.js
├── img
│   └── CirrusLogo.png
├── LICENSE
├── main.example.scss
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── base
│   │   ├── animations.scss
│   │   ├── default.scss
│   │   ├── font.scss
│   │   ├── grid.scss
│   │   ├── _index.scss
│   │   ├── layout.scss
│   │   ├── media.scss
│   │   ├── modifiers.scss
│   │   └── spacing.scss
│   ├── builds
│   │   ├── core.scss
│   │   └── ext.scss
│   ├── cirrus-all.scss
│   ├── cirrus-core.scss
│   ├── cirrus-ext.scss
│   ├── components
│   │   ├── avatar.scss
│   │   ├── breadcrumb.scss
│   │   ├── button.scss
│   │   ├── card.scss
│   │   ├── code.scss
│   │   ├── footer.scss
│   │   ├── form-ext.scss
│   │   ├── forms.scss
│   │   ├── frames.scss
│   │   ├── header.scss
│   │   ├── link-ext.scss
│   │   ├── links.scss
│   │   ├── lists.scss
│   │   ├── modal.scss
│   │   ├── pagination.scss
│   │   ├── placeholder.scss
│   │   ├── progress.scss
│   │   ├── table.scss
│   │   ├── tabs.scss
│   │   ├── tags.scss
│   │   ├── tiles.scss
│   │   ├── toast.scss
│   │   └── tooltips.scss
│   ├── internal
│   │   ├── _api.scss
│   │   ├── _config.scss
│   │   ├── _constants.scss
│   │   ├── _flags.scss
│   │   ├── _functions.scss
│   │   ├── _index.scss
│   │   ├── _mixins.scss
│   │   ├── _selectors.scss
│   │   ├── _size.scss
│   │   └── _theme.scss
│   └── utils
│       ├── absolute.scss
│       ├── clearfix.scss
│       ├── display.scss
│       ├── flex.scss
│       ├── misc.scss
│       ├── opacity.scss
│       ├── overflow.scss
│       ├── position.scss
│       ├── round.scss
│       ├── shadows.scss
│       └── zindex.scss
└── tests
    ├── internal
    │   ├── _api.spec.scss
    │   ├── _config.spec.scss
    │   ├── _functions.spec.scss
    │   ├── _mixins.spec.scss
    │   └── _size.spec.scss
    ├── scss.spec.js
    └── test_base.scss

11 directories, 80 files`}
                            language="text"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Browser Support',
                        link: './support',
                    }}
                    nextLink={{
                        name: 'Configuration',
                        link: './configuration',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(DevelopingPage);
