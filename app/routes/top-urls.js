import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return $.ajax({
      url: 'https://url-shrtnr-app.herokuapp.com/top'
    })
  }
});
