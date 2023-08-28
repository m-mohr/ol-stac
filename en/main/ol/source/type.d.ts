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
 * @api
 */
export default class SourceType {
    static GeoTIFF: SourceType;
    static ImageStatic: SourceType;
    static PMTilesRaster: SourceType;
    static PMTilesVector: SourceType;
    static TileJSON: SourceType;
    static TileWMS: SourceType;
    static WMTS: SourceType;
    static XYZ: SourceType;
    constructor(name: any);
    name: any;
    toString(): any;
}
export type GeoTIFFSourceOptions = import("../source/GeoTIFF2.js").Options2;
export type ImageStaticSourceOptions = import("ol/source/ImageStatic.js").Options;
export type TileJSONSourceOptions = import("ol/source/TileJSON.js").Options;
export type TileWMSSourceOptions = import("ol/source/TileWMS.js").Options;
export type WMTSSourceOptions = import("ol/source/WMTS.js").Options;
export type XYZSourceOptions = import("ol/source/XYZ.js").Options;
export type SourceOptions = GeoTIFFSourceOptions | ImageStaticSourceOptions | TileJSONSourceOptions | TileWMSSourceOptions | WMTSSourceOptions | XYZSourceOptions | {
    [x: string]: any;
};
//# sourceMappingURL=type.d.ts.map