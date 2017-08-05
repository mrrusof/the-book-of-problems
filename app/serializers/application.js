import DS from 'ember-data';

export default DS.JSONSerializer.extend({

    keyForAttribute: function(key) { return key; },

});
