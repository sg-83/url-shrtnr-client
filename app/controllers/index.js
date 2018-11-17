import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  errors: undefined,
  shortURL: undefined,
  fullURL: '',
  actions: {
    createURL() {
      this.set('errors', undefined);
      $.ajax({
        url: 'http://localhost:3000',
        method: 'POST',
        data: {
          url: this.get('fullURL')
        },
        success: (data) => {
          this.set('fullURL', '');
          this.set('errors', undefined);
          this.set('shortURL', data.shortened_link)
        },
        error: (jqXHR, textStatus) => {
          this.set('errors', textStatus)
        }
      })
    }
  }
});
