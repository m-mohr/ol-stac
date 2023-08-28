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
class SourceType {
    /**
     * Creates a new SourceType.
     * @param {string} name The internal string identifier.
     * @protected
     * @api
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Converts to a string.
     * @return {string} The internal string identifier.
     * @api
     */
    toString() {
        return this.name;
    }
}
/**
 * GeoTiff
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF.html}
 * @api
 */
SourceType.GeoTIFF = new SourceType('GeoTIFF');
/**
 * Static Image (`ImageStatic`)
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic.html}
 * @api
 */
SourceType.ImageStatic = new SourceType('ImageStatic');
/**
 * PMTilesRaster
 * @see {@link https://protomaps.com/docs/pmtiles/}
 * @api
 */
SourceType.PMTilesRaster = new SourceType('PMTilesRaster');
/**
 * GeoTiff
 * @see {@link https://protomaps.com/docs/pmtiles/}
 * @api
 */
SourceType.PMTilesVector = new SourceType('PMTilesVector');
/**
 * TileJSON
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON.html}
 * @api
 */
SourceType.TileJSON = new SourceType('TileJSON');
/**
 * WMS (`TileWMS`)
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS.html}
 * @api
 */
SourceType.TileWMS = new SourceType('TileWMS');
/**
 * WMTS
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS.html}
 * @api
 */
SourceType.WMTS = new SourceType('WMTS');
/**
 * XYZ
 * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ.html}
 * @api
 */
SourceType.XYZ = new SourceType('XYZ');
export default SourceType;
//# sourceMappingURL=type.js.map