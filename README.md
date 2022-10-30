<p align="center"><img src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png" width="200"></p>
<h1 align="center">Cirrus</h1>

<div align="center">

  [![v.0.7.1](https://img.shields.io/badge/cirrus-0.7.1-blue.svg)](https://github.com/Spiderpig86/Cirrus)
  [![MIT License](https://img.shields.io/github/license/Spiderpig86/Cirrus.svg)](https://opensource.org/licenses/MIT)
  [![Github Actions](https://github.com/Spiderpig86/Cirrus/actions/workflows/ci.yml/badge.svg)](https://github.com/Spiderpig86/Cirrus/actions)
  [![Known Vulnerabilities](https://snyk.io/test/github/Spiderpig86/Cirrus/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Spiderpig86/Cirrus?targetFile=package.json)
  [![Known Vulnerabilities](https://img.shields.io/npm/dm/cirrus-ui.svg)](https://www.npmjs.com/package/cirrus-ui)
  [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
  [![Featured on Openbase](https://badges.openbase.com/js/featured/cirrus-ui.svg?token=aDr+bdA+d7gMXIHh7XKd6fQiB1OgYBjxxvA2YxyKqP8=)](https://openbase.com/js/cirrus-ui?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
  [![](https://data.jsdelivr.com/v1/package/npm/cirrus-ui/badge)](https://www.jsdelivr.com/package/npm/cirrus-ui)

</div>

<p align="center">
A component-and-utility-centric SCSS framework designed for rapid prototyping. Use beautiful pre-built components to bootstrap your next project and utility classes to polish your final design.
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

## 📦 Install

#### Npm
```sh
npm install cirrus-ui
```

#### Yarn

```sh
yarn add cirrus-ui
```

#### CDN

For CDNs, it is recommended to attach a specific versions to the URLs to avoid unexpected updates to maintain consistency in your project.

##### Unpkg
```html
<link rel="stylesheet" href="https://unpkg.com/cirrus-ui">
```

##### JsDelivr

```html
<link rel="stylesheet" href="https://www.jsdelivr.com/package/npm/cirrus-ui">
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
  - Accordion
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
  - Blur
  - Border
  - Clearfix
  - Display
  - Flex
  - Misc
  - Opacity
  - Overflow
  - Position
  - Shadow
  - Transitions
  - Z-Index

## :clap: Related Projects
| Project                                                   | Description                                                                           |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [vue-cirrus](https://github.com/FlorianWoelki/vue-cirrus) | Cirrus components for Vue.js with straightforward syntax                              |
| cirrus-blocks                                             | A collection of beautiful components built with Cirrus ready to be copied and pasted. |
| [cirrus-reset](https://github.com/Cirrus-UI/Cirrus-Reset) | A simple CSS reset from Cirrus.                                                       |

## :newspaper: License and Attribution
Cirrus is licensed under the [MIT license](https://github.com/Spiderpig86/Cirrus/blob/master/LICENSE "MIT License"). If this frame work has helped you in any way, attribution in the footer of your website would be much appreciated.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSpiderpig86%2FCirrus.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSpiderpig86%2FCirrus?ref=badge_large)

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide](https://github.com/Spiderpig86/Cirrus/blob/master/.github/CONTRIBUTING.yml) and improve Cirrus together.

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/Spiderpig86/Cirrus/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/Spiderpig86/Cirrus/pulls) or as [GitHub issues](https://github.com/Spiderpig86/Cirrus/issues). If you'd like to improve code, check out the [Development Instructions](https://www.cirrus-ui.com/getting-started/developing) and have a good time! :)

When creating issues, please follow the templates provided for the issue type you selected. The added detail and formatting will help me understand and resolve your issue faster.

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/r/Spiderpig86/Cirrus)

## ❤️ Sponsors and Backers

I would greatly appreciate any support for the continued development of this project. :smile:

[![](https://opencollective.com/cirrus/tiers/sponsors.svg?avatarHeight=36)](https://opencollective.com/cirrus#support)

[![](https://opencollective.com/cirrus/tiers/backers.svg?avatarHeight=36)](https://opencollective.com/cirrus#support)
