import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import wait from 'rarwe/utils/wait';


export default Route.extend(AuthenticatedRouteMixin,{
  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    },
  },

  model() {
    return this.store.findAll('band');
  },
  redirect(bands) {
    if (bands.length === 1) {
      this.transitionTo('bands.band', bands.firstObject);
    }
          }

});



