import { click, fillIn } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
export async function loginAs(email) {
return authenticateSession({ token: 'a.signed.jwt', userEmail:
email });
}
