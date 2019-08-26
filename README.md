<p align="center"><img src="https://github.com/Spiderpig86/Cirrus/blob/master/img/CirrusLogo.png" width="200"></p>
<h1 align="center">Cirrus</h1>

<div align="center">

  [![v.0.5.5](https://img.shields.io/badge/cirrus-0.5.5-blue.svg?style=flat-square)](https://github.com/Spiderpig86/Cirrus)
  [![MIT License](https://img.shields.io/github/license/Spiderpig86/Cirrus.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![Travis](https://img.shields.io/travis/Spiderpig86/Cirrus.svg?style=flat-square)](https://travis-ci.org/Spiderpig86/Cirrus)
  [![Greenkeeper badge](https://badges.greenkeeper.io/Spiderpig86/Cirrus.svg?style=flat-square)](https://greenkeeper.io/)

</div>

<p align="center">
A fully responsive and comprehensive CSS framework with beautiful controls and simplistic structure. Cirrus is designed to be adaptable to existing themes or when starting fresh.
</p>

## :hammer: Quick Install

### Npm
```sh
npm install cirrus-ui
```

### Yarn

```sh
yarn add cirrus-ui
```

### CDN

```html
https://unpkg.com/cirrus-ui
```

## :dart: Supported Browsers
Cirrus relies on  [What CSS to prefix?](http://shouldiprefix.com/) to determine which selectors need preprocessors.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE9, IE10, IE11, Edge | last 3 versions, ESR | last 3 versions | last 3 versions | last 3 versions | last 3 versions |

## :crystal_ball: Framework Components
* Framework components are now broken down into `core` and `ext` packages. The `core` package only contains the essentials for basic styling while `core + ext` adds specially designed components.

#### Core
* [Buttons](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/button.css "Buttons")
  * Styles for the button with 3 different variations.
* [Code](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/code.css "Code")
  * Style for code markup blocks.
* [Default (Base)](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/default.css "Default")
  * The core of this framework.
* [Font](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/font.css "Font")
  * All text styles for this framework for headers, articles, blockquotes, and paragraphs.
* [Footer](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/footer.css "Footer")
  * Basic styles for setting up a page footer.
* [Forms](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/forms.css "Forms")
  * Form styles for textboxes, textfields, selects, and layout.
* [Frames](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/frames.css "Frames")
  * Flexible panel with header, body, and footer for layouts.
* [Header](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/header.css "Header")
  * Styles for header elements including drop down menus.
* [Layout](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/layout.css "Layout")
  * Rules for grids, item alignment, and layout borders.
* [Links](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/links.css "Links")
  * Link styles with different effects.
* [Lists](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/lists.css "Lists")
  * A simple stylesheet to simplify list UI.
* [Media](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/media.css "Media")
  * Rules for styling images, videos, figures, avatars, and other media components.
* [Modal](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/modal.css "Modal")
  * Styles for a pop up modal dialog.
* [Placeholder](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/placeholder.css "Placeholder")
  * A padded generic container to display additional information.
* [Tables](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/table.css "Tables")
  * Clean designs for tables.
* [Theme](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/theme.css "Theme")
  * Default colors of the framework.
* [Util](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/util.css "Utils")
  * Designed to solve many common headaches with CSS.
  
#### Ext
* [Animations](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/animations.css "Animations")
  * Consists of animations that will work with the controls.
* [Avatar](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/avatar.css "Avatar")
  * Styles for user avatars.
* [Cards](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/card.css "Cards")
  * Base for card controls.
* [Grid](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/card.css "Grid")
  * Experimental implementation of CSS Grid standard.
* [Modifiers](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/modifiers.css "Modifiers")
  * Classes designed for modifying text and backgrounds.
* [Pagination](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/pagination.css "Pagination")
  * Design for pagination and pagination navigation links.
* [Placeholder](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/placeholder.css "Placeholder")
  * Styles for a control designed to be a placeholder such as "Coming Soon" panels and so on.
* [Tabs](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tabs.css "Tabs")
  * Contains styles for tab controls.
* [Tags](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tags.css "Tags")
  * Chip-like controls that are helpful for listing items.
* [Tiles](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tiles.css "Tiles")
  * Flexible layout used for tiling controls horizontally.
* [Toast](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/toast.css "Toast")
  * A small overaly notification for websites.
* [Tooltips](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tooltips.css "Tooltips")
  * Add tooltips to any control for contextual info.

## :pager: jQuery
* The only component that requires the use of jQuery is the `Header` component for toggling the dropdown menu on mobile.
* It is possible to use these components without jQuery in other frameworks like Angular and React by mimicking the behavior of toggling the class.

## :sparkles: Why not other frameworks?
Even with a multitude of CSS frameworks, some are either too basic to develop more complex websites and some are too bogged down with a lot of styles that don't end up getting used. Cirrus is meant to bridge a gap between boilerplate stylesheets and UI frameworks.

## :clap: Related Projects
| Project                                                                              | Description                                                                            |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [vue-cirrus](https://github.com/FlorianWoelki/vue-cirrus)   | Cirrus components for Vue.js with straightforward syntax                                             |

## :gem: Examples that use Cirrus
* [Polarity 9](http://polarity.x10.mx/browser "Polarity 9 Promo Page")
* [Phraze](https://phrazes.net "Phraze")

## :ledger: License and Attribution
Cirrus is licensed under the [MIT license](https://github.com/Spiderpig86/Cirrus/blob/master/LICENSE "MIT License"). If this frame work has helped you in any way, attribution in the footer of your website would be much appreciated.
