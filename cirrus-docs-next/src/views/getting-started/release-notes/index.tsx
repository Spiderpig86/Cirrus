import React, { useEffect, useState } from 'react';
import { withLayout } from '@moxy/next-layout';
import ReactMarkdown from 'react-markdown';

import { TableOfContents, TableOfContentsEntry } from '../../../../layouts/components/toc';
import { Headline } from '../../../../layouts/components/headline';
import { Pagination } from '../../../../layouts/components/pagination';

import { ReplaceAll } from '../../../../utils/string';
import { DefaultLayout } from '../../../../layouts/default';

// https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
const importAll = (r: any) => r.keys().map(r);
const releaseNotesMd = importAll(require.context('../../../../static/markdown', false, /\.md$/)).sort().reverse();

export const ReleaseNotesPage: React.FC<any> = (props) => {
    // TODO: move to constants
    const versions = ["0.6.0", "0.5.5", "0.5.4", "0.5.3", "0.4.0"];

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
            console.log(releaseNotesMd);
            
            const map: Map<string, string> = new Map();
            for (let i = 0; i < versions.length; i++) {
                const key = /\d+\.\d+\.\d+/.exec(versions[i]);
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
            console.log(releaseNotes);
            
            setToc([contents]);
        }

        fetchNotes();
    }, []);

    return (
        <main className="page-layout">
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
                        name: 'Examples',
                        link: './examples',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ReleaseNotesPage);