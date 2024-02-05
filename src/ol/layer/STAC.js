/**
 * @module ol/layer/STAC
 */
import * as pmtiles from 'pmtiles';
import ErrorEvent from '../events/ErrorEvent.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import GeoTIFF from '../source/GeoTIFF2.js';
import ImageLayer from 'ol/layer/Image.js';
import LayerGroup from 'ol/layer/Group.js';
import SourceType from '../source/type.js';
import StaticImage from 'ol/source/ImageStatic.js';
import TileJSON from 'ol/source/TileJSON.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import WMS from 'ol/source/TileWMS.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import XYZ from 'ol/source/XYZ.js';
import create, {Asset, STAC} from 'stac-js';
import {PMTilesRasterSource, PMTilesVectorSource} from 'ol-pmtiles';
import {
  defaultBoundsStyle,
  defaultCollectionStyle,
  getBoundsStyle,
  getGeoTiffSourceInfoFromAsset,
  getProjection,
  getSpecificWebMapUrl,
  getWmtsCapabilities,
} from '../util.js';
import {toGeoJSON} from 'stac-js/src/geo.js';
import {transformExtent} from 'ol/proj.js';

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
class STACLayer extends LayerGroup {
  /**
   * @param {Options} options Layer options.
   * @api
   */
  constructor(options) {
    const superOptions = {};
    [
      'opacity',
      'visible',
      'zIndex',
      'minResolution',
      'maxResolution',
      'minZoom',
      'maxZoom',
      'properties',
    ].forEach((key) => (superOptions[key] = options[key]));

    super(superOptions);

    /**
     * @type {function(SourceType, SourceOptions, (Asset|Link)):(SourceOptions|Promise<SourceOptions>)}
     * @private
     */
    this.getSourceOptions_ = options.getSourceOptions;

    /**
     * @type {STAC|Asset}
     * @private
     */
    this.data_;

    /**
     * @type {Array<Asset> | null}
     * @private
     */
    this.assets_ = null;

    /**
     * @type {Array<number>}
     * @private
     */
    this.bands_ = [];

    /**
     * @type {string | null}
     * @private
     */
    this.crossOrigin_ = options.crossOrigin || null;

    /**
     * @type {boolean}
     * @private
     */
    this.displayFootprint_ = options.displayFootprint === false ? false : true;

    /**
     * @type {boolean}
     * @private
     */
    this.displayGeoTiffByDefault_ = Boolean(options.displayGeoTiffByDefault);

    /**
     * @type {boolean}
     * @private
     */
    this.displayPreview_ = Boolean(options.displayPreview);

    /**
     * @type {boolean}
     * @private
     */
    this.displayOverview_ = options.displayOverview === false ? false : true;

    /**
     * @type {string|boolean|Array<Link|string>}
     */
    this.displayWebMapLink_ = options.displayWebMapLink || false;

    /**
     * @type {function(Asset):string|null}
     * @private
     */
    this.buildTileUrlTemplate_ = options.buildTileUrlTemplate || null;

    /**
     * @type {boolean}
     * @private
     */
    this.useTileLayerAsFallback_ = options.useTileLayerAsFallback || false;

    /**
     * @type {Style}
     * @private
     */
    this.boundsStyle_ = options.boundsStyle || defaultBoundsStyle;

    /**
     * @type {Style}
     * @private
     */
    this.collectionStyle_ = options.collectionStyle || defaultCollectionStyle;

    /**
     * @type {VectorLayer|null}
     * @private
     */
    this.boundsLayer_ = null;

    if (options.data) {
      try {
        this.configure_(
          options.data,
          options.url,
          options.assets,
          options.bands
        );
      } catch (error) {
        this.handleError_(error);
      }
      return;
    }

    if (!options.url) {
      throw new Error('Either url or data must be provided');
    }

    fetch(options.url)
      .then((response) => response.json())
      .then((data) =>
        this.configure_(data, options.url, options.assets, options.bands)
      )
      .catch((error) => this.handleError_(error));
  }

  /**
   * Returns the vector layer that visualizes the bounds / footprint.
   * @return {VectorLayer|null} The vector layer for the bounds
   * @api
   */
  getBoundsLayer() {
    return this.boundsLayer_;
  }

  /**
   * @private
   * @param {Error} error The error.
   */
  handleError_(error) {
    /**
     * Error event.
     *
     * @event ErorEvent#event:error
     * @type {Object}
     * @property {Error} error - Provides the original error.
     */
    this.dispatchEvent(new ErrorEvent(error));
  }

  /**
   * @private
   * @param {STAC|Asset|Object} data The STAC data.
   * @param {string} url The url to the data.
   * @param {Array<Asset|string> | null} assets The assets to show.
   * @param {Array<number>} bands The (one-based) bands to show.
   */
  configure_(data, url = null, assets = null, bands = []) {
    if (data instanceof Asset || data instanceof STAC) {
      this.data_ = data;
    } else {
      this.data_ = create(data);
    }
    if (url && url.includes('://')) {
      this.data_.setAbsoluteUrl(url);
    }
    this.bands_ = bands;

    this.boundsLayer_ = this.addFootprint_();
    const updateBoundsStyle = () => {
      if (this.boundsLayer_) {
        this.boundsLayer_.setStyle(getBoundsStyle(this.boundsStyle_, this));
      }
    };
    this.getLayers().on('add', updateBoundsStyle);
    this.getLayers().on('remove', updateBoundsStyle);

    this.setAssets(assets)
      .then(() => {
        /**
         * Invoked once all assets are loaded and shown on the map.
         *
         * @event assetsready
         */
        return this.dispatchEvent('assetsready');
      })
      .catch((error) => this.handleError_(error));

    /**
     * Invoked once the source is ready.
     * If you provide the data inline, the event is likely fired before you can
     * attach a listener to it. So this only really helps if a url is provided.
     *
     * @event sourceready
     */
    this.dispatchEvent('sourceready');
  }

  /**
   * @private
   * @return {Promise} Resolves when complete.
   */
  async addApiCollection_() {
    const promises = this.getData()
      .getAll()
      .map((obj) => {
        const subgroup = new STACLayer({
          data: obj,
          crossOrigin: this.crossOrigin_,
          boundsStyle: this.collectionStyle_,
          displayGeoTiffByDefault: this.displayGeoTiffByDefault_,
          displayOverview: this.displayOverview_,
          displayPreview: this.displayPreview_,
          displayFootprint: this.displayFootprint_,
        });
        this.addLayer_(subgroup);
        return subgroup;
      });
    return await Promise.all(promises);
  }

  /**
   * @private
   * @return {Promise} Resolves when complete.
   */
  async addStacAssets_() {
    let assets = this.getAssets();
    if (assets === null) {
      assets = [];
      // No specific asset given by the user, visualize the default geotiff
      const geotiff = this.getData().getDefaultGeoTIFF(
        true,
        !this.displayGeoTiffByDefault_
      );
      if (geotiff) {
        assets.push(geotiff);
      } else {
        // This may return Links or Assets
        const thumbnails = this.getData().getThumbnails();
        if (thumbnails.length > 0) {
          assets.push(thumbnails[0]);
        }
      }
    }

    const promises = assets.map((asset) => this.addImagery_(asset));
    return await Promise.all(promises);
  }

  /**
   * @private
   * @param {Asset|Link} [ref] A STAC Link or Asset
   * @return {Promise<Layer|undefined>} Resolves with a Layer or undefined when complete.
   */
  async addImagery_(ref) {
    if (!ref) {
      return;
    }
    if (ref.isGeoTIFF()) {
      return await this.addGeoTiff_(ref);
    }
    if (ref.canBrowserDisplayImage()) {
      return await this.addThumbnail_(ref);
    }
  }

  /**
   * @private
   * @param {Asset|Link} [thumbnail] A STAC Link or Asset
   * @return {Promise<ImageLayer|undefined>} Resolves with am ImageLayer or udnefined when complete.
   */
  async addThumbnail_(thumbnail) {
    if (!this.displayPreview_) {
      return;
    }
    /**
     * @type {import("ol/source/ImageStatic.js").Options}
     */
    let options = {
      url: thumbnail.getAbsoluteUrl(),
      projection: await getProjection(thumbnail, 'EPSG:4326'),
      imageExtent: thumbnail.getContext().getBoundingBox(),
      crossOrigin: this.crossOrigin_,
    };
    if (this.getSourceOptions_) {
      options = await this.getSourceOptions_(
        SourceType.ImageStatic,
        options,
        thumbnail
      );
    }
    const layer = new ImageLayer({
      source: new StaticImage(options),
    });
    this.addLayer_(layer, thumbnail);
    return layer;
  }

  /**
   * Adds a layer for the web map links available in the STAC links.
   * @return {Promise<Array<Layer>|undefined>} Resolves with a Layer or undefined when complete.
   */
  async addWebMapLinks_() {
    const links = this.getWebMapLinks();
    if (links.length > 0) {
      return await this.addLayerForLink(links[0]);
    }
  }

  /**
   * Adds a layer for a link that implements the web-map-links extension.
   * Supports: PMTiles, TileJSON, WMS, WMTS, XYZ
   * @see https://github.com/stac-extensions/web-map-links
   * @param {Link} link A web map link
   * @return {Promise<Array<Layer>|undefined>} Resolves with a list of layers or undefined when complete.
   * @api
   */
  async addLayerForLink(link) {
    // Replace any occurances of {s} if possible, otherwise return
    const url = getSpecificWebMapUrl(link);
    if (!url) {
      return;
    }

    const options = {
      attributions:
        link.getMetadata('attribution') ||
        this.data_.getMetadata('attribution'),
      crossOrigin: this.crossOrigin_,
      url,
    };

    const updateOptions = async (type, options) => {
      if (this.getSourceOptions_) {
        options = await this.getSourceOptions_(type, options, link);
      }
      return options;
    };

    const sources = [];
    switch (link.rel) {
      case 'pmtiles':
        const p = new pmtiles.PMTiles(options.url);
        const headers = await p.getHeader();
        let source;
        switch (headers.tileType) {
          case pmtiles.TileType.Mvt:
            source = new PMTilesVectorSource(
              await updateOptions(SourceType.PMTilesVector, options)
            );
            break;
          case pmtiles.TileType.Avif:
          case pmtiles.TileType.Jpeg:
          case pmtiles.TileType.Png:
          case pmtiles.TileType.Webp:
            source = new PMTilesRasterSource(
              await updateOptions(SourceType.PMTilesRaster, options)
            );
            break;
          default:
            return; // Unsupported
        }
        sources.push(source);
        break;
      case 'tilejson':
        sources.push(
          new TileJSON(await updateOptions(SourceType.TileJSON, options))
        );
        break;
      case 'wms':
        if (!Array.isArray(link['wms:layers'])) {
          break;
        }
        for (const i in link['wms:layers']) {
          const layers = link['wms:layers'][i];
          let styles;
          if (
            Array.isArray(link['wms:styles']) &&
            typeof link['wms:styles'][i] === 'string'
          ) {
            styles = link['wms:styles'][i];
          }
          const params = Object.assign(
            {
              LAYERS: layers,
              STYLES: styles,
            },
            link['wms:dimensions']
          );
          if (typeof link['wms:transparent'] === 'boolean') {
            params.TRANSPARENT = String(link['wms:transparent']);
          }
          if (
            typeof link['type'] === 'string' &&
            link['type'].startsWith('image/')
          ) {
            params.FORMAT = link['type'];
          }
          const wmsOptions = await updateOptions(
            SourceType.TileWMS,
            Object.assign({}, options, {params})
          );
          sources.push(new WMS(wmsOptions));
        }
        break;
      case 'wmts':
        const wmtsCapabilities = await getWmtsCapabilities(url);
        if (!wmtsCapabilities) {
          return;
        }
        const layers = Array.isArray(link['wmts:layer'])
          ? link['wmts:layer']
          : [link['wmts:layer']];
        for (const layer of layers) {
          let wmtsOptions = Object.assign({}, options, {layer});
          if (
            typeof link['type'] === 'string' &&
            link['type'].startsWith('image/')
          ) {
            wmtsOptions.format = link['type'];
          }
          wmtsOptions = await updateOptions(SourceType.WMTS, wmtsOptions);
          sources.push(
            new WMTS(optionsFromCapabilities(wmtsCapabilities, wmtsOptions))
          );
        }
        break;
      case 'xyz':
        sources.push(new XYZ(await updateOptions(SourceType.XYZ, options)));
        break;
      default:
        return;
    }

    return sources.map((source) => {
      let layer;
      if (source instanceof VectorTileSource) {
        layer = new VectorTileLayer({
          source,
          declutter: true,
        });
      } else if (source instanceof PMTilesRasterSource) {
        layer = new WebGLTileLayer({source});
      } else {
        layer = new TileLayer({source});
      }
      this.addLayer_(layer, link);
      return layer;
    });
  }

  /**
   * @private
   * @param {Asset} [asset] A STAC Asset
   * @return {Promise<Layer|undefined>} Resolves with a Layer or undefined when complete.
   */
  async addGeoTiff_(asset) {
    if (!this.displayOverview_) {
      return;
    }

    if (this.buildTileUrlTemplate_ && !this.useTileLayerAsFallback_) {
      return await this.addTileLayerForImagery_(asset);
    }

    const sourceInfo = getGeoTiffSourceInfoFromAsset(asset, this.bands_);

    /**
     * @type {import("../source/GeoTIFF2.js").Options2}
     */
    let options = {
      sources: [sourceInfo],
    };

    const projection = await getProjection(asset);
    if (projection) {
      options.projection = projection;
    }

    if (this.getSourceOptions_) {
      options = await this.getSourceOptions_(
        SourceType.GeoTIFF,
        options,
        asset
      );
    }

    const tileserverFallback = async (asset, layer) => {
      if (layer) {
        this.getLayers().remove(layer);
      }
      return await this.addTileLayerForImagery_(asset);
    };
    try {
      const source = new GeoTIFF(options);
      const layer = new WebGLTileLayer({source});
      if (this.useTileLayerAsFallback_) {
        const errorFn = () => tileserverFallback(asset, layer);
        source.on('error', errorFn);
        source.on('tileloaderror', errorFn);
        // see https://github.com/openlayers/openlayers/issues/14926
        source.on('change', () => {
          if (source.getState() === 'error') {
            tileserverFallback(asset, layer);
          }
        });
        layer.on('error', errorFn);
        // Call this to ensure we can load the GeoTIFF, otherwise try fallback
        await source.getView();
      }
      this.addLayer_(layer, asset);
      return layer;
    } catch (error) {
      if (this.useTileLayerAsFallback_) {
        return await tileserverFallback(asset, null);
      }
      this.handleError_(error);
    }
  }

  /**
   * @private
   * @param {Asset|Link} [data] A STAC Asset or Link
   * @return {Promise<TileLayer>} Resolves with a TileLayer when complete.
   */
  async addTileLayerForImagery_(data) {
    /**
     * @type {import("ol/source/XYZ.js").Options}
     */
    let options = {
      crossOrigin: this.crossOrigin_,
      url: this.buildTileUrlTemplate_(data),
    };
    if (this.getSourceOptions_) {
      options = await this.getSourceOptions_(SourceType.XYZ, options, data);
    }
    const layer = new TileLayer({
      source: new XYZ(options),
    });
    this.addLayer_(layer, data);
    return layer;
  }

  /**
   * @param {Layer|LayerGroup} [layer] A Layer to add to the LayerGroup
   * @param {import("stac-js").STACObject} [data] The STAC object, can be any class exposed by stac-js
   * @param {number} [zIndex=0] The z-index for the layer
   * @private
   */
  addLayer_(layer, data, zIndex = 0) {
    layer.set('stac', data);
    layer.setZIndex(zIndex);
    this.getLayers().push(layer);
  }

  /**
   * @private
   * @return {VectorLayer|null} The vector layer showing the geometry/bbox.
   */
  addFootprint_() {
    let geojson = null;
    const data = this.getData();
    if (data.isItemCollection() || data.isCollectionCollection()) {
      geojson = toGeoJSON(data.getBoundingBox());
    } else {
      geojson = data.toGeoJSON();
    }

    if (geojson) {
      const format = new GeoJSON();
      const source = new VectorSource({
        format,
        loader: (extent, resolution, projection) => {
          const features = format.readFeatures(geojson, {
            featureProjection: projection,
          });
          // An issue in OL 8.2.0 makes this line fail in linting, disable it for now
          // https://github.com/openlayers/openlayers/pull/15338
          // @ts-ignore
          source.addFeatures(features);
        },
      });
      const vectorLayer = new VectorLayer({
        source,
        style: getBoundsStyle(this.boundsStyle_, this),
        visible: this.displayFootprint_,
      });
      vectorLayer.set('bounds', true);
      this.addLayer_(vectorLayer, data, 1);
      return vectorLayer;
    }

    return null;
  }

  /**
   * @private
   */
  async updateLayers_() {
    // Remove old layers
    const oldLayers = this.getLayers();
    for (let i = oldLayers.getLength() - 1; i >= 0; i--) {
      const layer = oldLayers.item(i);
      const stac = layer.get('stac');
      if (stac && (stac.isLink() || stac.isAsset())) {
        oldLayers.removeAt(i);
      }
    }

    // Add new layers
    const data = this.getData();
    if (data.isItemCollection() || data.isCollectionCollection()) {
      await this.addApiCollection_();
    } else if (data.isItem() || data.isCollection()) {
      await this.addStacAssets_();
    }
    if (
      this.displayWebMapLink_ &&
      (Array.isArray(this.displayWebMapLink_) || this.hasOnlyBounds())
    ) {
      await this.addWebMapLinks_();
    }
  }

  /**
   * Indicates whether the LayerGroup shows only the bounds layer (i.e. no imagery/tile layers).
   * @return {boolean} `true` if only the bounds layer is shown, `false` otherwise.
   * @api
   */
  hasOnlyBounds() {
    const boundsLayer = this.getBoundsLayer();
    const imgLayer = this.getLayersArray().find(
      (layer) => layer !== boundsLayer
    );
    return typeof imgLayer === 'undefined';
  }

  /**
   * Returns all potential web map links based on the given value for `displayWebMapLink`.
   * @return {Array<Link>} An array of links.
   * @api
   */
  getWebMapLinks() {
    let types = ['xyz', 'tilejson', 'pmtiles', 'wmts', 'wms']; // This also defines the priority
    if (typeof this.displayWebMapLink_ === 'string') {
      types = [this.displayWebMapLink_];
    }
    let mapLinks = this.data_.getLinksWithRels(types);

    if (Array.isArray(this.displayWebMapLink_)) {
      mapLinks = this.displayWebMapLink_
        .map((link) => {
          if (typeof link === 'string') {
            const match = mapLinks.find((candidate) => candidate.id === link);
            if (match) {
              return match;
            }
            return null;
          }
          return link;
        })
        .filter((link) => !!link);
    } else {
      mapLinks.sort((a, b) => {
        const prioA = types.indexOf(a.rel);
        const prioB = types.indexOf(b.rel);
        return prioA - prioB;
      });
    }
    return mapLinks;
  }

  /**
   * Update the assets to be rendered.
   * @param {Array<string|Asset>|null} assets The assets to show.
   * @return {Promise} Resolves when all assets are rendered.
   * @api
   */
  async setAssets(assets) {
    if (Array.isArray(assets)) {
      this.assets_ = assets.map((asset) => {
        if (typeof asset === 'string') {
          return this.getData().getAsset(asset);
        }
        if (!(asset instanceof Asset)) {
          return new Asset(asset);
        }
        return asset;
      });
    } else {
      this.assets_ = null;
    }
    await this.updateLayers_();
  }

  /**
   * Get the STAC object.
   *
   * @return {STAC|Asset} The STAC object.
   * @api
   */
  getData() {
    return this.data_;
  }

  /**
   * Get the STAC assets shown.
   *
   * @return {Array<Asset>} The STAC assets.
   * @api
   */
  getAssets() {
    return this.assets_;
  }

  /**
   * Get the extent of the layer.
   * If `displayFootprint` is set to `false`, the extent is always returned in
   * EPSG:4326 instead of the map projection. Make sure to transform it with the
   * ol.proj.transformExtent function if needed.
   *
   * @return {Extent|undefined} The layer extent.
   * @api
   */
  getExtent() {
    if (!this.boundsLayer_) {
      return;
    }

    const map = this.boundsLayer_.getMapInternal();
    if (!map) {
      return;
    }

    const view = map.getView();
    if (!view) {
      return;
    }

    const data = this.getData();
    if (!data) {
      return;
    }

    const bbox = data.getBoundingBox();
    if (bbox) {
      return transformExtent(bbox, 'EPSG:4326', view.getProjection());
    }
  }
}

export default STACLayer;
