import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('category');
    }
  }
});

// timePosted: Ember.computed('listing.date', 'listing.time', function(){
//   return this.get('listing.date') + ', ' + this.get('listing.time');
// })
