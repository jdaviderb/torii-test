import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    accessDenied() {
      debugger;
      this.transitionTo('login');
    },
  }
});
