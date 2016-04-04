import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('adminUpdateForm');
    },
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        img: this.get('img')
      };
      this.toggleProperty('adminUpdateForm');
      this.sendAction('updateListing', listing, params);
    }
  }
});
