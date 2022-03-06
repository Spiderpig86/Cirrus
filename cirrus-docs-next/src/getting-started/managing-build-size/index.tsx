import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { Tag } from '../../../layouts/components/tag';
import { BuildSizeTable } from '../../../layouts/components/build-size-table';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ExternalLink, InternalLink } from '../../../layouts/components/link';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const ConfigurationPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Managing Build Size</title>
            </Head>
            <div>
                <section id="managing-build-size" className="padtop">
                    <div className="content">
                        <Headline title="Managing Build Size" link="#managing-build-size" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />
                        <p>
                            Since Cirrus is built with customization in mind, it makes sense for the framework to allow
                            features to be enabled, disabled, or modified. One of the pain point for some CSS frameworks
                            is its size. Cirrus by no means is a hefty CSS framework, but reduction in file size would
                            help improve page speeds on slower connections and smaller devices.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="file-size">
                    <div className="content">
                        <Headline title="File Size" size="4" link="#file-size" />
                        <div className="divider"></div>
                        <p>As of now, the different builds of Cirrus clock in at the following sizes:</p>
                        <BuildSizeTable />

                        <p>
                            Cirrus comes in 3 preset builds that cover the requirements of most users to balance the
                            tradeoffs between build size and feature set. You can read more about the differences
                            between these builds in the{' '}
                            <InternalLink url="/getting-started/developing">development guide</InternalLink>.
                        </p>

                        <p>
                            Some developers, however, may require a granular way to toggle which classes are generated
                            and which are not to remove as much unused classes as possible. There are virtually hundreds
                            of ways to customize your build of Cirrus through the config file. The docs below goes over
                            all the ways you can manage your file size when building Cirrus for your project.
                        </p>

                        <p>
                            In short,{' '}
                            <b>it is recommended to remove as many unused styles as possible for optimal performance</b>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="purge-css">
                    <div className="content">
                        <Headline title="Using Purge CSS" size="4" link="#purge-css" />
                        <div className="divider"></div>
                        <p>
                            For a quick way to drastically reduce the amount of unused CSS classes, you can use
                            third-party tools like <b>PurgeCSS</b> to tree-shake unused Cirrus styles in your project.
                            Applying minification on top of the CSS file after purging would further decrease the file
                            size. Out of all the methods described on this page, this would yield the smallest file
                            size.
                        </p>
                        <p>
                            To find out how to integrate this into Cirrus and your project, check out the{' '}
                            <ExternalLink url="https://purgecss.com/">PurgeCSS docs</ExternalLink>.
                        </p>
                        <div className="space"></div>

                        <h6 className="font-alt font-normal">Note Before Use</h6>
                        <p>
                            If you are using front-end frameworks like React, Angular, Vue, etc., <b>PurgeCSS</b> will
                            not dynamically analyze and evaluate your template code to determine which classes to keep
                            and which to toss out. PurgeCSS simply checks to see if the class name appears in it its
                            entirety within the file. If it does, it will skip removing the class.
                        </p>
                        <p>
                            What this means is that if you do dynamically generate your class names,{' '}
                            <b>
                                make sure that all class names you intend to use are in its whole form and not broken
                                up/concatenated
                            </b>
                            . PurgeCSS won't be able to match for those class names and will unintentionally purge them
                            from your stylesheets.
                        </p>
                        <div className="space"></div>

                        <p className="lead font-bold">❌ Do not fragment the class names.</p>
                        <CodeBlock
                            code={`<div className={\`text-\${isError ? 'danger' : 'success'}\`}>...</div>`}
                            language="jsx"
                        />
                        <div className="space"></div>

                        <p className="lead font-bold">✅ Write class names in its entirety.</p>
                        <CodeBlock
                            code={`<div className={isError ? 'text-danger' : 'text-success'}>...</div>`}
                            language="jsx"
                        />
                    </div>
                </section>

                <section className="padtop" id="disabling-features">
                    <div className="content">
                        <Headline title="Disabling Features" size="4" link="#disabling-features" />
                        <div className="divider"></div>

                        <p>
                            This is perhaps one of the quickest ways to reduce your Cirrus build size. Cirrus comes with
                            different configurations with different features enabled, but you can optimize even further
                            by selecting the ones you know you will use. All of the available configuration can be
                            easily found in the <code>_config.scss</code> file.
                        </p>
                        <p>
                            In your project, import the Cirrus library and specify the enabled and disabled features
                            similar to what's shown below:
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            'ABSOLUTES',
            'OVERFLOW',
            'POSITION',
        ),
    ),
);`}
                            language="scss"
                        />

                        <p>
                            Currently, every type of class found inside the <code>components</code> and{' '}
                            <code>utils</code> folders in the{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/tree/master/src">
                                repository
                            </ExternalLink>{' '}
                            can be used inside the <code>includes</code> and <code>excludes</code> lists. The only
                            exception is the letter spacing util classes found inside <code>base/fonts.scss</code> which
                            can also be used in these lists.
                        </p>
                        <p>
                            Below is how reducing the number of enabled features will affect build size (with all
                            viewports enabled).
                        </p>
                        <table className="table bordered">
                            <tr>
                                <th>Disabled Features</th>
                                <th>Original Size</th>
                                <th>Minified Size</th>
                            </tr>
                            <tr>
                                <td>Components Only</td>
                                <td>253.31kB</td>
                                <td>136.58kB</td>
                            </tr>
                            <tr>
                                <td>Utilities Only</td>
                                <td>294.58kB</td>
                                <td>186.07kB</td>
                            </tr>
                            <tr>
                                <td>Components and Utilities</td>
                                <td>184.00kB</td>
                                <td>101.65kB</td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="disabling-viewport-variants">
                    <div className="content">
                        <Headline title="Disabling Viewport Variants" size="4" link="#disabling-viewport-variants" />
                        <div className="divider"></div>

                        <p>
                            Some classes support viewport variants where it behaves differently depending on the current
                            screen size. This
                        </p>
                        <p>
                            In your project, import the Cirrus library and specify the enabled and disabled viewports
                            similar to what's shown below:
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        viewports: (
            CLEARFIX: false,
            DISPLAY: false,
            FLEX: false,
        )
    ),
);`}
                            language="scss"
                        />

                        <p>
                            All supported viewport flags can be found in the <code>cirrus-all</code> build configuration{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/master/src/cirrus-all.scss#L4">
                                here
                            </ExternalLink>
                            .
                        </p>
                        <p>Below is how reducing the number of enabled viewport variants will affect build size.</p>
                        <table className="table bordered">
                            <tr>
                                <th>Viewport Configuration</th>
                                <th>Original Size</th>
                                <th>Minified Size</th>
                            </tr>
                            <tr>
                                <td>None Disabled</td>
                                <td>363.75kB</td>
                                <td>220.79kB</td>
                            </tr>
                            <tr>
                                <td>All Disabled</td>
                                <td>189.86kB</td>
                                <td>139.09kB</td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="limiting-color-palette">
                    <div className="content">
                        <Headline title="Limiting Color Palette" size="4" link="#limiting-color-palette" />
                        <div className="divider"></div>

                        <p>
                            Some classes support viewport variants where it behaves differently depending on the current
                            screen size. This
                        </p>
                        <p>
                            In your project, import the Cirrus library and specify the enabled and disabled viewports
                            similar to what's shown below:
                        </p>

                        <CodeBlock
                            code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        colors: (
            extended: (
                'teal': null,
                'indigo': null,
            )
        )
    ),
);`}
                            language="scss"
                        />

                        <p>
                            All supported viewport flags can be found in the <code>cirrus-all</code> build configuration{' '}
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/blob/master/src/cirrus-all.scss#L4">
                                here
                            </ExternalLink>
                            .
                        </p>
                        <p>Below is how reducing the number of colors will affect build size (with all viewports and features enabled). Note that there are 12 semantic colors and 91 extended colors.</p>
                        <table className="table bordered">
                            <tr>
                                <th>Number of Color Classes</th>
                                <th>Original Size</th>
                                <th>Minified Size</th>
                            </tr>
                            <tr>
                                <td>112 <i>(Default)</i></td>
                                <td>363.75kB</td>
                                <td>220.79kB</td>
                            </tr>
                            <tr>
                                <td>71</td>
                                <td>352.93kB</td>
                                <td>211.50kB</td>
                            </tr>
                            <tr>
                                <td>31</td>
                                <td>344.16kB</td>
                                <td>204.98kB</td>
                            </tr>
                        </table>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Configuration',
                        link: './developing',
                    }}
                    nextLink={{
                        name: 'Start Guide',
                        link: './start-guide',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ConfigurationPage);
