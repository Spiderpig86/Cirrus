<p align="center"><img src="https://github.com/Spiderpig86/Cirrus/blob/master/img/CirrusLogo.png" width="200"></p>
<h1 align="center">Cirrus</h1>

<div align="center">

  [![v.0.6.2.1](https://img.shields.io/badge/cirrus-0.6.2.1-blue.svg?style=flat-square)](https://github.com/Spiderpig86/Cirrus)
  [![MIT License](https://img.shields.io/github/license/Spiderpig86/Cirrus.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![Travis](https://img.shields.io/travis/Spiderpig86/Cirrus.svg?style=flat-square)](https://travis-ci.org/Spiderpig86/Cirrus)
  [![Known Vulnerabilities](https://snyk.io/test/github/Spiderpig86/Cirrus/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/Spiderpig86/Cirrus?targetFile=package.json)
  [![Known Vulnerabilities](https://img.shields.io/npm/dm/cirrus-ui.svg?style=flat-square)](https://www.npmjs.com/package/cirrus-ui)
  [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

</div>

<p align="center">
A fully responsive and comprehensive CSS framework with beautiful controls and simplistic structure. Cirrus is designed to be adaptable to existing themes or when starting fresh.
<br />
<a href="https://cirrus-ui.netlify.app/"><strong>Check out the docs »</strong></a>
<br />
<br />
<a href="https://github.com/Spiderpig86/Cirrus/issues/new?assignees=&labels=&template=bug-report.md&title=" target="_blank">Request Feature</a>
/
<a href="https://github.com/Spiderpig86/Cirrus/issues/new?assignees=&labels=&template=bug-report.md&title=" target="_blank">Report a Bug</a>
/
<a href="https://cirrus-ui.netlify.app/getting-started/examples" target="_blank">Examples</a>
</p>

## :hammer: Quick Install

#### Npm
```sh
npm install cirrus-ui
```

#### Yarn

```sh
yarn add cirrus-ui
```

#### CDN

```html
https://unpkg.com/cirrus-ui
```

## :sparkles: Why not other frameworks?
Even with a multitude of CSS frameworks, some are either too basic that require lots of custom styling and some are too bogged down with a lot of styles that don't end up getting used. Cirrus is meant to bridge a gap between boilerplate stylesheets and UI frameworks.

* :zap: **Lightweight** - Cirrus consists of a single minified file using only **10.3kb** and **17.2kb** respectively.
* :gift: **Beautiful Components** - Construct your web app or website using by composing beautifully designed components.
* :gem: **Clean** - Styles are easy to follow and written using [BEM Notation](http://getbem.com/introduction/).
* :iphone: **Responsive** - Fully responsive by design.
* :ship: **Modular** - Import what you need.
<br />

## :dart: Supported Browsers
Cirrus relies on [What CSS to prefix?](http://shouldiprefix.com/) to determine which selectors need prefixes.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE9, IE10, IE11, Edge | last 3 versions, ESR | last 3 versions | last 3 versions | last 3 versions | last 3 versions |
<br />

## :crystal_ball: What's Included
Framework components are now broken down into `core` and `ext` packages. The `core` package only contains the essentials for basic styling while `core + ext` adds specially designed components.

The `helpers` folder contains configurations, utilities, and other styles shared by both `core` and `ext`.

#### Core
* [Buttons](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/button.scss "Buttons") - Styles for the button with 3 different variations.
* [Code](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/code.scss "Code") - Style for code markup blocks.
* [Default (Base)](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/default.scss "Default") - The core of this framework.
* [Font](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/font.scss "Font") - All text styles for this framework for headers, articles, blockquotes, and paragraphs.
* [Footer](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/footer.scss "Footer") - Basic styles for setting up a page footer.
* [Forms](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/forms.scss "Forms") - Form styles for textboxes, textfields, selects, and layout.
* [Frames](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/frames.scss "Frames") - Flexible panel with header, body, and footer for layouts.
* [Header](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/header.scss "Header") - Styles for header elements including drop down menus.
* [Layout](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/layout.scss "Layout") - Rules for grids, item alignment, and layout borders.
* [Links](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/links.scss "Links") - Link styles with different effects.
* [Lists](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/lists.scss "Lists") - A simple stylesheet to simplify list UI.
* [Media](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/media.scss "Media") - Rules for styling images, videos, figures, avatars, and other media components.
* [Tables](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/spacing.scss "Tables") - Classes for margin/padding.
* [Tables](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/table.scss "Tables") - Clean designs for tables.
* [Theme](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/theme.scss "Theme") - Default colors of the framework.
* [Util](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/utils "Utils") - Designed to solve many common headaches with CSS and provide flexibility for modifying existing classes.

#### Ext
* [Animations](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/animations.scss "Animations") - Consists of animations that will work with the controls.
* [Avatar](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/avatar.scss "Avatar") - Styles for user avatars.
* [Cards](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/card.scss "Cards") - Base for card controls.
* [Grid](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/card.scss "Grid") - Experimental implementation of CSS Grid standard.
* [Modal](https://github.com/Spiderpig86/Cirrus/blob/master/src/core/modal.scss "Modal") - Styles for a pop up modal dialog.
* [Modifiers](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/modifiers.scss "Modifiers") - Classes designed for modifying text and backgrounds.
* [Pagination](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/pagination.scss "Pagination") - Design for pagination and pagination navigation links.
* [Placeholder](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/placeholder.scss "Placeholder") - Styles for a control designed to be a placeholder such as "Coming Soon" panels and so on.
* [Tabs](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tabs.scss "Tabs") - Contains styles for tab controls.
* [Tags](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tags.scss "Tags") - Chip-like controls that are helpful for listing items.
* [Tiles](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tiles.scss "Tiles") - Flexible layout used for tiling controls horizontally.
* [Toast](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/toast.scss "Toast") - A small overlay notification for websites.
* [Tooltips](https://github.com/Spiderpig86/Cirrus/blob/master/src/ext/tooltips.scss "Tooltips") - Add tooltips to any control for contextual info.
<br />

## :pager: jQuery
* jQuery is **not needed** in order to use this framework.
* You may use jQuery for adding functionality such as toggling the dropdown menu for the `Header` component on mobile devices, but you can accomplish the same thing with vanilla JavaScript.
* It is possible to use these components without jQuery in other frameworks like Angular and React by mimicking the behavior of toggling the class.
<br />

## :clap: Related Projects
| Project                                                                              | Description                                                                            |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [vue-cirrus](https://github.com/FlorianWoelki/vue-cirrus)   | Cirrus components for Vue.js with straightforward syntax                                             |
<br />

## :gem: Examples that use Cirrus
* [Polarity 9](http://polarity.x10.mx/browser "Polarity 9 Promo Page")
* [Phraze](https://phrazes.net "Phraze")
<br />

## :newspaper: License and Attribution
Cirrus is licensed under the [MIT license](https://github.com/Spiderpig86/Cirrus/blob/master/LICENSE "MIT License"). If this frame work has helped you in any way, attribution in the footer of your website would be much appreciated.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSpiderpig86%2FCirrus.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSpiderpig86%2FCirrus?ref=badge_large)

