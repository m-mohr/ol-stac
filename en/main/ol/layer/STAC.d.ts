export default STACLayer;
export type Extent = import("ol/extent.js").Extent;
export type Layer = import("ol/layer.js").Layer;
export type Link = any;
export type Style = import('ol/style.js').Style;
export type SourceOptions = import('../source/type.js').SourceOptions;
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
     * For STAC Catalogs and Collections, any child entites
     * to show. Can be STAC ItemCollections (as ItemCollection, GeoJSON FeatureCollection, or URL) or a list of STAC entities.
     */
    children?: ItemCollection | any | Array<STAC> | string | null;
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
     * Optional function that can be used to configure the underlying sources. The function can do any additional work
     * and return the completed options or a promise for the same. The function will be called with the current source options
     * and the STAC Asset or Link.
     * This can be useful for adding auth information such as an API token, either via query parameter or HTTP headers.
     * Please be aware that sending HTTP headers may not be supported by all sources.
     */
    getSourceOptions?: ((arg0: SourceType, arg1: SourceOptions, arg2: (Asset | Link)) => (SourceOptions | Promise<SourceOptions>)) | undefined;
    /**
     * Allows to hide the footprints (bounding box/geometry) of the STAC object
     * by default.
     */
    displayFootprint?: boolean | undefined;
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
     * Allow to display a layer
     * based on the information provided through the web map links extension.
     * If an array of links or link ids (property `id` in a Link Object) is provided, all corresponding layers will be shown.
     * If set to true or to a specific type of web map link (`pmtiles`, `tilejson`, `wms`, `wmts`, `xyz`),
     * it lets this library choose a web map link to show, but only if no other data is shown.
     * To disable the functionality set this to `false`.
     */
    displayWebMapLink?: string | boolean | any[] | undefined;
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
    /**
     * Arbitrary observable properties. Can be accessed with `#get()` and `#set()`. `stac` and `bounds` are reserved and may be overridden.
     */
    properties?: {
        [x: string]: any;
    } | undefined;
};
/**
 * @typedef {import("ol/extent.js").Extent} Extent
 */
/**
 * @typedef {import("ol/layer.js").Layer} Layer
 */
/**
 * @typedef {import("stac-js").Link} Link
 */
/**
 * @typedef {import('ol/style.js').Style} Style
 */
/**
 * @typedef {import('../source/type.js').SourceOptions} SourceOptions
 */
/**
 * @typedef {Object} Options
 * @property {string} [url] The STAC URL. Any of `url` and `data` must be provided.
 * Can also be used as url for data, if it is absolute and doesn't contain a self link.
 * @property {STAC|Asset|Object} [data] The STAC metadata. Any of `url` and `data` must be provided.
 * `data` take precedence over `url`.
 * @property {ItemCollection|Object|Array<STAC>|string|null} [children=null] For STAC Catalogs and Collections, any child entites
 * to show. Can be STAC ItemCollections (as ItemCollection, GeoJSON FeatureCollection, or URL) or a list of STAC entities.
 * @property {Array<string|Asset>|null} [assets=null] The selector for the assets to be rendered,
 * only for STAC Items and Collections.
 * This can be an array of strings corresponding to asset keys or Asset objects.
 * null shows the default asset, an empty array shows no asset.
 * @property {Array<number>} [bands] The (one-based) bands to show.
 * @property {function(SourceType, SourceOptions, (Asset|Link)):(SourceOptions|Promise<SourceOptions>)} [getSourceOptions]
 * Optional function that can be used to configure the underlying sources. The function can do any additional work
 * and return the completed options or a promise for the same. The function will be called with the current source options
 * and the STAC Asset or Link.
 * This can be useful for adding auth information such as an API token, either via query parameter or HTTP headers.
 * Please be aware that sending HTTP headers may not be supported by all sources.
 * @property {boolean} [displayFootprint=true] Allows to hide the footprints (bounding box/geometry) of the STAC object
 * by default.
 * @property {boolean} [displayGeoTiffByDefault=false] Allow to choose non-cloud-optimized GeoTiffs as default image to show,
 * which might not work well for larger files or larger amounts of files.
 * @property {boolean} [displayPreview=false] Allow to display images that a browser can display (e.g. PNG, JPEG),
 * usually assets with role `thumbnail` or the link with relation type `preview`.
 * The previews are usually not covering the full extents and as such may be placed incorrectly on the map.
 * For performance reasons, it is recommended to enable this option if you pass in STAC API Items.
 * @property {boolean} [displayOverview=true] Allow to display COGs and, if `displayGeoTiffByDefault` is enabled, GeoTiffs,
 * usually the assets with role `overview` or `visual`.
 * @property {string|boolean|Array<Link|string>} [displayWebMapLink=false] Allow to display a layer
 * based on the information provided through the web map links extension.
 * If an array of links or link ids (property `id` in a Link Object) is provided, all corresponding layers will be shown.
 * If set to true or to a specific type of web map link (`pmtiles`, `tilejson`, `wms`, `wmts`, `xyz`),
 * it lets this library choose a web map link to show, but only if no other data is shown.
 * To disable the functionality set this to `false`.
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
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`. `stac` and `bounds` are reserved and may be overridden.
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
     * @api
     */
    constructor(options: Options);
    /**
     * @type {function(SourceType, SourceOptions, (Asset|Link)):(SourceOptions|Promise<SourceOptions>)}
     * @private
     */
    private getSourceOptions_;
    /**
     * @type {STAC|Asset}
     * @private
     */
    private data_;
    /**
     * @type {Array<STAC>|null}
     * @private
     */
    private children_;
    /**
     * @type {Array<Asset>|null}
     * @private
     */
    private assets_;
    /**
     * @type {Array<number>}
     * @private
     */
    private bands_;
    /**
     * @type {string|null}
     * @private
     */
    private crossOrigin_;
    /**
     * @type {boolean}
     * @private
     */
    private displayFootprint_;
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
     * @type {string|boolean|Array<Link|string>}
     */
    displayWebMapLink_: string | boolean | Array<Link | string>;
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
     * @api
     */
    getBoundsLayer(): VectorLayer | null;
    /**
     * @private
     * @param {Error} error The error.
     */
    private handleError_;
    /**
     * @private
     * @param {STAC|Asset|Object} data The STAC data.
     * @param {string} url The url to the data.
     * @param {ItemCollection|Object|Array<STAC>|string|null} children The child STAC entities to show.
     * @param {Array<Asset|string>|null} assets The assets to show.
     * @param {Array<number>} bands The (one-based) bands to show.
     */
    private configure_;
    /**
     * @private
     * @param {Array<STAC>} collection The list of STAC entities to show.
     * @return {Promise} Resolves when complete.
     */
    private addChildren_;
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
     * @return {Promise<Array<Layer>|undefined>} Resolves with a Layer or undefined when complete.
     */
    addWebMapLinks_(): Promise<Array<Layer> | undefined>;
    /**
     * Adds a layer for a link that implements the web-map-links extension.
     * Supports: PMTiles, TileJSON, WMS, WMTS, XYZ
     * @see https://github.com/stac-extensions/web-map-links
     * @param {Link} link A web map link
     * @return {Promise<Array<Layer>|undefined>} Resolves with a list of layers or undefined when complete.
     * @api
     */
    addLayerForLink(link: any): Promise<Array<Layer> | undefined>;
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
     * @param {import("stac-js").STACObject} [data] The STAC object, can be any class exposed by stac-js
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
     * @api
     */
    hasOnlyBounds(): boolean;
    /**
     * Returns all potential web map links based on the given value for `displayWebMapLink`.
     * @return {Array<Link>} An array of links.
     * @api
     */
    getWebMapLinks(): Array<Link>;
    /**
     * Update the assets to be rendered.
     * @param {Array<string|Asset>|null} assets The assets to show.
     * @return {Promise} Resolves when all assets are rendered.
     * @api
     */
    setAssets(assets: Array<string | Asset> | null): Promise<any>;
    /**
     * Updates the children STAC entities to be rendered.
     * @param {ItemCollection|Object|Array<STAC>|string|null} childs The children to show.
     * @return {Promise} Resolves when all items are rendered.
     * @api
     */
    setChildren(childs: ItemCollection | any | Array<STAC> | string | null): Promise<any>;
    /**
     * Get the STAC object.
     *
     * @return {STAC|Asset} The STAC object.
     * @api
     */
    getData(): STAC | Asset;
    /**
     * Get the children STAC entities.
     *
     * @return {STAC} The STAC child entities.
     * @api
     */
    getChildren(): STAC;
    /**
     * Get the STAC assets shown.
     *
     * @return {Array<Asset>} The STAC assets.
     * @api
     */
    getAssets(): Array<Asset>;
}
import SourceType from '../source/type.js';
import LayerGroup from 'ol/layer/Group.js';
import VectorLayer from 'ol/layer/Vector.js';
//# sourceMappingURL=STAC.d.ts.map