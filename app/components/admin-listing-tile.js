import Ember from 'ember';

export default Ember.Component.extend({
  afterModel(listing){
    return listing.get('category');
  }
});
