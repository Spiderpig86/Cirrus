import React from 'react';
import { withLayout } from '@moxy/next-layout';
import Head from 'next/head';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Tag } from '../../../layouts/components/tag';

export const BreadcrumbPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Breadcrumbs</title>
            </Head>
            <div>
                <section className="padtop" id="breadcrumbs">
                    <div className="content">
                        <Headline title="Breadcrumbs" link="#breadcrumbs" />
                        <div className="divider"></div>

                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `Added`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />

                        <p>
                            A <code>breadcrumb</code> is a component used to create a sense of hierarchy when navigating
                            a website.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>
                        <p>
                            The component only comes with a few classes. The main <code>breadcrumb</code> class is used
                            to style the entire component and each navigation item is wrapped using the{' '}
                            <code>breadcrumb__item</code> class.
                        </p>
                        <p>With a few lines of HTML, we can get the default breadcrumb which looks like this:</p>

                        <div className="space"></div>

                        <ul className="breadcrumb">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />
                    </div>
                </section>

                <section className="padtop" id="positioning">
                    <div className="content">
                        <Headline title="Positioning" link="#positioning" size="4" />
                        <div className="divider"></div>

                        <p>
                            By default, breadcrumbs are left-justified. You can also use <code>breadcrumb--center</code>{' '}
                            and <code>breadcrumb--right</code> to align the component to the center and right
                            respectively.
                        </p>

                        <div className="space space--lg"></div>

                        <h6>Center</h6>
                        <ul className="breadcrumb breadcrumb--center">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb breadcrumb--center">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />

                        <div className="space space--lg"></div>

                        <h6>Right</h6>
                        <ul className="breadcrumb breadcrumb--right">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb breadcrumb--right">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />
                    </div>
                </section>

                <section className="padtop" id="separators">
                    <div className="content">
                        <Headline title="Separators" link="#separators" size="4" />
                        <div className="divider"></div>

                        <p>
                            You can choose <b>4 alternative</b> separators for your breadcrumb.
                        </p>
                        <div className="space"></div>

                        <h6>Arrow</h6>
                        <ul className="breadcrumb breadcrumb--arrow">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb breadcrumb--arrow">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />
                        <div className="space space--lg"></div>

                        <h6>Bullet</h6>
                        <ul className="breadcrumb breadcrumb--bullet">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb breadcrumb--bullet">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />
                        <div className="space space--lg"></div>

                        <h6>Dot</h6>
                        <ul className="breadcrumb breadcrumb--dot">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb breadcrumb--dot">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />
                        <div className="space space--lg"></div>

                        <h6>Greater Than</h6>
                        <ul className="breadcrumb breadcrumb--gt">
                            <li className="breadcrumb__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="#">Change Avatar</a>
                            </li>
                        </ul>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<ul class="breadcrumb breadcrumb--gt">
    <li class="breadcrumb__item">
        <a href="#">Home</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Settings</a>
    </li>
    <li class="breadcrumb__item">
        <a href="#">Change Avatar</a>
    </li>
</ul>`}
                            language={'htmlbars'}
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Avatar', link: './avatar' }}
                    nextLink={{ name: 'Cards', link: './cards' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(BreadcrumbPage);
