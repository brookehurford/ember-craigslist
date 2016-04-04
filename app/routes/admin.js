import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash ({
      listings: this.store.findAll('listing'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('admin');
    },
    updateListing(listing, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('listing');
    }
  }
});
