import { TableOfContentsEntry } from '../../../layouts/components/toc';

export const toc: TableOfContentsEntry[] = [
    {
        name: 'Animations',
        anchor: '#animations',
        children: [
            {
                name: 'Loading Spinner',
                anchor: '#spinner',
                children: null,
            },
            {
                name: 'Effects',
                anchor: '#effects',
                children: [
                    {
                        name: 'Hover Grow',
                        anchor: '#hover-grow',
                        children: null,
                    },
                ],
            },
            {
                name: 'Entrance Animations',
                anchor: '#entrance-animations',
                children: [
                    {
                        name: 'Bounce',
                        anchor: '#bounce',
                        children: null,
                    },
                    {
                        name: 'Bounce In',
                        anchor: '#bounce-in',
                        children: null,
                    },
                    {
                        name: 'Fade In',
                        anchor: '#fade-in',
                        children: null,
                    },
                ],
            },
            {
                name: 'Infinite Animations',
                anchor: '#infinite-animations',
                children: [
                    {
                        name: 'Pound',
                        anchor: '#pound',
                        children: null,
                    },
                    {
                        name: 'Pulse',
                        anchor: '#pulse',
                        children: null,
                    },
                    {
                        name: 'Ping',
                        anchor: '#ping',
                        children: null,
                    },
                ],
            },
            {
                name: 'Animation Utils',
                anchor: '#animation-utils',
                children: null,
            },
        ],
    },
];
