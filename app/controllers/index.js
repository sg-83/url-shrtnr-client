import Controller from '@ember/controller';

export default Controller.extend({
  fullURL: '',
  actions: {
    createURL() {
      this.set('fullURL','');
    }
  }
});
