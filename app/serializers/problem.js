import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    // When you ask for a a single entity, PostgREST returns a
    // JSON array with an object corresponding to the entity.
    // Apparently JSONSerializer expects a JSON object, so we peel
    // off the array here.
    if(requestType === 'findRecord') {
        payload = payload[0];
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
