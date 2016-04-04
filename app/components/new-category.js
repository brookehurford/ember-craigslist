import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addNewCategory');
    },
    saveCategory() {
      var params = {
        name: this.get('name') ? this.get('name') : " ",
        summary: this.get('summary') ? this.get('summary') : " ",
      };
      debugger;
      this.toggleProperty('addNewCategory');
      this.set('name', " ");
      this.set('summary', " ");
      this.sendAction('saveCategory', params);
    }
  }
});
