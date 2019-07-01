# vue-mapkit

A Vue library for Apple Mapkit. Inspired by [thomas-alrek/MapkitVue](https://github.com/thomas-alrek/MapkitVue).

>Plugin doesn't contain any component wrappers. You should use mapkit directly.

## Installation

```bash
# Yarn
yarn add vue-mapkit
# or NPM
npm install vue-mapkit --save
```

## Usage

#### Initialization

Please follow the official [MapkitJS documentation](https://developer.apple.com/maps/web/) to setup your API credentials.

```js
import Vue from 'vue'
import VueMapkit from 'vue-mapkit'

Vue.use(VueMapkit, {
    authorizationCallback(done) {
        // provide mapkit jwt here
        done(process.env.VUE_APP_MAPKIT_JWT)
    },
    // you can use options from mapkit documentation as well
    language: 'ja',
})
```

#### Draw a map

Now you can draw a map in a component.

```js
import { createMapkit } from 'vue-mapkit'

export default {
  computed: {
      map_id() {
          return `map-${this._uid}`
      },
    },
    mounted() {
      createMapkit(this.map_id, { language: 'ja' }).then(map => {
        // use `map` to perform any changes
      })
    }
  }

}
```

