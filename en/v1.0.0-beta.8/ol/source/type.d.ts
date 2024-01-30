export default SourceType;
export type GeoTIFFSourceOptions = import("./GeoTIFF2.js").Options2;
export type ImageStaticSourceOptions = import("ol/source/ImageStatic.js").Options;
export type TileJSONSourceOptions = import("ol/source/TileJSON.js").Options;
export type TileWMSSourceOptions = import("ol/source/TileWMS.js").Options;
export type WMTSSourceOptions = import("ol/source/WMTS.js").Options;
export type XYZSourceOptions = import("ol/source/XYZ.js").Options;
export type SourceOptions = GeoTIFFSourceOptions | ImageStaticSourceOptions | TileJSONSourceOptions | TileWMSSourceOptions | WMTSSourceOptions | XYZSourceOptions | {
    [x: string]: any;
};
/**
 * @module ol/source/type
 */
/**
 * @typedef {import("./GeoTIFF2.js").Options2} GeoTIFFSourceOptions
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF-GeoTIFFSource.html}
 */
/**
 * @typedef {import("ol/source/ImageStatic.js").Options} ImageStaticSourceOptions
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html}
 */
/**
 * @typedef {import("ol/source/TileJSON.js").Options} TileJSONSourceOptions
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON-TileJSON.html}
 */
/**
 * @typedef {import("ol/source/TileWMS.js").Options} TileWMSSourceOptions
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html}
 */
/**
 * @typedef {import("ol/source/WMTS.js").Options} WMTSSourceOptions
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html}
 */
/**
 * @typedef {import("ol/source/XYZ.js").Options} XYZSourceOptions
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html}
 */
/**
 * @typedef {GeoTIFFSourceOptions|ImageStaticSourceOptions|TileJSONSourceOptions|TileWMSSourceOptions|WMTSSourceOptions|XYZSourceOptions|Object<string, *>} SourceOptions
 */
/**
 * @classdesc
 * The source type for `getSourceOptions`.
 * @api
 */
declare class SourceType {
    /**
     * GeoTiff
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF.html}
     * @api
     */
    static GeoTIFF: SourceType;
    /**
     * Static Image (`ImageStatic`)
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic.html}
     * @api
     */
    static ImageStatic: SourceType;
    /**
     * PMTilesRaster
     * @see {@link https://protomaps.com/docs/pmtiles/}
     * @api
     */
    static PMTilesRaster: SourceType;
    /**
     * GeoTiff
     * @see {@link https://protomaps.com/docs/pmtiles/}
     * @api
     */
    static PMTilesVector: SourceType;
    /**
     * TileJSON
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON.html}
     * @api
     */
    static TileJSON: SourceType;
    /**
     * WMS (`TileWMS`)
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS.html}
     * @api
     */
    static TileWMS: SourceType;
    /**
     * WMTS
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS.html}
     * @api
     */
    static WMTS: SourceType;
    /**
     * XYZ
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ.html}
     * @api
     */
    static XYZ: SourceType;
    /**
     * Creates a new SourceType.
     * @param {string} name The internal string identifier.
     * @protected
     * @api
     */
    protected constructor();
    name: string;
    /**
     * Converts to a string.
     * @return {string} The internal string identifier.
     * @api
     */
    toString(): string;
}
//# sourceMappingURL=type.d.ts.map