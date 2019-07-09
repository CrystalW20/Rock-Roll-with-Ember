import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    actions: {
        async signIn(event) {
        event.preventDefault();
        let { email, password } = this;
        await this.session.authenticate('authenticator:credentials',
email, password);
        await this.transitionToRoute('bands');
        }
    }
});
