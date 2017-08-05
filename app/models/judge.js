import DS from 'ember-data';
import Api from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr('string'),
  codemirrormode: DS.attr('string'),
  trial: Api.memberAction({ path: 'trial', type: 'post'})
});
