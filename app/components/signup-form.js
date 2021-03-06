import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitSignup(){
      var params = {
        name: this.get('name'),
        username: this.get('username'),
        password: this.get('password'),
        avatar: this.get('avatar')
      };
      this.set('password', "");
      this.sendAction('submitSignup', params);
    }
  }
});
