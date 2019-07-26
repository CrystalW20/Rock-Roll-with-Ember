import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { buildValidations } from 'ember-cp-validations';
import emailFieldValidation from 'rarwe/validations/email-field';
import passwordFieldValidation from 'rarwe/validations/password-field';

const Validations = buildValidations({
    email: emailFieldValidation,
    password: passwordFieldValidation
    });

    export default Controller.extend(Validations, {
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
