import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;
export default Model.extend({
  title: attr('string'),
  rating: attr('number'),
  band: belongsTo()
});
