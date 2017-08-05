import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  statement: DS.attr('string'),
  solution_url: DS.attr('string'),
  judges: Ember.computed(function() {
    return this.store.findAll('judge');
  })
});
