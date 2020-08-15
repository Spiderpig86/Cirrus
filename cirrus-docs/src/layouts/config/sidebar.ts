import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SidebarItemConfig {
    fontWeight: string;
    glyph: IconProp | null;
    text: string;
    url: string;
}

export interface SidebarConfig {
    title: string;
    sidebarItems: SidebarItemConfig[];
}

export const sidebarConfig: SidebarConfig[] = [
    {
        title: '',
        sidebarItems: [
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Why Cirrus?',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Playground',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Donate',
                url: '#'
            },
        ],
    },
    {
        title: 'Getting Started',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Installation',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Update Guide',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Browser Suppport',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tutorial',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Examples',
                url: '#'
            },
        ],
    },
    {
        title: 'Fundamentals',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Colors',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Typography',
                url: '#'
            },
        ],
    },
    {
        title: 'Animations',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Animated Styles',
                url: '#'
            },
        ],
    },
    {
        title: 'Buttons',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Basics',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Styles',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Button Groups',
                url: '#'
            },
        ],
    },
    {
        title: 'Components',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Todo',
                url: '#'
            },
        ],
    },
    {
        title: 'Fonts',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Styling',
                url: '#'
            },
        ],
    },
    {
        title: 'Forms',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'test',
                url: '#'
            },
        ],
    },
    {
        title: 'Grid',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Templates',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Start / End',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Gap',
                url: '#'
            },
        ],
    },
    {
        title: 'Layout',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Columns',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Divider',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Footer',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Hero',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Header',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Margin',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Media',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Padding',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Spacer',
                url: '#'
            },
        ],
    },
    {
        title: 'Utilities',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Todo',
                url: '#'
            },
        ],
    },
];
