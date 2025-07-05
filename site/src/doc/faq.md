---
title: Frequently Asked Questions (FAQ)
layout: default.hbs
---

# Frequently Asked Questions (FAQ)

## What STAC elements can I show?

- STAC Collections
- STAC Items
- STAC ItemCollection / STAC API Items (response of `GET /collections/{id}/items`)
- STAC API Collections (response of `GET /collections`)
- STAC Asset

In principle you can also pass in STAC Catalogs, but unless there's a link to a web map included, it won't show anything.

## What STAC extensions are supported?

The web-map-links extension is supported to show links for:
- TileJSON
- WMS (tiled only)
- WMTS
- XYZ

For GeoTiff rendering the extension (through the [stac-js library](https://github.com/moregeo-it/stac-js)) makes use of:
- classification
- eo
- file
- projection
- raster

## Is there an alternative for other mapping libraries?

Yes, there is a similar library for Leaflet: [stac-layer](https://github.com/stac-utils/stac-layer)
I'm not aware of similar libraries for other web mapping libraries.

## Is TypeScript supported?

Yes, the library exports (auto-generated) TypeScript bindings.

## What versions of OpenLayers are supported?

Ol-Stac is supporting OpenLayers version >=7.5.2.
