import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    }
  }
});

// Ember.Handlebars.registerBoundHelper('currentDate', function() {
//   return moment().format('LL');
// });
