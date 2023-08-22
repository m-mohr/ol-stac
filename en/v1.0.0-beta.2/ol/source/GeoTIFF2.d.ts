/**
 * @typedef {import("ol/source/GeoTIFF.js").Options} GeoTIFFSourceOptions
 */
/**
 * @typedef {import("ol/source/GeoTIFF.js").SourceInfo} SourceInfo
 */
/**
 * @typedef {import("ol/source/GeoTIFF.js").Options} Options
 */
/**
 * @typedef {Object} Options2
 * @extends Options
 * @property {import("ol/proj.js").ProjectionLike} [projection] Source projection.  If not provided, the GeoTIFF metadata
 */
/**
 * @classdesc
 * A source for working with GeoTIFF data.
 *
 * Available for backward compatibility with ol <= 7.5.1
 */
export default class GeoTIFF2 extends GeoTIFF {
    /**
     * @param {Options2} options Data tile options.
     */
    constructor(options: Options2);
    projection: any;
}
export type GeoTIFFSourceOptions = import("ol/source/GeoTIFF.js").Options;
export type SourceInfo = import("ol/source/GeoTIFF.js").SourceInfo;
export type Options = import("ol/source/GeoTIFF.js").Options;
export type Options2 = any;
import GeoTIFF from 'ol/source/GeoTIFF.js';
//# sourceMappingURL=GeoTIFF2.d.ts.map