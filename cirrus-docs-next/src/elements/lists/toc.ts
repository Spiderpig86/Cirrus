import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Lists',
        anchor: '#lists',
        children: [
            {
                name: 'Basics',
                anchor: '#basics',
                children: null,
            },
            {
                name: 'Menus',
                anchor: '#menus',
                children: [
                    {
                        name: 'Dropdown List',
                        anchor: '#dropdown',
                        children: null,
                    },
                    {
                        name: 'Other Examples',
                        anchor: '#other',
                        children: null,
                    },
                ],
            },
        ],
    },
];
