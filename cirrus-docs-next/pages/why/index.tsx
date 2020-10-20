import React from 'react';
import { withLayout } from '@moxy/next-layout';
import Link from 'next/link';
import { ResponsiveBar } from '@nivo/bar';

import { TableOfContents } from '../../layouts/components/toc';
import { Headline } from '../../layouts/components/headline';
import { toc } from './toc';
import { CodeBlock } from '../../layouts/components/codeblock';
import { DefaultLayout } from '../../layouts/default';

export const WhyPage: React.FC<any> = (props) => {
    // TODO: Move to constants
    const data = [
        {
            id: 'Cirrus',
            memory: 21.4,
            color: '#f03d4d',
        },
        {
            id: 'Bootstrap',
            memory: 23.5,
            color: '#7952b3',
        },
        {
            id: 'FlatUI',
            memory: 24.1,
            color: '#8fd3ff',
        },
        {
            id: 'Bulma',
            memory: 26.0,
            color: '#01d1b2',
        },
        {
            id: 'Material',
            memory: 32.5,
            color: '#9c27b0',
        },
        {
            id: 'Semantic UI',
            memory: 101,
            color: '#35bdb2',
        },
    ];

    return (
        <main className="page-layout">
            <div>
                <section id="why" className="padtop">
                    <div className="content">
                        <Headline title="Why Cirrus?" link="#why" />
                        <div className="divider"></div>
                        <blockquote>
                            <i>It ain't much, but it's honest work. — Some guy somewhere on a farm.</i>
                        </blockquote>
                        <p>Here are some reasons you may want to use Cirrus.</p>
                    </div>
                </section>

                <section id="lightweight" className="padtop">
                    <div className="content">
                        <Headline title="Lightweight" link="#lightweight" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes with lots of functionality in a small package. Coming in at{' '}
                            <b>21.4 KB gzipped</b>, page loads are fast and data caps are not breached.
                        </p>

                        {/* TODO MOVE TO NEW FILE */}
                        <div
                            style={{
                                height: '400px',
                            }}
                        >
                            <ResponsiveBar
                                data={data}
                                keys={['memory']}
                                indexBy="id"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.3}
                                groupMode="grouped"
                                layout="vertical"
                                colors={(data) => data.data.color}
                                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Framework',
                                    legendPosition: 'middle',
                                    legendOffset: 32,
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'KB',
                                    legendPosition: 'middle',
                                    legendOffset: -50,
                                }}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor="#fff"
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                            />
                        </div>
                    </div>
                </section>

                <section id="modular" className="padtop">
                    <div className="content">
                        <Headline title="Modular" link="#modular" />
                        <div className="divider"></div>
                        <p>
                            As of <b>0.6.0</b>, Cirrus was re-engineered from the ground up to use Sass. This means you
                            can just import the modules that you need in your Sass files.
                        </p>

                        <CodeBlock
                            code={`@import '../node_modules/cirrus-ui/src/core/button.scss';

.my-button {
    @extend .btn;
}`}
                            language="scss"
                        />

                        <p className="mt-3">
                            Each file contains classes that only correspond to a component or functionality. For
                            instance, all the tag related classes can be found inside <code>tag.scss</code>. This
                            modular design makes it easier for anyone who wants to make modifications to the framework
                            and rebuild their own version of it.
                        </p>
                    </div>
                </section>

                <section id="prototype" className="padtop">
                    <div className="content">
                        <Headline title="Rapid Prototyping" link="#why" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes with many different classes that help you quickly construct beautiful looking
                            components quickly without having to come up with your own design.
                        </p>

                        <div className="space"></div>
                        <div className="frame mb-3" style={{ height: '30rem' }}>
                            <div className="frame__header">
                                <div className="avatar">
                                    <img src="http://i.imgur.com/sbKJVxr.png" />
                                </div>
                                <p className="u-text-center frame__title">John Doe</p>
                                <p className="u-text-center frame__subtitle">Former youngest person on Earth</p>
                                <div className="tab-container tabs-fill">
                                    <ul>
                                        <li className="tab-item">
                                            <a>Favorites</a>
                                        </li>
                                        <li className="tab-item selected">
                                            <a>Profile</a>
                                        </li>
                                        <li className="tab-item">
                                            <a>Pins</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="frame__body">
                                <div className="tile level p-1  ">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-twitter" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Twitter</p>
                                        <p className="tile__subtitle">@johndoe</p>
                                    </div>
                                    <div className="tile__buttons">
                                        <a href="!#" className="link-btn">
                                            <span className="icon">
                                                <i className="fa fa-wrapper fa-pencil small" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-instagram" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Instagram</p>
                                        <p className="tile__subtitle">@johndoe</p>
                                    </div>
                                </div>

                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-envelope-o" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Email</p>
                                        <p className="tile__subtitle">johndoe@github.com</p>
                                    </div>
                                </div>

                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-map-marker" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Location</p>
                                        <p className="tile__subtitle">Toronto, Ontario</p>
                                    </div>
                                </div>
                            </div>
                            <div className="frame__footer"></div>
                        </div>
                        <CodeBlock
                            code={`<div class="frame" style="height: 30rem;">
    <div class="frame__header">
        <div class="avatar"><img src="http://i.imgur.com/sbKJVxr.png"/></div>
        <p class="u-text-center frame__title">John Doe</p>
        <p class="u-text-center frame__subtitle">Former youngest person on Earth</p>
        <div class="tab-container tabs-fill">
            <ul>
                <li class="tab-item"><a>Favorites</a></li>
                <li class="tab-item selected"><a>Profile</a></li>
                <li class="tab-item"><a>Pins</a></li>
            </ul>
        </div>
    </div>
    <div class="frame__body">
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-twitter" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Twitter</p>
                <p class="tile__subtitle">@johndoe</p>
            </div>
            <div class="tile__buttons"><a href="!#" class="link-btn"><span class="icon"><i class="fa fa-wrapper fa-pencil small" aria-hidden="true"></i></span></a></div>
        </div>
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-instagram" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Instagram</p>
                <p class="tile__subtitle">@johndoe</p>
            </div>
        </div>
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-envelope-o" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Email</p>
                <p class="tile__subtitle">johndoe@github.com</p>
            </div>
        </div>
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-map-marker" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Location</p>
                <p class="tile__subtitle">Toronto, Ontario</p>
            </div>
        </div>
    </div>
    <div class="frame__footer"></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section id="control" className="padtop">
                    <div className="content">
                        <Headline title="Granular Control" link="#why" />
                        <div className="divider"></div>
                        <p>Cirrus now ships with many utility classes to get the exact look you want.</p>

                        <div className="space"></div>

                        <div className="u-flex u-justify-center u-items-center bg-orange-200">
                            <div className="my-2">💎 Centered.</div>
                        </div>

                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="u-flex u-justify-center u-items-center bg-orange-200">
    <div class="my-2">💎 Centered.</div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-next">
                                <Link href="../playground">
                                    <a className="u-block">
                                        <p className="pagination-item-subtitle">Next</p>
                                        <h5 className="font-alt font-light m-0">Playground</h5>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(WhyPage);