import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Header',
        anchor: '#header',
        children: [
            {
                name: 'Basics',
                anchor: '#basics',
                children: null,
            },
            {
                name: 'Static',
                anchor: '#static',
                children: null,
            },
            {
                name: 'Examples',
                anchor: '#examples',
                children: null,
            },
        ],
    },
];
