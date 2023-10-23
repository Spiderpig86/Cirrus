import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Modals',
        anchor: '#modals',
        children: [
            {
                name: 'Structure',
                anchor: '#structure',
                children: null,
            },
            {
                name: 'Basic',
                anchor: '#basic',
                children: [
                    {
                        name: 'JS Modal',
                        anchor: '#interact-js',
                        children: null
                    },
                    {
                        name: 'CSS Modal',
                        anchor: '#interact-css',
                        children: null
                    }
                ],
            },
            {
                name: 'Sizes',
                anchor: '#sizes',
                children: null,
            },
            {
                name: 'Animations',
                anchor: '#animations',
                children: null,
            },
            {
                name: 'Accessibility',
                anchor: '#accessibility',
                children: null,
            },
        ],
    },
];
