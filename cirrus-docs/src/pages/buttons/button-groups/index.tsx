import React from 'react';
import { Link } from 'react-router-dom';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ExternalLink } from '../../../layouts/components/link';
import { toc } from './toc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonGroupsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="button-groups">
                    <div className="content">
                        <Headline title="Button Groups" link="#button-groups" />
                        <div className="divider"></div>
                        <p>
                            Button groups are designed to group buttons of similar actions or properties together in a
                            seemless fashion. Buttons are placed adjacent to each other and buttons at each of the ends
                            are rounded off respectively.
                        </p>

                        <div className="btn-group mb-3">
                            <button className="btn-primary">First Button</button>
                            <button className="btn-primary">Second Button</button>
                            <button className="btn-primary">Third Button</button>
                        </div>

                        <CodeBlock
                            code={`<div className="btn-group">
    <button className="btn-primary">First Button</button>
    <button className="btn-primary">Second Button</button>
    <button className="btn-primary">Third Button</button>
</div>`}
                            language="htmlbars"
                        />

                        <p>
                            To make the buttons in the <code>btn-group</code> fill its parent container, add the{' '}
                            <code>btn-group-fill</code> class to the <code>btn-group</code>.
                        </p>

                        <div className="btn-group btn-group-fill mb-3">
                            <button className="bg-orange-200 text-orange-700">Edge</button>
                            <button className="bg-orange-200 text-orange-700">To</button>
                            <button className="bg-orange-200 text-orange-700">Edge</button>
                        </div>

                        <CodeBlock
                            code={`<div className="btn-group btn-group-fill">
    <button className="bg-orange-200 text-orange-700">Edge</button>
    <button className="bg-orange-200 text-orange-700">To</button>
    <button className="bg-orange-200 text-orange-700">Edge</button>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Basics ', link: './basics' }}
                    nextLink={{ name: 'Glyphs', link: './glyphs' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
