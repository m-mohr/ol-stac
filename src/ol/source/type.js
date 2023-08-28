/**
 * @module ol/source/type
 */

/**
 * @typedef {import("../source/GeoTIFF2.js").Options2} GeoTIFFSourceOptions
 */
/**
 * @typedef {import("ol/source/ImageStatic.js").Options} ImageStaticSourceOptions
 */
/**
 * @typedef {import("ol/source/TileJSON.js").Options} TileJSONSourceOptions
 */
/**
 * @typedef {import("ol/source/TileWMS.js").Options} TileWMSSourceOptions
 */
/**
 * @typedef {import("ol/source/WMTS.js").Options} WMTSSourceOptions
 */
/**
 * @typedef {import("ol/source/XYZ.js").Options} XYZSourceOptions
 */
/**
 * @typedef {GeoTIFFSourceOptions|ImageStaticSourceOptions|TileJSONSourceOptions|TileWMSSourceOptions|WMTSSourceOptions|XYZSourceOptions|Object<string, *>} SourceOptions
 */

/**
 * @classdesc
 * The source type for `getSourceOptions`.
 */
export default class SourceType {
  static GeoTIFF = new SourceType('GeoTIFF');
  static ImageStatic = new SourceType('ImageStatic');
  static PMTilesRaster = new SourceType('PMTilesRaster');
  static PMTilesVector = new SourceType('PMTilesVector');
  static TileJSON = new SourceType('TileJSON');
  static TileWMS = new SourceType('TileWMS');
  static WMTS = new SourceType('WMTS');
  static XYZ = new SourceType('XYZ');

  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name;
  }
}
