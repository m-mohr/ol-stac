/**
 * @module ol/util
 */

import VectorLayer from 'ol/layer/Vector.js';
import {Fill, Stroke, Style} from 'ol/style.js';
import {STAC} from 'stac-js';
import {
  fromEPSGCode,
  isRegistered as isProj4Registered,
} from 'ol/proj/proj4.js';

export const LABEL_EXTENSION =
  'https://stac-extensions.github.io/label/v1.*/schema.json';

/**
 * The default style for rendering bounds of the STAC main entities.
 * @type {Style}
 * @api
 */
export const defaultBoundsStyle = new Style({
  fill: new Fill({
    color: 'rgba(255,255,255,0.4)',
  }),
  stroke: new Stroke({
    color: '#3399CC',
    width: 3,
  }),
});

/**
 * The default style for rendering collection list children.
 * @type {Style}
 * @api
 */
export const defaultCollectionStyle = new Style({
  stroke: new Stroke({
    color: '#ff9933',
    width: 2,
  }),
});

/**
 * Get the STAC objects associated with this event, if any. Excludes API Collections.
 * @param {import('ol/MapBrowserEvent.js').default} event The asset to read the information from.
 * @param {STAC} [exclude=null] Excludes the given STAC entity from the list.
 * @return {Promise<Array<STAC>>} A list of STAC objects
 * @api
 */
export async function getStacObjectsForEvent(event, exclude = null) {
  const objects = event.map
    .getAllLayers()
    .filter((layer) => {
      if (
        layer instanceof VectorLayer &&
        layer.get('bounds') === true &&
        layer.get('stac') instanceof STAC
      ) {
        if (exclude) {
          const stac = layer.get('stac');
          if (stac.equals(exclude)) {
            return false;
          }
        }
        const features = layer
          .getSource()
          .getFeaturesAtCoordinate(event.coordinate);
        return features.length > 0;
      }
      return false;
    })
    .map((layer) => layer.get('stac'));
  // Make sure we return no duplicates
  return [...new Set(objects)];
}

/**
 * Get the source info for the GeoTiff from the asset.
 * @param {import('stac-js').Asset} asset The asset to read the information from.
 * @param {Array<number>} bands The (one-based) bands to show.
 * @return {import('ol/source/GeoTIFF.js').SourceInfo} The source info for the GeoTiff asset
 */
export function getGeoTiffSourceInfoFromAsset(asset, bands) {
  const sourceInfo = {
    url: asset.getAbsoluteUrl(),
  };

  let source = asset;
  // If there's just one band, we can also read the information from there.
  if (asset.getBands().length === 1) {
    source = asset.getBand(0);
  }

  // TODO: It would be useful if OL would allow min/max values per band
  const {minimum, maximum} = source.getMinMaxValues();
  if (typeof minimum === 'number') {
    sourceInfo.min = minimum;
  }
  if (typeof maximum === 'number') {
    sourceInfo.max = maximum;
  }

  // TODO: It would be useful if OL would allow multiple no-data values
  const nodata = source.getNoDataValues();
  if (nodata.length > 0) {
    sourceInfo.nodata = nodata[0];
  }

  if (bands.length > 0) {
    sourceInfo.bands = bands;
  }

  return sourceInfo;
}

/**
 * Gets the projection from the asset or link.
 * @param {import('stac-js').STACReference} reference The asset or link to read the information from.
 * @param {import('ol/proj.js').ProjectionLike} defaultProjection A default projection to use.
 * @return {Promise<import('ol/proj.js').ProjectionLike>} The projection, if any.
 */
export async function getProjection(reference, defaultProjection = undefined) {
  let projection = defaultProjection;
  if (isProj4Registered()) {
    // TODO: It would be great to handle WKT2 and PROJJSON, but is not supported yet by proj4js.
    const code = reference.getMetadata('proj:code');
    if (code) {
      try {
        if (code.startsWith('EPSG:')) {
          const id = parseInt(code.replace('EPSG:', ''), 10);
          projection = await fromEPSGCode(id);
        }
      } catch (_) {
        // pass
      }
    }
  }
  return projection;
}

/**
 * Returns the style for the footprint.
 * Removes the fill if anything is meant to be shown in the bounds.
 *
 * @param {Style} [originalStyle] The original style for the footprint.
 * @param {import('./layer/STAC.js').default} [layerGroup] The associated STAC layergroup to check.
 * @return {Style} The adapted style for the footprint.
 * @api
 */
export function getBoundsStyle(originalStyle, layerGroup) {
  const style = originalStyle.clone();
  if (!layerGroup.hasOnlyBounds()) {
    style.setFill(null);
  }
  return style;
}

/**
 * Get a URL from a web-map-link that is specific enough, i.e.
 * replaces any occurances of {s} if possible, otherwise returns null.
 * @param {import('./layer/STAC.js').Link} link The web map link.
 * @return {string|null} Specific URL
 */
export function getSpecificWebMapUrl(link) {
  let url = link.href;
  if (url.includes('{s}')) {
    if (
      Array.isArray(link['href:servers']) &&
      link['href:servers'].length > 0
    ) {
      const i = (Math.random() * link['href:servers'].length) | 0;
      url = url.replace('{s}', link['href:servers'][i]);
    } else {
      return null;
    }
  }
  return url;
}
