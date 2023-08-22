// @ts-nocheck
// to avoid: error TS8022: JSDoc '@extends' is not attached to a class.
/**
 * @module ol/source/GeoTIFF2
 */
import GeoTIFF from 'ol/source/GeoTIFF.js';
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
 *
 * @api
 */
export default class GeoTIFF2 extends GeoTIFF {
    /**
     * @param {Options2} options Data tile options.
     */
    constructor(options) {
        super(options);
        if (options.projection) {
            this.projection = options.projection;
        }
    }
}
//# sourceMappingURL=GeoTIFF2.js.map