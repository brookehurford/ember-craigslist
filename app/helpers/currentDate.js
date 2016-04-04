import Ember from 'ember';
import moment from 'moment';

export function currentDate(params/*, hash*/) {
  Ember.Handlebars.registerBoundHelper('currentDate', function() {
    return moment().format('LL');
  });
}

export default Ember.Helper.helper(currentDate);
