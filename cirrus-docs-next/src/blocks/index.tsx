import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import { DefaultLayout } from '../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../constants';
import { ExternalLink } from '../../layouts/components/link';

export const AboutPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout min-h-100p u-center">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Blocks</title>
            </Head>

            <section className="py-8">
                <div className="content u-text-center">
                    <h1
                        className="headline-4"
                        style={{
                            letterSpacing: '-.025em',
                        }}
                    >
                        Need more <span className="text-pink-600">Cirrus?</span>
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Accelerate your development ten-fold with <b>Cirrus Blocks</b>, a collection of over 50
                            beautifully designed components and layouts that can be copied and pasted right into your
                            project. Developed by the same developers of Cirrus, you can be sure that each example is
                            designed with the latest features available and is built to scale. Each example is available
                            in HTML, React, and Vue.
                        </p>
                        <ExternalLink url="https://cirrus-blocks.com">
                            Sign Up Now
                        </ExternalLink>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default withLayout(<DefaultLayout />)(AboutPage);
