import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  statement: DS.attr(),
  solution_url: DS.attr(),
  judges: Ember.computed(function() {
    return this.store.findAll('judge');
  })
});
