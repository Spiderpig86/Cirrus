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
                text: 'Bold Item',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Bold Item',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Bold Item',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Bold Item',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'clock'],
                text: 'Bold Item',
                url: '#'
            },
        ],
    },
    {
        title: 'Getting Started',
        sidebarItems: [
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
        ],
    },
    {
        title: 'Animations',
        sidebarItems: [
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
        ],
    },
    {
        title: 'Components',
        sidebarItems: [
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
            {
                fontWeight: 'normal',
                glyph: null,
                text: 'Basic Item',
                url: '#'
            },
        ],
    },
];
