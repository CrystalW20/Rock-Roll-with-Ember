import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'rarwe/config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: ENV.apiHost,
    
    authorize(xhr) {
        let { token } = this.get('session.data.authenticated');
        if (token) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        }
    }
});
