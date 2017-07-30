import DS from 'ember-data';
import UrlTemplates from 'ember-data-url-templates';
import config from '../config/environment';

export default DS.RESTAdapter.extend({

    host: config.apiHost,
    namespace: config.apiNamespace,

}).extend(UrlTemplates, {

    urlTemplate: '{+host}{/namespace}/{pathForType}{+idQuery}',
    urlSegments: {
        // PostgREST does not offer a REST API.
        // Instead of asking for
        // http://localhost:3000/problems/merge-by-buffer, one must
        // ask for
        // http://localhost:3000/problems?id=eq.merge-by-buffer .
        // The following function builds the query that corresponds to
        // asking for a single resource.
        idQuery: function(_type, id, _snapshot, _query) {
            if(id != null) {
                return '?id=eq.' + id;
            } else {
                return '';
            }
        }
    }

});
