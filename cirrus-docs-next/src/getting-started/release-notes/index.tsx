import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import ReactMarkdown from 'react-markdown';

import { TableOfContents, TableOfContentsEntry } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';

import { ReplaceAll } from '../../../utils/string';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { RELEASE_NOTE_VERSIONS } from '../../../constants/release-notes';

// https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
const importAll = (r: any) => r.keys().map(r);
const releaseNotesMd = importAll(require.context('../../../static/markdown', false, /\.md$/)).sort().reverse();

export const ReleaseNotesPage: React.FC<any> = (props) => {

    const [releaseNotes, setReleaseNotes] = useState<Map<string, string>>(new Map());
    const [toc, setToc] = useState<TableOfContentsEntry[]>([
        {
            name: 'Release Notes',
            anchor: '#release-notes',
            children: [] as TableOfContentsEntry[],
        },
    ]);

    useEffect(() => {
        async function fetchNotes() {
            const contents = {
                name: 'Release Notes',
                anchor: '#release-notes',
                children: [] as TableOfContentsEntry[],
            };

            const map: Map<string, string> = new Map();
            for (let i = 0; i < RELEASE_NOTE_VERSIONS.length; i++) {
                const key = /\d+\.\d+\.\d+/.exec(RELEASE_NOTE_VERSIONS[i]);
                const notes = releaseNotesMd[i];
                if (key) {
                    map.set(key.toString(), notes.default);
                    contents.children.push({
                        name: key.toString(),
                        anchor: `#${ReplaceAll(key.toString(), '.', '')}`,
                        children: null,
                    });
                }
            }

            setReleaseNotes(map);
            setToc([contents]);
        }

        fetchNotes();
    }, []);

    return (
        <main className="page-layout release-notes-page">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Release Notes</title>
            </Head>
            <div>
                <section id="release-notes" className="padtop">
                    <div className="content">
                        <Headline title="Release Notes" link="#release-notes" />
                        <div className="divider"></div>
                        <p>Release notes for Cirrus for all versions.</p>
                    </div>
                </section>

                {Array.from(releaseNotes.keys()).map((version) => {
                    return (
                        <section id={ReplaceAll(version.toString(), '.', '')} key={version} className="padtop">
                            <div className="content">
                                <Headline title={version} link={`#${version}`} size="4" />
                                <div className="divider"></div>
                                <ReactMarkdown source={releaseNotes.get(version)} escapeHtml={false} />
                            </div>
                        </section>
                    );
                })}

                <Pagination
                    prevLink={{
                        name: 'Start Guide',
                        link: './start-guide',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ReleaseNotesPage);
