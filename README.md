<h3 align="center">
  <img src="graphics/logo.png?raw=true" alt="Plattar Logo" width="600">
</h3>

[![install size](https://packagephobia.com/badge?p=@plattar/plattar-api)](https://packagephobia.com/result?p=@plattar/plattar-api)
[![Minified](https://badgen.net/bundlephobia/min/@plattar/plattar-api)](https://bundlephobia.com/result?p=@plattar/plattar-api)
[![MinZipped](https://badgen.net/bundlephobia/minzip/@plattar/plattar-api)](https://bundlephobia.com/result?p=@plattar/plattar-api)
[![NPM](https://img.shields.io/npm/v/@plattar/plattar-api)](https://www.npmjs.com/package/@plattar/plattar-api)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/fe92068bfbef4a1aae14ae55ecd297d1)](https://www.codacy.com/gh/Plattar/plattar-api?utm_source=github.com&utm_medium=referral&utm_content=Plattar/plattar-api&utm_campaign=Badge_Grade)
[![License](https://img.shields.io/npm/l/@plattar/plattar-api)](https://www.npmjs.com/package/@plattar/plattar-api)

_plattar-api_ allows interfacing with the [Plattar](https://www.plattar.com) API.

### _Quick Use_

* ES2015 & ES2019 Builds via [jsDelivr](https://www.jsdelivr.com/)

```javascript
// Minified Version ES2015 & ES2019 (Latest)
https://cdn.jsdelivr.net/npm/@plattar/plattar-api/build/es2015/plattar-api.min.js
https://cdn.jsdelivr.net/npm/@plattar/plattar-api/build/es2019/plattar-api.min.js

// Standard Version ES2015 & ES2019 (Latest)
https://cdn.jsdelivr.net/npm/@plattar/plattar-api/build/es2015/plattar-api.js
https://cdn.jsdelivr.net/npm/@plattar/plattar-api/build/es2019/plattar-api.js
```

### _Installation_

*   Install using [npm](https://www.npmjs.com/package/@plattar/plattar-api)

``` console
npm install @plattar/plattar-api
```

### _Building For Browsers_

*   Generate ES6 minified JS

``` console
cd plattar-api
npm install
npm run build
```

### _How to Use_

*   Fetch a project from the Plattar API.

``` javascript
const {
    Project
} = require('@plattar/plattar-api');

const project = new Project('your-project-id');

project.get().then((proj) => {
    // do something with a project
}).catch((error) => {
    console.error(error);
});
```

*   Plattar API supports relationship chaining using a single request. Fetch a project from the Plattar API that includes scenes and pages. The _Relationships_ component has a number of useful queries that can be performed.

``` javascript
const {
    Project,
    Scene,
    Page
} = require('@plattar/plattar-api');

const project = new Project('your-project-id');

// Tell the Plattar API to fetch your Scenes and Pages
// as part of the Project request
project.include(Scene, Page);

project.get().then((proj) => {
    // get a list of all scenes that belong to your project
    const scenes = proj.relationships.filter(Scene);
    // get a list of all pages that belong to your project
    const pages = proj.relationships.filter(Page);
    // get a specific scene that belongs to your project
    const myScene = proj.relationships.find(Scene, 'your-scene-id');
    // get a specific page that belongs to your project
    const myPage = proj.relationships.find(Page, 'your-page-id');
}).catch((error) => {
    console.error(error);
});
```

*   Plattar API also supports multiple relationship chaining using a single request. In this example we fetch a Project with Scenes and Pages aswell as SceneImage that belongs to a Scene.

``` javascript
const {
    Project,
    Scene,
    Page,
    SceneImage
} = require('@plattar/plattar-api');

const project = new Project('your-project-id');

// Tell the Plattar API to fetch your Scenes, Pages and
// to include SceneImage as part of Scenes
project.include(Page, Scene.include(SceneImage));

project.get().then((proj) => {
    // get a list of all scenes that belong to your project
    const scenes = proj.relationships.filter(Scene);

    scenes.forEach((scene) => {
        // grab the SceneImage that belongs to a Scene
        const sceneImages = scene.relationships.filter(SceneImage);
    });
}).catch((error) => {
    console.error(error);
});
```

*   Sometimes, we don't want to include everything as part of a single request. We can chain requests based on logic.

``` javascript
const {
    Project,
    Scene,
    SceneImage
} = require('@plattar/plattar-api');

const project = new Project('your-project-id');

// Tell the Plattar API to fetch your scenes.
project.include(Scene);

project.get().then((proj) => {
    // get a list of all scenes that belong to your project
    const scenes = proj.relationships.filter(Scene);

    scenes.forEach((scene) => {
        // grab the SceneImage that belongs to a Scene
        const sceneImage = scene.relationships.find(SceneImage);

        // at this point, since SceneImage data was not fetched, we
        // can grab it directly
        sceneImage.get().then((sceneImage) => {
            // do something with sceneImage
        }).catch((error) => {
            console.error(error);
        });
    });
}).catch((error) => {
    console.error(error);
});
```
