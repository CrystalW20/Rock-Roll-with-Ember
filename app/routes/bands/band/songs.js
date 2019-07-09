import Route from '@ember/routing/route';

import { capitalize as capitalizeWords } from 'rarwe/helpers/capitalize';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },
  actions: {
    didTransition() {
      let band = this.modelFor(this.routeName);
      let name = capitalizeWords(band.name);
      document.title = `${name} songs - Rock & Roll`;
  },
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },
}});
