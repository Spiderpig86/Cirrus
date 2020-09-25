import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Media',
        anchor: '#media',
        children: [
            {
                name: 'Images',
                anchor: '#images',
                children: null,
            },
            {
                name: 'Figures',
                anchor: '#figures',
                children: null,
            },
            {
                name: 'Videos',
                anchor: '#videos',
                children: null,
            },
        ],
    },
];
