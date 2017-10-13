import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('problem').then(pp => pp.sortBy('timestamp').reverse());
  }
});
