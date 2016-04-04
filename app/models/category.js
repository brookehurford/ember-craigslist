import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  summary: DS.attr(),
  listings: DS.hasMany('listing', { async: true})
});
