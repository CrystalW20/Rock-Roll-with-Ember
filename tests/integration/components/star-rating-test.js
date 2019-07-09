import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | star-rating', function(hooks) {
  setupRenderingTest(hooks);

  test('The setRating action', async function(assert) {
    this.set('song', EmberObject.create({ rating: 3 }));
    this.set('actions', {
      updateRating(song, rating) {
        song.set('rating', rating);
      }
    });
    await render(hbs`{{star-rating rating=song.rating onClick=(action
'updateRating' song)}}`);
    await click('[data-test-rr=star-rating-5]');
    assert.equal(this.get('song.rating'), 5, "The clicked star's rating is correctly sent");
  }),

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{star-rating}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#star-rating}}
        template block text
      {{/star-rating}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
