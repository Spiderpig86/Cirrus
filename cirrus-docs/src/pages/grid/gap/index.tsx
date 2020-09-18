import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const GridGapPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="gap">
                    <div className="content">
                        <Headline title="Grid Gap" link="#gap" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.5.5</div>
                        </span>

                        <p>
                            These are utility classes used to add variable spacing between elements inside the{' '}
                            <code>grid</code> layout.
                        </p>
                        <p>
                            Unlike the utility classes <code>grid-cols-*</code> and <code>grid-r-*</code> and their
                            other variants, the '*' in <code>grid-gap-*</code> cannot be modified. The '*' is strictly
                            from 1 through 12 inclusive.
                        </p>

                        <p>Below is an example of usages of the classes. Notice that the <code>grid-gap-*</code> is applied on the <code>grid</code> itself.</p>

                        <div className="grid grid-cols-6 grid-gap-8">
                            <div className="grid-c-2 py-4 bg-green-200"></div>
                            <div className="grid-c-2 py-4 bg-green-200"></div>
                            <div className="grid-c-2 py-4 bg-green-200"></div>
                        </div>
                        <div className="grid grid-cols-6 grid-gap-6">
                            <div className="grid-c-2 py-4 bg-green-400"></div>
                            <div className="grid-c-2 py-4 bg-green-400"></div>
                            <div className="grid-c-2 py-4 bg-green-400"></div>
                        </div>
                        <div className="grid grid-cols-6 grid-gap-4">
                            <div className="grid-c-2 py-4 bg-green-600"></div>
                            <div className="grid-c-2 py-4 bg-green-600"></div>
                            <div className="grid-c-2 py-4 bg-green-600"></div>
                        </div>
                        <div className="grid grid-cols-6 grid-gap-2">
                            <div className="grid-c-2 py-4 bg-green-800"></div>
                            <div className="grid-c-2 py-4 bg-green-800"></div>
                            <div className="grid-c-2 py-4 bg-green-800"></div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="grid grid-cols-6 grid-gap-8">
    <div class="grid-c-2 py-4 bg-green-200"></div>
    <div class="grid-c-2 py-4 bg-green-200"></div>
    <div class="grid-c-2 py-4 bg-green-200"></div>
</div>
<div class="grid grid-cols-6 grid-gap-6">
    <div class="grid-c-2 py-4 bg-green-400"></div>
    <div class="grid-c-2 py-4 bg-green-400"></div>
    <div class="grid-c-2 py-4 bg-green-400"></div>
</div>
<div class="grid grid-cols-6 grid-gap-4">
    <div class="grid-c-2 py-4 bg-green-600"></div>
    <div class="grid-c-2 py-4 bg-green-600"></div>
    <div class="grid-c-2 py-4 bg-green-600"></div>
</div>
<div class="grid grid-cols-6 grid-gap-2">
    <div class="grid-c-2 py-4 bg-green-800"></div>
    <div class="grid-c-2 py-4 bg-green-800"></div>
    <div class="grid-c-2 py-4 bg-green-800"></div>
</div>`} language='htmlbars' />
                    </div>
                </section>
                <Pagination prevLink={{ name: 'Grid Span', link: './span' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
