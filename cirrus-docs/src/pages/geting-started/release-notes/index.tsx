import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { TableOfContents, TableOfContentsEntry } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';

import {toc as t} from './toc'
import { ReplaceAll } from '../../../utils/string';

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
            for (const filePath of releaseNotesMd) {
                const text = await fetch(filePath).then((res) => res.text());
                const key = /\d+\.\d+\.\d+/.exec(filePath);
                if (key) {
                    map.set(key.toString(), text);
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
