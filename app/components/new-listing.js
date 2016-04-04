import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addNewListing');
    },
    saveListing() {
      var params = {
        title: this.get('title') ? this.get('title') : " ",
        details: this.get('details') ? this.get('details') : " ",
        img: this.get('img') ? this.get('img') : " ",
        category: this.get('category'),
      };
      console.log(params);
      this.toggleProperty('addNewListing');
      this.set('title', " ");
      this.set('details', " ");
      this.set('img', " ");
      this.sendAction('saveListing', params);
    }
  }
});
