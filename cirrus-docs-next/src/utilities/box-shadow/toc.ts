import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Box Shadow',
        anchor: '#box-shadow',
        children: [
            {
                name: 'Outer Shadow',
                anchor: '#outer-shadow',
                children: null,
            },
            {
                name: 'Inner Shadow',
                anchor: '#inner-shadow',
                children: null,
            },
            {
                name: 'No Shadow',
                anchor: '#no-shadow',
                children: null,
            },
            {
                name: 'Variants',
                anchor: '#variants',
                children: null,
            },
        ],
    },
];
