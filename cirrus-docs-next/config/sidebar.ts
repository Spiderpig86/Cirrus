import { IconProp } from '@fortawesome/fontawesome-svg-core';
import TreeMap from 'ts-treemap';

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

export const TITLE_GETTING_STARTED = `Getting Started`;
export const TITLE_FUNDAMENTALS = `Fundamentals`;
export const TITLE_ANIMATIONS = `Animations`;
export const TITLE_BUTTONS = `Buttons`;
export const TITLE_ELEMENTS = `Elements`;
export const TITLE_FONTS = `Fonts`;
export const TITLE_FORMS = `Forms`;
export const TITLE_GRID = `Grid`;
export const TITLE_LAYOUT = `Layout`;
export const TITLE_UTILITIES = `Utilities`;

export const sidebarConfig: SidebarConfig[] = [
    {
        title: '',
        sidebarItems: [
            {
                fontWeight: 'bold',
                glyph: ['fas', 'book'],
                text: 'Documentation',
                url: '/docs',
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'gem'],
                text: `What's New`,
                url: '/new',
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'cubes'],
                text: 'Blocks',
                url: '/blocks',
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'pencil-ruler'],
                text: 'Playground',
                url: '/playground',
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'users'],
                text: 'Community',
                url: 'https://github.com/Spiderpig86/Cirrus/discussions',
            },
            {
                fontWeight: 'bold',
                glyph: ['fas', 'gift'],
                text: 'About',
                url: '/about',
            },
        ],
    },
    {
        title: TITLE_GETTING_STARTED,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Setup',
                url: '/getting-started/setup',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Browser Support',
                url: '/getting-started/support',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Developing',
                url: '/getting-started/developing',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Configuration',
                url: '/getting-started/configuration',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Managing Build Size',
                url: '/getting-started/managing-build-size',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Start Guide',
                url: '/getting-started/start-guide',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Release Notes',
                url: '/getting-started/release-notes',
            },
        ],
    },
    {
        title: TITLE_FUNDAMENTALS,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Default Styles',
                url: '/fundamentals/default-styles',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Colors',
                url: '/fundamentals/colors',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Sizes',
                url: '/fundamentals/sizes',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Typography',
                url: '/fundamentals/typography',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Viewports',
                url: '/fundamentals/viewports',
            },
        ],
    },
    {
        title: TITLE_ANIMATIONS,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Animated Styles',
                url: '/animations/animated-styles',
            },
        ],
    },
    {
        title: TITLE_BUTTONS,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Basics',
                url: '/buttons/basics',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Button Groups',
                url: '/buttons/button-groups',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Glyphs',
                url: '/buttons/glyphs',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Variants',
                url: '/buttons/variants',
            },
        ],
    },
    {
        title: TITLE_ELEMENTS,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Accordion',
                url: '/elements/accordion',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Avatar',
                url: '/elements/avatar',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Breadcrumbs',
                url: '/elements/breadcrumbs',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Card',
                url: '/elements/cards',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Code',
                url: '/elements/code',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Links',
                url: '/elements/links',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Lists',
                url: '/elements/lists',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Modal',
                url: '/elements/modal',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Pagination',
                url: '/elements/pagination',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Placeholder',
                url: '/elements/placeholder',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Progress',
                url: '/elements/progress',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Table',
                url: '/elements/table',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tabs',
                url: '/elements/tabs',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tags',
                url: '/elements/tags',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tiles',
                url: '/elements/tiles',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Toast',
                url: '/elements/toast',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Tooltips',
                url: '/elements/tooltips',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Trees',
                url: '/elements/trees',
            },
        ],
    },
    {
        title: TITLE_FONTS,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Font Weights',
                url: '/fonts/font-weights',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Glyphs',
                url: '/fonts/glyphs',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Headings',
                url: '/fonts/headings',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Letter Spacing',
                url: '/fonts/letter-spacing',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Line Height',
                url: '/fonts/line-height',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Size',
                url: '/fonts/size',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Text Elements',
                url: '/fonts/text-elements',
            },
        ],
    },
    {
        title: TITLE_FORMS,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Checkbox',
                url: '/forms/checkbox',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Input Glyphs',
                url: '/forms/glyphs',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Input Groups',
                url: '/forms/groups',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Inputs',
                url: '/forms/inputs',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Radio',
                url: '/forms/radio',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Toggle',
                url: '/forms/toggle',
            },
        ],
    },
    {
        title: TITLE_GRID,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Gap',
                url: '/grid/gap',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Span',
                url: '/grid/span',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Templates',
                url: '/grid/templates',
            },
        ],
    },
    {
        title: TITLE_LAYOUT,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Columns',
                url: '/layout/columns',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Divider',
                url: '/layout/divider',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Footer',
                url: '/layout/footer',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Frames',
                url: '/layout/frames',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Header',
                url: '/layout/header',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Height',
                url: '/layout/height',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Hero',
                url: '/layout/hero',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Level',
                url: '/layout/level',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Margin',
                url: '/layout/margin',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Max Height',
                url: '/layout/max-height',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Max Width',
                url: '/layout/max-width',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Media',
                url: '/layout/media',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Min Height',
                url: '/layout/min-height',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Min Width',
                url: '/layout/min-width',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Padding',
                url: '/layout/padding',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Spacing',
                url: '/layout/spacing',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Width',
                url: '/layout/width',
            },
        ],
    },
    {
        title: TITLE_UTILITIES,
        sidebarItems: [
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Absolutes',
                url: '/utils/absolutes',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Border Radius',
                url: '/utils/border-radius',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Border Width',
                url: '/utils/border-width',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Box Shadow',
                url: '/utils/box-shadow',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Clearfix',
                url: '/utils/clearfix',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Display',
                url: '/utils/display',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Filters',
                url: '/utils/filters',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Flexbox',
                url: '/utils/flexbox',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Gap',
                url: '/utils/gap',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Misc',
                url: '/utils/misc',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Opacity',
                url: '/utils/opacity',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Overflow',
                url: '/utils/overflow',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Positions',
                url: '/utils/positions',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Transition Duration',
                url: '/utils/transition-duration',
            },
            {
                fontWeight: 'semibold',
                glyph: null,
                text: 'Z-Index',
                url: '/utils/zindex',
            },
        ],
    },
];

export const SIDEBAR_CONFIG_MAP = new Map<string, TreeMap<string, SidebarItemConfig>>(
    sidebarConfig.map((entry) => {
        return [
            entry.title,
            new TreeMap<string, SidebarItemConfig>(
                entry.sidebarItems.map((item) => [item.text, item] as [string, SidebarItemConfig])
            ),
        ];
    })
);
