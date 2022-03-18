<p align="center"><img src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png" width="200"></p>
<h1 align="center">Cirrus</h1>

<div align="center">

  [![v.0.7.0](https://img.shields.io/badge/cirrus-0.7.0-blue.svg)](https://github.com/Spiderpig86/Cirrus)
  [![MIT License](https://img.shields.io/github/license/Spiderpig86/Cirrus.svg)](https://opensource.org/licenses/MIT)
  [![Github Actions](https://github.com/Spiderpig86/Cirrus/actions/workflows/ci.yml/badge.svg)](https://github.com/Spiderpig86/Cirrus/actions)
  [![Known Vulnerabilities](https://snyk.io/test/github/Spiderpig86/Cirrus/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Spiderpig86/Cirrus?targetFile=package.json)
  [![Known Vulnerabilities](https://img.shields.io/npm/dm/cirrus-ui.svg)](https://www.npmjs.com/package/cirrus-ui)
  [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

</div>

<p align="center">
A fully responsive and comprehensive SCSS framework with beautiful controls and simplistic structure. Cirrus is designed to be adaptable to existing themes or when starting fresh.
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


## :sparkles: Features

* :art: **Beautiful Components** - Beautifully designed components come right out of the box for rapid prototyping.
* :balloon: **Sass First** - Forget bundling tons of JavaScript with each component. All styles require no JS for interactions/functionality (see Modals, Dropdowns, etc.).
* :rainbow: **Configuration at its Core** - Add additional components, remove utility classes, disable features, etc. Cirrus takes a generative approach to building your stylesheets. 
* :zap: **Lightweight** - A large amount of features with a minimal footprint.
* :iphone: **Responsive** - Fully responsive by design.


## :dart: Supported Browsers
Cirrus relies on [What CSS to prefix?](http://shouldiprefix.com/) to determine which selectors need prefixes.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 3 versions, ESR | last 3 versions | last 3 versions | last 3 versions | last 3 versions |

## :box: Install

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
<link rel="stylesheet" href="https://unpkg.com/cirrus-ui">
```

Check out the [Setup](https://www.cirrus-ui.com/getting-started/setup) guide for more information.

## :hammer: Usage

#### Basic Page

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge;" />
    <link href="https://unpkg.com/cirrus-ui" type="text/css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
  </head>
  <body>
    <h1>👋Hello World</h1>
  </body>
</html>
```

#### React

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import 'cirrus-ui'; // You can import it here if you want

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
```

#### Vue

```js
import Vue from 'vue';
import App from './App.vue';

import 'cirrus-ui';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
```

#### Svelte

```js
import App from "./App.svelte";
import "cirrus-ui";

const app = new App({
    target: document.body
});

export default app;
```

#### Sass/Scss

```scss
@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            ABSOLUTES,
        ),
        opacity: null, // Disable default opacity classes
        extend: (
            // Add your own
            opacity: (
                25: .25,
                50: .5,
                75: .75,
            )
        )
    ),
);
```

Check out the [Setup](https://www.cirrus-ui.com/getting-started/setup) guide for more information.

## :computer: Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Spiderpig86/Cirrus)

Or clone locally:

```bash
$ git clone git@github.com:Spiderpig86/Cirrus.git
$ cd cirrus
$ yarn install
$ yarn watch
```

## :crystal_ball: What's Included

- **Base** - base styles.
  - Animations
  - Default
  - Font
  - Grid
  - Layout
  - Media
  - Modifiers
  - Spacing
- **Builds** - build files for `core` and `ext`.
- **Components** - framework components.
  - Avatar
  - Breadcrumb
  - Button
  - Card
  - Code
  - Footer
  - Forms
  - Frames
  - Header
  - Links
  - Lists
  - Modal
  - Pagination
  - Placeholder
  - Progress
  - Table
  - Tabs
  - Tags
  - Tiles
  - Toast
  - Tooltips
- **Internal** - internal APIs, functions, constants, etc.
- **Utils** - utility classes.
  - Absolute
  - Clearfix
  - Display
  - Flex
  - Misc
  - Opacity
  - Overflow
  - Position
  - Round
  - Shadow
  - Z-Index

## :clap: Related Projects
| Project                                                                              | Description                                                                            |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [vue-cirrus](https://github.com/FlorianWoelki/vue-cirrus)   | Cirrus components for Vue.js with straightforward syntax                                             |

## :gem: Examples that use Cirrus
* [Polarity 9](http://polarity.x10.mx/browser "Polarity 9 Promo Page")
* [Phraze](https://phrazes.net "Phraze")

## :newspaper: License and Attribution
Cirrus is licensed under the [MIT license](https://github.com/Spiderpig86/Cirrus/blob/master/LICENSE "MIT License"). If this frame work has helped you in any way, attribution in the footer of your website would be much appreciated.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSpiderpig86%2FCirrus.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSpiderpig86%2FCirrus?ref=badge_large)

