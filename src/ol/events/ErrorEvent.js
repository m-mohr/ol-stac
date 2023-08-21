/**
 * @module ol/events/ErrorEvent
 */
import BaseEvent from 'ol/events/Event.js';
import EventType from 'ol/events/EventType.js';

/**
 * @classdesc
 * Event emitted on configuration or loading error.
 */
class ErrorEvent extends BaseEvent {
  /**
   * @param {Error} error error object.
   */
  constructor(error) {
    super(EventType.ERROR);

    /**
     * @type {Error}
     */
    this.error = error;
  }
}

export default ErrorEvent;
