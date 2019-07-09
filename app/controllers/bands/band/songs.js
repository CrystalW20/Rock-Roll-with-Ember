import Controller from '@ember/controller';
import { empty, sort } from '@ember/object/computed';
import { computed } from '@ember/object';
import { capitalize } from 'rarwe/helpers/capitalize';
export default Controller.extend({
  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
  },
  isAddingSong: false, newSongTitle: '',
  isAddButtonDisabled: empty('newSongTitle'),
  newSongPlaceholder: computed('model.name', function() {
    let bandName = this.model.name;
    return `New ${capitalize(bandName)} song`;
  }),
  actions: {
    searchTerm: '',
    matchingSongs: computed('model.songs.@each.title', 'searchTerm',
      function() {
        let searchTerm = this.searchTerm.toLowerCase();
        return this.model.get('songs').filter((song) => {
          return song.title.toLowerCase().includes(searchTerm);
        });
      }),
    addSong() {
      this.set('isAddingSong', true); },
    cancelAddSong() { this.set('isAddingSong', false);
    },
    updateRating(song, rating) {
      song.set('rating', song.rating === rating ? 0 : rating);
    },
    sortBy: 'ratingDesc',
    sortProperties: computed('sortBy', function() {
      let options = {
        ratingDesc: ['rating:desc','title:asc'],
        ratingAsc: ['rating:asc','title:asc'],
        titleDesc: ['title:desc'],
        titleAsc: ['title:asc']
      };
      return options[this.sortBy];
    }),

    sortedSongs: sort('matchingSongs', 'sortProperties'),
    async saveSong(event) {
      event.preventDefault();
      let newSong = this.store.createRecord('song', {
        title: this.get('newSongTitle'),
        band: this.model
      });
      await newSong.save();
      this.set('newSongTitle', '');

    }
  }
});
