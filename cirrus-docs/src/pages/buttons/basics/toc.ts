import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Animations',
        anchor: '#animations',
        children: null,
    },
    {
        name: 'Test 2',
        anchor: '#test2',
        children: null,
    },
    {
        name: 'Test 3',
        anchor: '#test3',
        children: [
            {
                name: 'Test 4',
                anchor: '#test4',
                children: null,
            },
        ],
    },
];
