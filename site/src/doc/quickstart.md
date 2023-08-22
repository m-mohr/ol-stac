---
title: Quick Start
layout: default.hbs
---

# Quick Start

To use OL STAC in your application, the simplest way is to add it as a dependency to it:
```bash
npm install ol-stac
```

Afterwards, you can import the STAC Layer (Group) into your application code:
```js
import STACLayer from 'ol-stac';
```

Then create the layer with either a URL (option `url` as in th example) or inline JSON data (option `data`):
```js
const stac = new STAC({
  url: 'https://example.com/path/to/stac/item.json',
});
```

Now you can add the STAC layer to your map.
I'm assuming your OpenLayers map variable is named `map`.
```js
map.addLayer(stac);
```

To center the map on the STAC bounds, you should add the following:
```js
stac.on('sourceready', () => {
  map.getView().fit(stac.getExtent());
});
```

If you need support for reprojection, you also need to make proj4 available:
```js
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';
register(proj4);
```

For full code examples, please see the **[examples](/en/latest/examples/)**.
