module.exports = {
    AUTH0_DOMAIN: 'tomohiro-sato.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:admin@ds255767.mlab.com:55767/item-rental',
    NAMESPACE: 'http://myapp.com/roles'
};