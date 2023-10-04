import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import STAC from '../src/ol/layer/STAC.js';
import Style, { createDefaultStyle } from 'ol/style/Style.js'
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

register(proj4); // required to support source reprojection

const layerProperties = {
  'roads': {
    'type': {
      'title': 'Street Type',
      'type': 'string',
      'enum': ['trunk', 'primary', 'secondary'],
    },
    'lanes': {
      'title': 'Number of Lanes',
      'type': 'integer',
      'minimum': 1,
      'maximum': 10,
    },
    'name': {
      'title': 'Street Name',
      'type': 'string',
    },
    'sidewalks': {
      'title': 'Has Sidewalks',
      'type': 'boolean',
    },
  },
};

const layer = new STAC({
  displayWebMapLink: 'pmtiles',
  data: {
    'stac_version': '1.0.0',
    'stac_extensions': [
      'https://stac-extensions.github.io/web-map-links/v1.2.0/schema.json',
    ],
    'type': 'Collection',
    'id': 'Firenze',
    'description': 'Vector data as PMTiles for Firenze, Italy',
    'license': 'ODbL',
    'attribution': '© OpenStreetMap Contributors',
    'extent': {
      'spatial': {
        'bbox': [[11.154026, 43.7270125, 11.3289395, 43.8325455]],
      },
      'temporal': {
        'interval': [['2023-01-18T07:49:39Z', '2023-01-18T07:49:39Z']],
      },
    },
    'links': [
      {
        'href':
          'https://protomaps.github.io/PMTiles/protomaps(vector)ODbL_firenze.pmtiles',
        'rel': 'pmtiles',
        'type': 'application/vnd.pmtiles',
        'title': 'Firenze Roads Preview',
        'pmtiles:layer_properties': layerProperties,
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

const form = document.getElementById('filter');
form.addEventListener('submit', (event) => {
  const layerName = document.getElementById('layer').value;
  const propName = document.getElementById('key').value;
  const propValue = document.getElementById('value').value;
  console.log({layerName, propName, propValue});

  layer.setPmTilesStyle((feature, resolution) => {
    // console.log(feature);
    let show = true;
    if (show && layerName) {
      show = Boolean(feature.get('layer') === layerName);
    }
    if (show && propName && propValue) {
      show = Boolean(feature.get(propName) === propValue);
    }
    if (show) {
      return createDefaultStyle(feature, resolution);
    }
    return new Style({});
  });

  event.preventDefault();
});
form.addEventListener('reset', (event) => {
  layer.setPmTilesStyle(createDefaultStyle);
  event.preventDefault();
});
