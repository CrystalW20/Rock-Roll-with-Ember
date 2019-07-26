import DS from 'ember-data';
import { computed } from '@ember/object';
import { buildValidations, validator } from 'ember-cp-validations';

const { Model, attr, hasMany } = DS;
const Validations = buildValidations({
  description: [
    validator('length', {
      min: 12,
      message: "The description needs to be at least 12 characters"
    }),
    validator('year-of-formation')
  ]
});
export default Model.extend(Validations, {
  name: attr('string'),
  description: attr('string'),
  songs: hasMany(),
  isGreatBand: computed('songs.@each.rating', function () {
    let goodSongs = this.get('songs').filter((song) => song.rating >=
      4);
    return goodSongs.length >= 2;
  })
});
