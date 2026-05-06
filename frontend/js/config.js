// Set this to your deployed backend URL, for example:
// window.CAMPUSFINDER_API_BASE_URL = 'https://your-backend-host.onrender.com/api';
window.CAMPUSFINDER_API_BASE_URL = window.CAMPUSFINDER_API_BASE_URL || '';
window.CAMPUSFINDER_ORS_API_KEY = window.CAMPUSFINDER_ORS_API_KEY || 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjBlOTcyODcwODYyMzQ4ZDc4MzdhYzMzNzM1N2RiYmY1IiwiaCI6Im11cm11cjY0In0=';

(function attachCampusFinderRuntimeConfig() {
    const explicitApiBaseUrl = String(window.CAMPUSFINDER_API_BASE_URL || '').trim().replace(/\/+$/, '');
    const explicitOrsApiKey = String(window.CAMPUSFINDER_ORS_API_KEY || '').trim();
    const hostname = window.location.hostname || '127.0.0.1';
    const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
    const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1';

    let apiBaseUrl = explicitApiBaseUrl;

    if (!apiBaseUrl) {
        if (window.location.port === '5173') {
            apiBaseUrl = '/api';
        } else if (isLocalHost) {
            apiBaseUrl = `${protocol}//${hostname}:5001/api`;
        }
    }

    window.CAMPUSFINDER_RUNTIME_CONFIG = {
        apiBaseUrl,
        orsApiKey: explicitOrsApiKey
    };
})();
