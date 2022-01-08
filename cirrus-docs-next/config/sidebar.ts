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
                url: '/playground'
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
                text: 'Browser Support',
                url: '/getting-started/support'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Developing',
                url: '/getting-started/developing'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Examples',
                url: '/getting-started/examples'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Release Notes',
                url: '/getting-started/release-notes'
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
                url: '/animations'
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
                text: 'Breadcrumbs',
                url: '/components/breadcrumbs'
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
                text: 'Progress',
                url: '/components/progress'
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
                text: 'Tooltips',
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
                text: 'Font Weights',
                url: '/fonts/font-weights'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Glyphs',
                url: '/fonts/glyphs'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Text Elements',
                url: '/fonts/text-elements'
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
                url: '/forms/inputs'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'With Glyphs',
                url: '/forms/glyphs'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Checkbox',
                url: '/forms/checkbox'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Radio',
                url: '/forms/radio'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Toggle',
                url: '/forms/toggle'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Form Groups',
                url: '/forms/groups'
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
                url: '/grid/templates'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Span',
                url: '/grid/span'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Gap',
                url: '/grid/gap'
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
                url: '/layout/columns'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Divider',
                url: '/layout/divider'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Footer',
                url: '/layout/footer'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Frames',
                url: '/layout/frames'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Header',
                url: '/layout/header'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Height',
                url: '/layout/height'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Hero',
                url: '/layout/hero'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Level',
                url: '/layout/level'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Margin',
                url: '/layout/margin'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Media',
                url: '/layout/media'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Padding',
                url: '/layout/padding'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Spacing',
                url: '/layout/spacing'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Width',
                url: '/layout/width'
            },
        ],
    },
    {
        title: 'Utilities',
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Absolutes',
                url: '/utils/absolutes'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Box Shadow',
                url: '/utils/box-shadow'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Clearfix',
                url: '/utils/clearfix'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Display',
                url: '/utils/display'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Flexbox',
                url: '/utils/flexbox'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Gap',
                url: '/utils/gap'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Misc',
                url: '/utils/misc'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Opacity',
                url: '/utils/opacity'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Overflow',
                url: '/utils/overflow'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Positions',
                url: '/utils/positions'
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Z-Index',
                url: '/utils/zindex'
            }
        ],
    },
];
