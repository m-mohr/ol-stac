/**
 * @module ol/source/type
 */

/**
 * The source type for `getSourceOptions`.
 * @enum {string}
 * @api
 */
const SourceType = {
  GeoTIFF: 'GeoTIFF',
  ImageStatic: 'ImageStatic',
  PMTilesRaster: 'PMTilesRaster',
  PMTilesVector: 'PMTilesVector',
  TileJSON: 'TileJSON',
  TileWMS: 'TileWMS',
  WMTS: 'WMTS',
  XYZ: 'XYZ',
};

export default SourceType;
