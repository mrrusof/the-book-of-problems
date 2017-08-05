import DS from 'ember-data';
import Api from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr(),
  codemirrormode: DS.attr(),
  trial: Api.memberAction({ path: 'trial', type: 'post'})
});
