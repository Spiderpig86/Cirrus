import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Avatars',
        anchor: '#avatars',
        children: [
            {
                name: 'Avatars With Images',
                anchor: '#images',
                children: null,
            },
            {
                name: 'Avatars With Text',
                anchor: '#text',
                children: null,
            },
            {
                name: 'Avatar Sizes',
                anchor: '#sizes',
                children: null,
            },
        ],
    },
];
