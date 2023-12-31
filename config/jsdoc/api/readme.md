# API Documentation

This directory contains configuration (`conf.json`), static content (`index.md`), template (`template/`) and plugins (`plugins/`) for the [JSDoc3](https://jsdoc.app/) API generator.

## Documenting the source code

JSDoc annotations are used for metadata used by the compiler, for defining the user facing API, and for user documentation.

In the simplest case, a JSDoc block can look like this:
```js
/**
 * Add the given control to the map.
 * @param {ol.control.Control} control Control.
 * @api
 */
ol.Map.prototype.addControl = function(control) {
  // ...
};
```
The first line is text for the user documentation. This can be long, and it can
contain Markdown.

The second line tells the Closure compiler the type of the argument.

The third line (`@api`) marks the method as part of the api and thus exportable. Without such an api annotation, the method will not be documented in the generated API documentation. Symbols without an api annotation will also not be exportable.

In general, `@api` annotations should never be used on abstract methods (only on their implementations).

### Events

Events are documented using `@fires` and `@event` annotations:
```js
/**
 * Constants for event names.
 * @enum {string}
 */
ol.MapBrowserEventType = {
  /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event ol.MapBrowserEvent#singleclick
   * @api
   */
  SINGLECLICK: 'singleclick',
  // ...
};
```
Note the value of the `@event` annotation. The text before the hash refers to the event class that the event belongs to, and the text after the hash is the type of the event.

To document which events are fired by a class or method, the `@fires` annotation is used:
```js
/**
 * @fires ol.MapBrowserEvent
 * @fires ol.MapEvent
 * @fires ol.render.Event
 * ...
 */
ol.Map = function(options) {
  // ...
};
```
