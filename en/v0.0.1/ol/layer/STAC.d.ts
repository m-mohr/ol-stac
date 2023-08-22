export default STACLayer;
export type Extent = import("ol/extent.js").Extent;
export type GeoTIFFSourceOptions = import("../source/GeoTIFF2.js").Options2;
export type ImageStaticSourceOptions = import("ol/source/ImageStatic.js").Options;
export type Link = any;
export type STACObject = any;
export type Style = import('ol/style.js').Style;
export type XYZSourceOptions = import("ol/source/XYZ.js").Options;
export type Options = {
    /**
     * The STAC URL. Any of `url` and `data` must be provided.
     * Can also be used as url for data, if it is absolute and doesn't contain a self link.
     */
    url?: string | undefined;
    /**
     * The STAC metadata. Any of `url` and `data` must be provided.
     * `data` take precedence over `url`.
     */
    data?: STAC | Asset | any;
    /**
     * The selector for the assets to be rendered,
     * only for STAC Items and Collections.
     * This can be an array of strings corresponding to asset keys or Asset objects.
     * null shows the default asset, an empty array shows no asset.
     */
    assets?: any[] | null | undefined;
    /**
     * The (one-based) bands to show.
     */
    bands?: number[] | undefined;
    /**
     * Optional function that can be used to configure the underlying GeoTIFF sources. The function can do any additional work
     * and return the completed options or a promise for the same. The function will be called with the current source options
     * and the STAC Asset.
     */
    getGeoTIFFSourceOptions?: ((arg0: GeoTIFFSourceOptions, arg1: Asset) => (GeoTIFFSourceOptions | Promise<GeoTIFFSourceOptions>)) | undefined;
    /**
     * Optional function that can be used to configure the underlying ImageStatic sources. The function can do any additional work
     * and return the completed options or a promise for the same. The function will be called with the current source options
     * and the STAC Asset or Link.
     */
    getImageStaticSourceOptions?: ((arg0: ImageStaticSourceOptions, arg1: (Asset | Link)) => (ImageStaticSourceOptions | Promise<ImageStaticSourceOptions>)) | undefined;
    /**
     * Optional function that can be used to configure the underlying XYZ sources that displays imagery. The function can do any
     * additional work and return the completed options or a promise for the same. The function will be called with the current
     * source options and the STAC Asset or Link.
     */
    getXYZSourceOptions?: ((arg0: XYZSourceOptions, arg1: (Asset | Link)) => (XYZSourceOptions | Promise<XYZSourceOptions>)) | undefined;
    /**
     * Allow to choose non-cloud-optimized GeoTiffs as default image to show,
     * which might not work well for larger files or larger amounts of files.
     */
    displayGeoTiffByDefault?: boolean | undefined;
    /**
     * Allow to display images that a browser can display (e.g. PNG, JPEG),
     * usually assets with role `thumbnail` or the link with relation type `preview`.
     * The previews are usually not covering the full extents and as such may be placed incorrectly on the map.
     * For performance reasons, it is recommended to enable this option if you pass in STAC API Items.
     */
    displayPreview?: boolean | undefined;
    /**
     * Allow to display COGs and, if `displayGeoTiffByDefault` is enabled, GeoTiffs,
     * usually the assets with role `overview` or `visual`.
     */
    displayOverview?: boolean | undefined;
    /**
     * Allow to display a layer based on the information provided through the
     * web map links extension. It is only used if no other data is shown. You can set a specific type of
     * web map link (`tilejson`, `wms`, `wmts`, `xyz`), let OpenLayers choose (`true`) or disable the functionality (`false`).
     */
    displayWebMapLink?: string | boolean | undefined;
    /**
     * The style for the overall bounds / footprint.
     */
    boundsStyle?: import("ol/style/Style.js").default | undefined;
    /**
     * The style for individual items in a list of STAC Items or Collections.
     */
    collectionStyle?: import("ol/style/Style.js").default | undefined;
    /**
     * For thumbnails: The `crossOrigin` attribute for loaded images / tiles.
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
     */
    crossOrigin?: string | null | undefined;
    /**
     * A function that generates a URL template for a tile server (XYZ),
     * which will be used instead of the client-side GeoTIFF rendering (except if `useTileLayerAsFallback` is `true`).
     */
    buildTileUrlTemplate?: ((arg0: Asset) => string | null) | undefined;
    /**
     * Uses the given URL template only when the client-side GeoTIFF rendering fails.
     */
    useTileLayerAsFallback?: boolean | undefined;
    /**
     * Opacity (0, 1).
     */
    opacity?: number | undefined;
    /**
     * Visibility.
     */
    visible?: boolean | undefined;
    /**
     * The bounding extent for layer rendering.  The layer will not be
     * rendered outside of this extent.
     */
    extent?: import("ol/extent.js").Extent | undefined;
    /**
     * The z-index for layer rendering.  At rendering time, the layers
     * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
     * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
     * method was used.
     */
    zIndex?: number | undefined;
    /**
     * The minimum resolution (inclusive) at which this layer will be
     * visible.
     */
    minResolution?: number | undefined;
    /**
     * The maximum resolution (exclusive) below which this layer will
     * be visible.
     */
    maxResolution?: number | undefined;
    /**
     * The minimum view zoom level (exclusive) above which this layer will be
     * visible.
     */
    minZoom?: number | undefined;
    /**
     * The maximum view zoom level (inclusive) at which this layer will
     * be visible.
     */
    maxZoom?: number | undefined;
};
/**
 * @typedef {import("ol/extent.js").Extent} Extent
 */
/**
 * @typedef {import("../source/GeoTIFF2.js").Options2} GeoTIFFSourceOptions
 */
/**
 * @typedef {import("ol/source/ImageStatic.js").Options} ImageStaticSourceOptions
 */
/**
 * @typedef {import("stac-js").Link} Link
 */
/**
 * @typedef {import("stac-js").STACObject} STACObject
 */
/**
 * @typedef {import('ol/style.js').Style} Style
 */
/**
 * @typedef {import("ol/source/XYZ.js").Options} XYZSourceOptions
 */
/**
 * @typedef {Object} Options
 * @property {string} [url] The STAC URL. Any of `url` and `data` must be provided.
 * Can also be used as url for data, if it is absolute and doesn't contain a self link.
 * @property {STAC|Asset|Object} [data] The STAC metadata. Any of `url` and `data` must be provided.
 * `data` take precedence over `url`.
 * @property {Array<string|Asset>|null} [assets=null] The selector for the assets to be rendered,
 * only for STAC Items and Collections.
 * This can be an array of strings corresponding to asset keys or Asset objects.
 * null shows the default asset, an empty array shows no asset.
 * @property {Array<number>} [bands] The (one-based) bands to show.
 * @property {function(GeoTIFFSourceOptions, Asset):(GeoTIFFSourceOptions|Promise<GeoTIFFSourceOptions>)} [getGeoTIFFSourceOptions]
 * Optional function that can be used to configure the underlying GeoTIFF sources. The function can do any additional work
 * and return the completed options or a promise for the same. The function will be called with the current source options
 * and the STAC Asset.
 * @property {function(ImageStaticSourceOptions, (Asset|Link)):(ImageStaticSourceOptions|Promise<ImageStaticSourceOptions>)} [getImageStaticSourceOptions]
 * Optional function that can be used to configure the underlying ImageStatic sources. The function can do any additional work
 * and return the completed options or a promise for the same. The function will be called with the current source options
 * and the STAC Asset or Link.
 * @property {function(XYZSourceOptions, (Asset|Link)):(XYZSourceOptions|Promise<XYZSourceOptions>)} [getXYZSourceOptions]
 * Optional function that can be used to configure the underlying XYZ sources that displays imagery. The function can do any
 * additional work and return the completed options or a promise for the same. The function will be called with the current
 * source options and the STAC Asset or Link.
 * @property {boolean} [displayGeoTiffByDefault=false] Allow to choose non-cloud-optimized GeoTiffs as default image to show,
 * which might not work well for larger files or larger amounts of files.
 * @property {boolean} [displayPreview=false] Allow to display images that a browser can display (e.g. PNG, JPEG),
 * usually assets with role `thumbnail` or the link with relation type `preview`.
 * The previews are usually not covering the full extents and as such may be placed incorrectly on the map.
 * For performance reasons, it is recommended to enable this option if you pass in STAC API Items.
 * @property {boolean} [displayOverview=true] Allow to display COGs and, if `displayGeoTiffByDefault` is enabled, GeoTiffs,
 * usually the assets with role `overview` or `visual`.
 * @property {string|boolean} [displayWebMapLink=false] Allow to display a layer based on the information provided through the
 * web map links extension. It is only used if no other data is shown. You can set a specific type of
 * web map link (`tilejson`, `wms`, `wmts`, `xyz`), let OpenLayers choose (`true`) or disable the functionality (`false`).
 * @property {Style} [boundsStyle] The style for the overall bounds / footprint.
 * @property {Style} [collectionStyle] The style for individual items in a list of STAC Items or Collections.
 * @property {null|string} [crossOrigin] For thumbnails: The `crossOrigin` attribute for loaded images / tiles.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {function(Asset):string|null} [buildTileUrlTemplate=null] A function that generates a URL template for a tile server (XYZ),
 * which will be used instead of the client-side GeoTIFF rendering (except if `useTileLayerAsFallback` is `true`).
 * @property {boolean} [useTileLayerAsFallback=false] Uses the given URL template only when the client-side GeoTIFF rendering fails.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 */
/**
 * @classdesc
 * Renders STAC entities such as STAC Items, Collectons or lists of them as returned by APIs.
 * The layers created by this LayerGroup all have a 'stac' value that can be retrieved using `layer.get('stac')`.
 *
 * @extends LayerGroup
 * @fires sourceready
 * @fires assetsready
 * @fires ErorEvent#event:error
 * @api
 */
declare class STACLayer extends LayerGroup {
    /**
     * @param {Options} options Layer options.
     */
    constructor(options: Options);
    /**
     * @type {function(GeoTIFFSourceOptions, Asset):(GeoTIFFSourceOptions|Promise<GeoTIFFSourceOptions>)}
     * @private
     */
    private getGeoTIFFSourceOptions_;
    /**
     * @type {function(ImageStaticSourceOptions, (Asset|Link)):(ImageStaticSourceOptions|Promise<ImageStaticSourceOptions>)}
     * @private
     */
    private getImageStaticSourceOptions_;
    /**
     * @type {function(XYZSourceOptions, (Asset|Link)):(XYZSourceOptions|Promise<XYZSourceOptions>)}
     * @private
     */
    private getXYZSourceOptions_;
    /**
     * @type {STAC|Asset}
     * @private
     */
    private data_;
    /**
     * @type {Array<Asset> | null}
     * @private
     */
    private assets_;
    /**
     * @type {Array<number>}
     * @private
     */
    private bands_;
    /**
     * @type {string | null}
     * @private
     */
    private crossOrigin_;
    /**
     * @type {boolean}
     * @private
     */
    private displayGeoTiffByDefault_;
    /**
     * @type {boolean}
     * @private
     */
    private displayPreview_;
    /**
     * @type {boolean}
     * @private
     */
    private displayOverview_;
    /**
     * @type {string|boolean}
     */
    displayWebMapLink_: string | boolean;
    /**
     * @type {function(Asset):string|null}
     * @private
     */
    private buildTileUrlTemplate_;
    /**
     * @type {boolean}
     * @private
     */
    private useTileLayerAsFallback_;
    /**
     * @type {Style}
     * @private
     */
    private boundsStyle_;
    /**
     * @type {Style}
     * @private
     */
    private collectionStyle_;
    /**
     * @type {VectorLayer|null}
     * @private
     */
    private boundsLayer_;
    /**
     * Returns the vector layer that visualizes the bounds / footprint.
     * @return {VectorLayer|null} The vector layer for the bounds
     */
    getBoundsLayer(): VectorLayer<any> | null;
    /**
     * @private
     * @param {Error} error The error.
     */
    private handleError_;
    /**
     * @private
     * @param {STAC|Asset|Object} data The STAC data.
     * @param {string} url The url to the data.
     * @param {Array<Asset|string> | null} assets The assets to show.
     * @param {Array<number>} bands The (one-based) bands to show.
     */
    private configure_;
    /**
     * @private
     * @return {Promise} Resolves when complete.
     */
    private addApiCollection_;
    /**
     * @private
     * @return {Promise} Resolves when complete.
     */
    private addStacAssets_;
    /**
     * @private
     * @param {Asset|Link} [ref] A STAC Link or Asset
     * @return {Promise<Layer|undefined>} Resolves with a Layer or undefined when complete.
     */
    private addImagery_;
    /**
     * @private
     * @param {Asset|Link} [thumbnail] A STAC Link or Asset
     * @return {Promise<ImageLayer|undefined>} Resolves with am ImageLayer or udnefined when complete.
     */
    private addThumbnail_;
    /**
     * Adds a layer for the web map links available in the STAC links.
     * @return {Promise<Array<TileLayer>|undefined>} Resolves with a Layer or undefined when complete.
     */
    addWebMapLinks_(): Promise<Array<TileLayer<any>> | undefined>;
    /**
     * Adds a layer for a link that implements the web-map-links extension.
     * Supports: TileJSON, WMS, WMTS, XYZ
     * @see https://github.com/stac-extensions/web-map-links
     * @param {Link} link A web map link
     * @return {Promise<Array<TileLayer>|undefined>} Resolves with a list of layers or undefined when complete.
     */
    addLayerForLink(link: any): Promise<Array<TileLayer<any>> | undefined>;
    /**
     * @private
     * @param {Asset} [asset] A STAC Asset
     * @return {Promise<Layer|undefined>} Resolves with a Layer or undefined when complete.
     */
    private addGeoTiff_;
    /**
     * @private
     * @param {Asset|Link} [data] A STAC Asset or Link
     * @return {Promise<TileLayer>} Resolves with a TileLayer when complete.
     */
    private addTileLayerForImagery_;
    /**
     * @param {Layer|LayerGroup} [layer] A Layer to add to the LayerGroup
     * @param {STACObject} [data] The STAC object, can be any class exposed by stac-js
     * @param {number} [zIndex=0] The z-index for the layer
     * @private
     */
    private addLayer_;
    /**
     * @private
     * @return {VectorLayer|null} The vector layer showing the geometry/bbox.
     */
    private addFootprint_;
    /**
     * @private
     */
    private updateLayers_;
    /**
     * Indicates whether the LayerGroup shows only the bounds layer (i.e. no imagery/tile layers).
     * @return {boolean} `true` if only the bounds layer is shown, `false` otherwise.
     */
    hasOnlyBounds(): boolean;
    /**
     * Returns all potential web map links based on the given value for `displayWebMapLink`.
     * @return {Array<Link>} An array of links.
     */
    getWebMapLinks(): Array<Link>;
    /**
     * Update the assets to be rendered.
     * @param {Array<string|Asset>|null} assets The assets to show.
     * @return {Promise} Resolves when all assets are rendered.
     */
    setAssets(assets: Array<string | Asset> | null): Promise<any>;
    /**
     * Get the STAC object.
     *
     * @return {STAC|Asset} The STAC object.
     */
    getData(): STAC | Asset;
    /**
     * Get the STAC assets shown.
     *
     * @return {Array<Asset>} The STAC assets.
     */
    getAssets(): Array<Asset>;
}
import LayerGroup from 'ol/layer/Group.js';
import VectorLayer from 'ol/layer/Vector.js';
import TileLayer from 'ol/layer/Tile.js';
//# sourceMappingURL=STAC.d.ts.map