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
class SourceType {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return this.name;
    }
}
SourceType.GeoTIFF = new SourceType('GeoTIFF');
SourceType.ImageStatic = new SourceType('ImageStatic');
SourceType.PMTilesRaster = new SourceType('PMTilesRaster');
SourceType.PMTilesVector = new SourceType('PMTilesVector');
SourceType.TileJSON = new SourceType('TileJSON');
SourceType.TileWMS = new SourceType('TileWMS');
SourceType.WMTS = new SourceType('WMTS');
SourceType.XYZ = new SourceType('XYZ');
export default SourceType;
//# sourceMappingURL=type.js.map