import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import STAC from '../src/ol/layer/STAC.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

register(proj4); // required to support source reprojection

const layer = new STAC({
  url: 'https://raw.githubusercontent.com/stac-extensions/label/refs/heads/main/examples/spacenet-roads/roads_item.json',
  displayGeoTiffByDefault: true,
});

const background = new TileLayer({
  source: new OSM(),
});

const map = new Map({
  target: 'map',
  layers: [background, layer],
  view: new View({
    center: [0, 0],
    zoom: 0,
  }),
});

layer.on('sourceready', () => {
  const view = map.getView();
  view.fit(layer.getExtent());
});
