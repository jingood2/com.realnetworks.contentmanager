/*
 * Global configuration shared by components
 */

var url = require('url');
var p = require('./package.json');

var version = p.version.split('.').shift();

var conf = {
    hostname: '0.0.0.0',
    port: 3003,
    //restApiRoot: '/api' + (version > 0 ? '/v' + version : '') , // The path where to mount the REST API app
    restApiRoot: '/api', // The path where to mount the REST API app
    legacyExplorer: false
};

// The URL where the browser client can access the REST API is available.
// Replace with a full url (including hostname) if your client is being
// served from a different server than your REST API.
conf.restApiUrl = url.format({
    protocol: 'http',
    slashes: true,
    hostname: conf.hostname,
    port: conf.port,
    pathname: conf.restApiRoot
});

conf.CMSBaseDir = './storage';

conf.ffmpegAudioArgs = {
    codec: 'pcm_mulaw',
    channel: 1,
    sampling: 8000,
    extension :'wav'
};

conf.agendaDB = {
    host: '0.0.0.0',
    port: 27017,
    database: 'callPlanner_db2'
};

conf.jobTypes = ['audio-processing'];

module.exports = conf;

