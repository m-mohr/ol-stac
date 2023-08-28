# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- OpenLayers is now a peer dependency
- Add support for PMTiles (via Web Map Links extension)
- New general purpose option `getSourceOptions(type, options, ref)` to customize source options.
   It also applies to all web-map-link source options now.
   It replaces:
   - `getGeoTIFFSourceOptions(options, ref)`
   - `getImageStaticSourceOptions(options, ref)`
   - `getXYZSourceOptions(options, ref)`
- Added `SourceType` enum for `getSourceOptions`

## [1.0.0-beta.5] - 2023-08-23

- Don't enforce the nodata value to be `NaN` if not present in STAC metadata

## [1.0.0-beta.4] - 2023-08-22

- Fix the default entry point (you can now really use `import STAC from 'ol-stac';`)

## [1.0.0-beta.3] - 2023-08-22

- Pass `properties` option to the LayerGroup.

## [1.0.0-beta.2] - 2023-08-22

- Move the `stacUtils.js` from `ol/layer` to `ol-stac/utils.js`
- Provide a default entry point (you can now use `import STAC from 'ol-stac';`)
- Documentation improvements

## [1.0.0-beta.1] - 2023-08-22

- First release

[Unreleased]: <https://github.com/stac-extensions/contacts/compare/v1.0.0-beta.5...HEAD>
[1.0.0-beta.5]: <https://github.com/stac-extensions/contacts/compare/v1.0.0-beta.4...v1.0.0-beta.5>
[1.0.0-beta.4]: <https://github.com/stac-extensions/contacts/compare/v1.0.0-beta.3...v1.0.0-beta.4>
[1.0.0-beta.3]: <https://github.com/stac-extensions/contacts/compare/v1.0.0-beta.2...v1.0.0-beta.3>
[1.0.0-beta.2]: <https://github.com/stac-extensions/contacts/compare/v1.0.0-beta.1...v1.0.0-beta.2>
[1.0.0-beta.1]: <https://github.com/stac-extensions/contacts/tree/v1.0.0-beta.1>
