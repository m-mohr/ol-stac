export default ErrorEvent;
/**
 * @classdesc
 * Event emitted on configuration or loading error.
 * @api
 */
declare class ErrorEvent extends BaseEvent {
    /**
     * @param {Error} error error object.
     */
    constructor(error: Error);
    /**
     * @type {Error}
     */
    error: Error;
}
import BaseEvent from 'ol/events/Event.js';
//# sourceMappingURL=ErrorEvent.d.ts.map