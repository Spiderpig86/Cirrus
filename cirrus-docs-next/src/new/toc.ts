import { TableOfContentsEntry } from '../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: `What's New in 0.7.x?`,
        anchor: '#whats-new',
        children: [
            {
                name: 'A new way to use Cirrus',
                anchor: '#new-way',
                children: null,
            },
            {
                name: 'Focus on configurability',
                anchor: '#configurability',
                children: null,
            },
            {
                name: 'Revamped colors',
                anchor: '#colors',
                children: null,
            },
            {
                name: 'Utils, utils, and more utils',
                anchor: '#utils',
                children: null,
            },
            {
                name: 'Components',
                anchor: '#components',
                children: null,
            },
            {
                name: `But wait, there's more`,
                anchor: '#more',
                children: null,
            },
        ],
    },
];
