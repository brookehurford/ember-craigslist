import Ember from 'ember';

export default Ember.Component.extend({
  // currentDate: moment().format('LLL'),
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
        date: moment().format("LLL")
      };
      this.toggleProperty('addNewListing');
      this.set('title', " ");
      this.set('details', " ");
      this.set('img', " ");
      this.sendAction('saveListing', params);
    }
  }
});
