import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const TilesPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Tiles</title>
            </Head>
            <div>
                <section className="padtop" id="tiles">
                    <div className="content">
                        <Headline title="Tiles" link="#tiles" />
                        <div className="divider"></div>
                        <p>
                            Tiles are the flexbox alternative to cards that tile child elements horizontally and more
                            closely resemble horizontal cards in Android. These get displayed in{' '}
                            <code>card card--slide-up</code> to show an avatar, text, or buttons.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>
                        <p>
                            This is a standard <code>tile</code> with buttons located at the bottom of{' '}
                            <code>tile__container</code>.
                        </p>
                        <div className="tile">
                            <div className="tile__icon">
                                <figure className="avatar">
                                    <img alt="avatar" src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                </figure>
                            </div>
                            <div className="tile__container">
                                <p className="tile__title m-0">
                                    Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                                </p>
                                <p className="tile__subtitle m-0">
                                    Robert shared: 'Stark Industries is proud to announce its brand new suit.'
                                </p>
                                <span className="info">23 minutes ago</span>
                                <div className="tile__buttons m-0">
                                    <button className="btn-primary btn--sm uppercase">View</button>
                                    <button className="btn--sm uppercase">Dismiss</button>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="tile">
    <div class="tile__icon">
        <figure class="avatar"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"></figure>
    </div>
    <div class="tile__container">
        <p class="tile__title m-0">Robert Downey Jr. shared a post from <b>Stark Industries</b>.</p>
        <p class="tile__subtitle m-0">Robert shared: 'Stark Industries is proud to announce its brand new suit.'</p><span class="info">23 minutes ago</span>
        <div class="tile__buttons m-0">
            <button class="btn-primary btn--sm uppercase">View</button>
            <button class="btn--sm uppercase">Dismiss</button>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Right Side Buttons</h6>
                        <p>
                            To move the buttons to the right of the tile rather than the bottom, move the{' '}
                            <code>tile__buttons</code> container outside of <code>tile__container</code>.
                        </p>
                        <div className="tile">
                            <div className="tile__icon">
                                <figure className="avatar">
                                    <img alt="avatar" src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                </figure>
                            </div>
                            <div className="tile__container">
                                <p className="tile__title m-0">
                                    Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                                </p>
                                <p className="tile__subtitle m-0">
                                    Robert shared: 'Stark Industries is proud to announce its brand new suit.'
                                </p>
                                <span className="info">23 minutes ago</span>
                            </div>
                            <div className="tile__buttons m-0">
                                <button className="btn-primary btn--sm uppercase">View</button>
                                <button className="btn--sm uppercase">Dismiss</button>
                            </div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="tile">
    <div class="tile__icon">
        <figure class="avatar"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"></figure>
    </div>
    <div class="tile__container">
        <p class="tile__title m-0">Robert Downey Jr. shared a post from <b>Stark Industries</b>.</p>
        <p class="tile__subtitle m-0">Robert shared: 'Stark Industries is proud to announce its brand new suit.'</p><span class="info">23 minutes ago</span></div>
    <div class="tile__buttons m-0">
        <button class="btn-primary btn--sm uppercase">View</button>
        <button class="btn--sm uppercase">Dismiss</button>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Text Ellipsis</h6>
                        <p>
                            To prevent text from wrapping, add <code>u-text-no-wrap</code> to the text element.
                        </p>
                        <div
                            style={{
                                maxWidth: '350px',
                            }}
                        >
                            <div className="tile">
                                <div className="tile__icon">
                                    <figure className="avatar">
                                        <img
                                            alt="avatar"
                                            src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                                        />
                                    </figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0 u-text-no-wrap">
                                        Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                                    </p>
                                    <p className="tile__subtitle m-0">
                                        Robert shared: 'Stark Industries is proud to announce its brand new suit.'
                                    </p>
                                    <span className="info">23 minutes ago</span>
                                    <div className="tile__buttons m-0">
                                        <button className="btn-primary btn--sm uppercase">View</button>
                                        <button className="btn--sm uppercase">Dismiss</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div style="max-width: 350px;">
    <div class="tile">
        <div class="tile__icon">
            <figure class="avatar"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"></figure>
        </div>
        <div class="tile__container">
            <p class="tile__title m-0 u-text-no-wrap">Robert Downey Jr. shared a post from <b>Stark Industries</b>.</p>
            <p class="tile__subtitle m-0">Robert shared: 'Stark Industries is proud to announce its brand new suit.'</p><span class="info">23 minutes ago</span>
            <div class="tile__buttons m-0">
                <button class="btn-primary btn--sm uppercase">View</button>
                <button class="btn--sm uppercase">Dismiss</button>
            </div>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Vertical Centering</h6>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            To align the items in the middle, use the <code>u-items-center</code> modifier class with
                            the <code>tile</code> class.
                        </p>
                        <div className="tile u-items-center">
                            <div className="tile__icon">
                                <figure className="avatar">
                                    <img alt="avatar" src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                </figure>
                            </div>
                            <div className="tile__container">
                                <p className="tile__title m-0 u-text-no-wrap">
                                    Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                                </p>
                                <p className="tile__subtitle m-0">
                                    Robert shared: 'Stark Industries is proud to announce its brand new suit.'
                                </p>
                                <span className="info">23 minutes ago</span>
                            </div>
                            <div className="tile__buttons m-0">
                                <button className="btn-primary btn--sm uppercase">View</button>
                                <button className="btn--sm uppercase">Dismiss</button>
                            </div>
                        </div>
                        <div className="space space--lg"></div>

                        <p>
                            In addition, the <code>u-overflow-hidden</code> utility class could be used on the{' '}
                            <code>tile-container</code> to keep the tile height consistent. This prevents wrapping that
                            would normally occur on smaller screens (decrease browser width to see effect).
                        </p>
                        <div className="tile u-items-center">
                            <div className="tile__icon">
                                <figure className="avatar">
                                    <img alt="avatar" src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                </figure>
                            </div>
                            <div className="tile__container u-overflow-hidden">
                                <p className="tile__title m-0 u-text-no-wrap">
                                    Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                                </p>
                                <p className="tile__subtitle m-0">
                                    Robert shared: 'Stark Industries is proud to announce its brand new suit.'
                                </p>
                                <span className="info">23 minutes ago</span>
                            </div>
                            <div className="tile__buttons m-0">
                                <button className="btn-primary btn--sm uppercase">View</button>
                                <button className="btn--sm uppercase">Dismiss</button>
                            </div>
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="tile u-items-center">
    <div class="tile__icon">
        <figure class="avatar"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"></figure>
    </div>
    <div class="tile__container u-overflow-hidden">
        <p class="tile__title m-0 u-text-no-wrap">Robert Downey Jr. shared a post from <b>Stark Industries</b>.</p>
        <p class="tile__subtitle m-0">Robert shared: 'Stark Industries is proud to announce its brand new suit.'</p><span class="info">23 minutes ago</span></div>
    <div class="tile__buttons m-0">
        <button class="btn-primary btn--sm uppercase">View</button>
        <button class="btn--sm uppercase">Dismiss</button>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>
                        <p>Below are a couple of examples to help you get started.</p>

                        <div className="row u-items-center">
                            <div className="col-lg-6">
                                <div className="tile u-items-center mb-3">
                                    <div className="tile__icon">
                                        <figure className="avatar">
                                            <img
                                                alt="avatar"
                                                src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                                            />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Robert Downey Jr. just poked you.</p>
                                        <p className="tile__subtitle m-0">Poke him back or view on Facebook.</p>
                                        <span className="info">6 seconds ago</span>
                                    </div>
                                    <div className="tile__buttons">
                                        <button className="btn-transparent p-0">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'ellipsis-h']}
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tile u-items-center mb-3"">
    <div class="tile__icon">
        <figure class="avatar">
            <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png">
        </figure>
    </div>
    <div class="tile__container">
        <p class="tile__title m-0">Robert Downey Jr. just poked you.</p>
        <p class="tile__subtitle m-0">Poke him back or view on Facebook.</p>
        <span class="info">6 seconds ago</span>
    </div>
    <div class="tile__buttons">
        <button class="btn-transparent p-0"><span class="icon"><i class="fa fa-wrapper small fa-ellipsis-h" aria-hidden="true"></i></span></button>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="row u-items-center">
                            <div className="col-lg-6">
                                <div className="tile u-items-center mb-3">
                                    <div className="tile__icon">
                                        <figure className="avatar">
                                            <img
                                                className="padded"
                                                alt="avatar"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABZUlEQVR4Xu2aUQ7DIAxDyU3Xk203ZeKvVNMsywRB6/3OtOERGyoR5eG/ePj8iwG4Ax5OwBZgG6DWWtkxgv6IiI8wHg6lO2AygDaBVAg7AEiFsAuANAgygIign/HPmMBiw+1AF38tcDKA4Z2wI4ChEHYAcJRS3j9sM8QOywNoFqu1vrIgbAGgrX4WhG0AZEHYCkAGhOUBwMN8L6CD8W4ACnsuMQCyxVoad5/DLHH0PvVrk61nuQ5AgK7/qwtiALOJs+9DeneAmEm2AGqx0aHDvg/pbQFbQDuXOAOQx5wBFwJq6LDAkV6txxZAhG0BW6AnoHqO7TikV+txBiDCzgBngDOgI6CGDms5pFfrcQgiwg5Bh6BD0CF4JqCmLps5SK/W410AEfYu4F3Au4B3Ae8CJwLqBQY2dFn99AsSbIHZegMgb6/LB6HsFWWfn94BbEGr6+kOWH1CbH0GwBK7m94dcLcVZefzBVVinlD6CDHWAAAAAElFTkSuQmCC"
                                            />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Polarity.exe</p>
                                        <p className="tile__subtitle m-0">953KB / 1.1MB - 3 seconds...</p>
                                    </div>
                                    <div className="tile__buttons">
                                        <button className="btn-transparent p-0">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'ellipsis-v']}
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tile u-items-center mb-3">
    <div class="tile__icon">
        <figure class="avatar"><img class="padded" src="..."></figure>
    </div>
    <div class="tile__container">
        <p class="tile__title m-0">Polarity.exe</p>
        <p class="tile__subtitle m-0">953KB / 1.1MB - 3 seconds...</p>
    </div>
    <div class="tile__buttons">
        <button class="btn-transparent p-0"><span class="icon"><i class="fa fa-wrapper small fa-ellipsis-v" aria-hidden="true"></i></span></button>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="row u-items-center">
                            <div className="col-lg-6">
                                <div className="tile u-items-center mb-3">
                                    <div className="tile__icon">
                                        <figure className="avatar">
                                            <img
                                                className="padded"
                                                alt="avatar"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD5ElEQVR4Xu1ai20VMRDcrQA6ACogqYBQAVABpALSAaQCoAKSCkgHhAqACkgqACpYNGhPchz71mv73j3dsyUkxPk3s7Mf74PpwAcfOH4aBAwFHDgDwwVaBCAiL4joJRE9JqKHRHQU7HdNRD/wh5kvW85Zcq1bASICoB8UOP5eMv4Q0RURnTPzTcmCXc1xESAi74joTK1de8f3zHxeu7j3uiIC1OpfI4m33AWu8ZyZoYxVh0mAiMCvv6ifx5e9VWnD32+YGcBI1yAunKirPEqghCu8mtasxcIsAWr57wnwAA4pX5RcXETeYD4RxUSAhOM1lWARAPBhZAdeRPQz76WVTBCGzBEOZIlji0gRkXAOM5vqtfbE9+wmIgKLIeiF45KZYc3qISIg4XW0AbIDzsuOnRKg1voVRftZ8J4LighSYqyEalLnFlpKSSogYSX4/NGc7J0EoH5AwEwFx65E1BLwO7L+qRXwPARopoArfe6KNrGZmwARQWmLtDeNW2ZGSpsdXgKUBGSBRVVQQ0AcpD4xM6q/JQj4SERvg42zwbCU4NJ505n3YoCIoKh5FlwKxQqC1hIExGr7xswonu6NUmCl8+YIiHM/CpX/Fd7c8B6sLoAaA+dNA9XkE+usnvdIKaCq4KghQEmoOi9Hgvcee0dAi/VTa2uC4B2LaK0+6wJa699JadbBGRfojZ+sezQHwRR4oLAOVgLiILgXBMSpKZsGc+CJyCyclID4rL0gIK7QkpFZRFAc4b0QjyLwSgDWh0VWUcpdNAvoxdCpeRAclASVUIAHfEx0UcVpSaQ5CygBcTWYbVwEJHjA4zEUN1rMJ7EFviat5l6DKXlfMPNp6hJwB0+3V0Tw1kAAnMZfuIK3yZK5i6uu8DZEsiSUWEcthHQZN1W6WL+bAiYwIoL8/zQCh3cB5O7q6GqTBeBDy2PrbP1fSmo4r0sMCAiAr8L/w4CIz/g3NEWLfvEREbTA0PKKn9Vmo8VLQlcCVFJ4sMDqudY2vuEFiSgetsUxf2qLp/oJP6EGT+woIaM7AUoClACQsTuU3Ck1B+BPUm5kAWj9Hl/G1VrOdIq9JMwGvFaA1vomAlJRthA90hzKXmSR2R9HLQCt35cgAD90wtfh51OcQHADUMQEuM51adZoBWit705AyauvUCVdpg0CnD+huYJgTaXVxayOTYYC1laAZYG1vy8eBNcGaJ0/CIgY6B4ELQus/X1xBTgC9iJTLYIHAUu7wCJmdWw6FLDrOsBhnFWmWm+V5iywCirHoYMA4/8TDgU41LTJqW4FbI2FQcDWLOrFMxTgZWxr84cCtmZRL56hAC9jW5v/D+5oj19OlNgvAAAAAElFTkSuQmCC"
                                            />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">Meeting Scheduled</p>
                                        <p className="tile__subtitle m-0">You have a scheduled meeting in 1 hour.</p>
                                    </div>
                                    <div className="tile__buttons">
                                        <button className="btn-primary p-0">
                                            <span className="icon">
                                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'check']} />
                                            </span>
                                        </button>
                                        <button className="btn-transparent p-0">
                                            <span className="icon">
                                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'times']} />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tile u-items-center mb-3">
    <div class="tile__icon">
        <figure class="avatar"><img class="padded" src="..."></figure>
    </div>
    <div class="tile__container">
        <p class="tile__title m-0">Meeting Scheduled</p>
        <p class="tile__subtitle m-0">You have a scheduled meeting in 1 hour.</p>
    </div>
    <div class="tile__buttons">
        <button class="btn-primary p-0"><span class="icon"><i class="fa fa-wrapper small fa-check" aria-hidden="true"></i></span></button>
        <button class="btn-transparent p-0"><span class="icon"><i class="fa fa-wrapper small fa-times" aria-hidden="true"></i></span></button>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <div className="row u-items-center">
                            <div className="col-lg-6">
                                <div className="tile p-1 bg-gray-200 u-round-xs">
                                    <div className="tile__icon">
                                        <figure className="avatar">
                                            <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                        </figure>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title m-0">
                                            Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                                        </p>
                                        <p className="tile__subtitle m-0">
                                            Robert shared: 'Stark Industries is proud to announce its brand new suit.'
                                        </p>
                                        <span className="info">23 minutes ago</span>
                                    </div>
                                    <div className="tile__buttons m-0 u-text-right">
                                        <div className="list-dropdown dropdown-right">
                                            <button className="btn-transparent btn--sm btn-dropdown m-0">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'ellipsis-v']}
                                                />
                                            </button>
                                            <ul className="menu u-text-left u-absolute">
                                                
                                            <li className="menu-item">
                                                    <a href="!#">
                                                        <FontAwesomeIcon
                                                            className="fa-wrapper small"
                                                            icon={['fas', 'folder-open']}
                                                        />{' '}
                                                        Open
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">
                                                        <FontAwesomeIcon
                                                            className="fa-wrapper small"
                                                            icon={['fas', 'check']}
                                                        />{' '}
                                                        Mark as read
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">
                                                        <FontAwesomeIcon
                                                            className="fa-wrapper small"
                                                            icon={['fas', 'cog']}
                                                        />{' '}
                                                        Notification settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tile p-1 bg-gray-200 u-round-xs">
    <div class="tile__icon">
        <figure class="avatar"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" /></figure>
    </div>
    <div class="tile__container">
        <p class="tile__title m-0">Robert Downey Jr. shared a post from <b>Stark Industries</b>.</p>
        <p class="tile__subtitle m-0">Robert shared: 'Stark Industries is proud to announce its brand new suit.'</p>
        <span class="info">23 minutes ago</span>
    </div>
    <div class="tile__buttons m-0 u-text-right">
        <div class="list-dropdown dropdown-right">
            <button class="btn-transparent btn-dropdown m-0">
                <i class="icon fad fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="menu u-text-left u-absolute">
                <li class="menu-item">
                    <a href="#"><i class="icon fas fa-folder-open" aria-hidden="true"></i> Open</a>
                </li>
                <li class="menu-item">
                    <a href="#"><i class="icon fas fa-check" aria-hidden="true"></i> Mark as read</a>
                </li>
                <li class="menu-item">
                    <a href="#"><i class="icon fas fa-cog" aria-hidden="true"></i> Notification settings</a>
                </li>
            </ul>
        </div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Tags', link: './tags' }} nextLink={{ name: 'Toast', link: './toast' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(TilesPage);
