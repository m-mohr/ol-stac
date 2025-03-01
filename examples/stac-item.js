import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import STAC from '../src/ol/layer/STAC.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

register(proj4); // required to support source reprojection

const layer = new STAC({
  url: 'https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json',
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

layer.on('layersready', () => {
  // Assign titles for e.g. a layerswitcher
  for (const sublayer of layer.getLayersArray()) {
    const stac = sublayer.get('stac');
    let title;
    if (stac.isAsset() || stac.isLink()) {
      title = stac.getMetadata('title') || stac.getKey();
    } else {
      title = 'Footprint';
    }
    sublayer.set('title', title);
  }
});
