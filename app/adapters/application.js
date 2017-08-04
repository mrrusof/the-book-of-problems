import DS from 'ember-data';
import UrlTemplates from 'ember-data-url-templates';
import config from '../config/environment';

export default DS.RESTAdapter.extend({

  host: config.theOfficialJournalHost,

}).extend(UrlTemplates, {

  urlTemplate: '{+host}{/namespace}/{pathForType}{?id}',
  urlSegments: {
    // PostgREST does not offer a REST API.
    // Instead of asking for
    // http://localhost:3000/problems/merge-by-buffer, one must
    // ask for
    // http://localhost:3000/problems?id=eq.merge-by-buffer .
    // The following function builds the query that corresponds to
    // asking for a single resource.
    id: function(_type, id, _snapshot, _query) {
      return id != null ? 'eq.' + id : null;
    }
  }

});
