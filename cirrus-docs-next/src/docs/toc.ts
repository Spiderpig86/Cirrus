import { TableOfContentsEntry } from '../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Introduction',
        anchor: '#introduction',
        children: null,
    },
    {
        name: 'What is Cirrus?',
        anchor: '#what',
        children: null,
    },
    {
        name: 'Why Cirrus?',
        anchor: '#why',
        children: [
            {
                name: 'Built for Rapid Prototyping',
                anchor: '#prototype',
                children: null,
            },
            {
                name: 'Faster Iteration with Utilities',
                anchor: '#utilities',
                children: null,
            },
            {
                name: 'Lightweight',
                anchor: '#lightweight',
                children: null,
            },
            {
                name: 'Sass First',
                anchor: '#sass',
                children: null,
            },
            {
                name: 'Customize it for You',
                anchor: '#customize',
                children: null,
            },
        ],
    },
];
