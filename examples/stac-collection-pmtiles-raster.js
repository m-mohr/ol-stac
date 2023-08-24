import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import STAC from '../src/ol/layer/STAC.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

register(proj4); // required to support source reprojection

const layer = new STAC({
  displayWebMapLink: 'pmtiles',
  data: {
    'stac_version': '1.0.0',
    'stac_extensions': [
      'https://stac-extensions.github.io/web-map-links/v1.1.0/schema.json',
    ],
    'type': 'Collection',
    'id': 'Mt. Whitney',
    'description': 'Topographic raster map as PMTiles for Mt. Whitney, US',
    'license': 'proprietary',
    'attribution': 'USGS',
    'extent': {
      'spatial': {
        'bbox': [[-118.31982, 36.56109, -118.26069, 36.59301]],
      },
      'temporal': {
        'interval': [[null, null]],
      },
    },
    'links': [
      {
        'href':
          'https://protomaps.github.io/PMTiles/usgs-mt-whitney-8-15-webp-512.pmtiles',
        'rel': 'pmtiles',
        'type': 'application/vnd.pmtiles',
      },
    ],
  },
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
const view = map.getView();
view.fit(layer.getExtent());
