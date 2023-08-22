/**
 * Get the STAC objects associated with this event, if any. Excludes API Collections.
 * @param {import('ol/MapBrowserEvent.js').default} event The asset to read the information from.
 * @return {Promise<Array<STAC>>} A list of STAC objects
 * @api
 */
export function getStacObjectsForEvent(event: import("ol/MapBrowserEvent.js").default<any>): Promise<Array<STAC>>;
/**
 * Get the source info for the GeoTiff from the asset.
 * @param {import('stac-js').Asset} asset The asset to read the information from.
 * @param {Array<number>} bands The (one-based) bands to show.
 * @return {import('ol/source/GeoTIFF.js').SourceInfo} The source info for the GeoTiff asset
 */
export function getGeoTiffSourceInfoFromAsset(asset: any, bands: Array<number>): import('ol/source/GeoTIFF.js').SourceInfo;
/**
 * Gets the projection from the asset or link.
 * @param {import('stac-js').STACReference} reference The asset or link to read the information from.
 * @param {import('ol/proj.js').ProjectionLike} defaultProjection A default projection to use.
 * @return {Promise<import('ol/proj.js').ProjectionLike>} The projection, if any.
 */
export function getProjection(reference: any, defaultProjection?: import('ol/proj.js').ProjectionLike): Promise<import('ol/proj.js').ProjectionLike>;
/**
 * Returns the style for the footprint.
 * Removes the fill if anything is meant to be shown in the bounds.
 *
 * @param {Style} [originalStyle] The original style for the footprint.
 * @param {import('./layer/STAC.js').default} [layerGroup] The associated STAC layergroup to check.
 * @return {Style} The adapted style for the footprint.
 * @api
 */
export function getBoundsStyle(originalStyle?: Style | undefined, layerGroup?: import("./layer/STAC.js").default | undefined): Style;
/**
 * Get a URL from a web-map-link that is specific enough, i.e.
 * replaces any occurances of {s} if possible, otherwise returns null.
 * @param {import('./layer/STAC.js').Link} link The web map link.
 * @return {string|null} Specific URL
 */
export function getSpecificWebMapUrl(link: any): string | null;
/**
 * Gets the WMTS capabilities from the given web-map-links URL.
 * @param {string} url Base URL for the WMTS
 * @return {Promise<Object|null>} Resolves with the WMTS Capabilities object
 */
export function getWmtsCapabilities(url: string): Promise<any | null>;
/**
 * The default style for rendering bounds of the STAC main entities.
 * @type {Style}
 * @api
 */
export const defaultBoundsStyle: Style;
/**
 * The default style for rendering collection list children.
 * @type {Style}
 * @api
 */
export const defaultCollectionStyle: Style;
import { Style } from 'ol/style.js';
//# sourceMappingURL=util.d.ts.map