module.exports = {
    AUTH0_DOMAIN: 'tomohiro-sato.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://tomohiro_sato:meanrsvp@ds036577.mlab.com:36577/mean-rsvp',
    NAMESPACE: 'http://myapp.com/roles'
};