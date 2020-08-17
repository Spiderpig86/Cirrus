import React, { useEffect } from 'react';

import './index.scss';

export interface TableOfContentsProps {
    entries: TableOfContentsEntry[];
}

export interface TableOfContentsEntry {
    name: string;
    anchor: string;
    children: TableOfContentsEntry[] | null;
}

export const TableOfContents: React.FC<TableOfContentsProps> = (props) => {
    useEffect(() => {
        if (!document.querySelector('.toc__nav')) {
            return;
        }

        const tableOfContentsEventListener = (e: any) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    if (!document.querySelector(`.toc__nav li a[href="#${id}"]`)) {
                        return;
                    }
                    if (entry.intersectionRatio > 0) {
                        document.querySelector(`.toc__nav li a[href="#${id}"]`)!.parentElement!.classList.add('active');
                    } else {
                        document
                            .querySelector(`.toc__nav li a[href="#${id}"]`)!
                            .parentElement!.classList.remove('active');
                    }
                });
            });

            // Track all sections that have an `id` applied
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section);
            });
        };

        window.addEventListener('load', tableOfContentsEventListener);

        return () => window.removeEventListener('load', tableOfContentsEventListener);
    }, []);

    function constructList(entries: TableOfContentsEntry[]) {
        return (
            <ul>
                {entries.map((entry) => {
                    return (
                        <li>
                            <a href={entry.anchor}>{entry.name}</a>
                            {entry.children && constructList(entry.children)}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <nav className="toc__nav">
            <span className="uppercase text-gray-600 font-bold" style={{ fontSize: '80%' }}>
                Contents
            </span>
            {constructList(props.entries)}
        </nav>
    );
};
