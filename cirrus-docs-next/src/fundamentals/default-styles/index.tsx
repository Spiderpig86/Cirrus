import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const DefaultStylesPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Default Styles</title>
            </Head>
            <div>
                <section className="padtop" id="default-styles">
                    <div className="content">
                        <Headline title="Default Styles" link="#default-styles" />
                        <div className="divider"></div>

                        <p>
                            The base of Cirrus's styling is a simple CSS reset that ensures every page will start off
                            with a clean slate before other styles are applied. Think of it as Cirrus erasing the chalk
                            board before writing on it.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="reset">
                    <div className="content">
                        <Headline title="Reset Styles" link="#reset" size="4" />
                        <div className="divider"></div>

                        <p>
                            The reset styles from Cirrus have been carefully chosen to create the environment that is
                            best for Cirrus to work with. The choices are somewat subjective and should be modified to fit your own requirements.
                        </p>
                        <p>Please read the comments below to understand what each reset style is used for.</p>

                        <CodeBlock
                            classes={`max-h-none`}
                            code={`/* Box Sizing */
*,
*::before,
*::after {
    /* Prevent setting borders from increasing the size of an element */
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
}

/* Remove default margin and padding */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

/* Allow % styles to work on page */
html,
body {
    border: none;
    height: 100%;
}

/* Nunito Sans for the font */
body {
    letter-spacing: 0.01rem;
    line-height: 1.8; /* Globally adjust line height */
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: var(--cirrus-fg);
}

/* Remove bullets from unordered lists */
ul {
    list-style: none;
}

/* Setting up embedded content */
audio,
canvas,
iframe,
img,
embed,
object,
svg,
video {
    display: block;
    max-width: 100%;
    height: auto;
}

iframe {
    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Page sections set to block */
article,
aside,
figure,
footer,
header,
hgroup,
section {
    display: block;
}

// Inputs must inherit font
button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
}

/* Base styling for labels */
label {
    display: inline-block;
    margin: 0.25rem 0;
}

/* Base styling for fieldsets */
fieldset {
    padding: 1rem;

    legend {
        font-weight: bold;
    }
}

/* Hidden elements must not show */
[hidden] {
    display: none !important;
}

/* Selection Color */
::selection {
    background-color: var(--cirrus-select-bg);
}

/* When focusing any element */
:focus {
    box-shadow: var(--cirrus-focus-size) var(--cirrus-focus-color);
    outline: none;
}

/* Remove all animations based on preference */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}`}
                            language="scss"
                        />
                    </div>
                </section>

                <section className="padtop" id="disabling">
                    <div className="content">
                        <Headline title="Disabling Default Styles" link="#disabling" size="4" />
                        <div className="divider"></div>

                        <p>If you would like to disable default styles from being used, you can add them to the <code>excludes</code> lists.</p>

                        <CodeBlock code={`@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            'RESET'
        )
    )
);`} language="scss" />
                    </div>
                </section>

                <Pagination
                    nextLink={{
                        name: 'Colors',
                        link: './colors',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(DefaultStylesPage);
