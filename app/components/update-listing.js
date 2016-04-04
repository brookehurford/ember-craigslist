import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail(){
      this.toggleProperty('updateListingForm');
    },
    updateListing(listing){
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        img: this.get('img')
      };
      console.log(listing);
      this.toggleProperty('updateListingForm');
      this.sendAction('updateListing', listing, params);
    }
  }
});
