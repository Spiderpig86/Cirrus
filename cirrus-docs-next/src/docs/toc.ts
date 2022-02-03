import { TableOfContentsEntry } from '../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Introduction',
        anchor: '#introduction',
        children: null,
    },
    {
        name: "What's New?",
        anchor: '#new',
        children: null,
    },
    {
        name: 'Preview',
        anchor: '#preview',
        children: null,
    },
    {
        name: 'Why Cirrus?',
        anchor: '#why',
        children: [
            {
                name: 'Lightweight',
                anchor: '#lightweight',
                children: null,
            },
            {
                name: 'Modular',
                anchor: '#modular',
                children: null,
            },
            {
                name: 'Rapid Prototyping',
                anchor: '#prototype',
                children: null,
            },
            {
                name: 'Granular Control',
                anchor: '#control',
                children: null,
            },
            {
                name: 'Customize Your Build',
                anchor: '#customize',
                children: null,
            },
        ],
    },
];
