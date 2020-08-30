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
                url: '/why'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'pencil-ruler'],
                text: 'Playground',
                url: '#'
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'gift'],
                text: 'About',
                url: '/about'
            },
        ],
    },
    {
        title: 'Getting Started',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Setup',
                url: '/getting-started/setup'
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
                url: '/getting-started/support'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tutorial',
                url: '/getting-started/tutorial'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Examples',
                url: '/getting-started/examples'
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
                url: '/fundamentals/colors'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Typography',
                url: '/fundamentals/typography'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Viewports',
                url: '/fundamentals/viewports'
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
                url: '/buttons/basics'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Button Groups',
                url: '/buttons/button-groups'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Glyphs',
                url: '/buttons/glyphs'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Variants',
                url: '/buttons/variants'
            },
        ],
    },
    {
        title: 'Components',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Avatar',
                url: '/components/avatar'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Card',
                url: '/components/cards'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Code',
                url: '/components/code'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Links',
                url: '/components/links'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Lists',
                url: '/components/lists'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Modal',
                url: '/components/modal'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Pagination',
                url: '/components/pagination'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Placeholder',
                url: '/components/placeholder'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Table',
                url: '/components/table'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tabs',
                url: '/components/tabs'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tags',
                url: '/components/tags'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tiles',
                url: '/components/tiles'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Toast',
                url: '/components/toast'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tooltip',
                url: '/components/tooltips'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Trees',
                url: '/components/trees'
            },
        ],
    },
    {
        title: 'Fonts',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Font Family',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Text Elements',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Font Weights',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Glyphs',
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
                text: 'Inputs',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'States',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'With Glyphs',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Checkbox',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Radio',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Toggle',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Form Groups',
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
                text: 'Clearfix',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Display',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Flexbox',
                url: '#'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Positions',
                url: '#'
            },
        ],
    },
];
