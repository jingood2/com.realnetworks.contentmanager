/**
 * Created by kimjin-young on 2015. 6. 30..
 */

var GLOBAL_CONFIG = require('../global-config');

var isDevEnv = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
    port: GLOBAL_CONFIG.port,
    hostname: GLOBAL_CONFIG.hostname,
    restApiRoot: GLOBAL_CONFIG.restApiRoot,
    livereload: process.env.LIVE_RELOAD,
    isDevEnv: isDevEnv,
    legacyExplorer: GLOBAL_CONFIG.legacyExplorer,

    remoting: {
        errorHandler: { disalbeStackTrace: true },
        json: { strict: false, limit: '100kb'},
        cors: false,
        urlencoded: { extended: true, limit: '100kb'},
        context: { enableHttpContext: false },
        rest: { normalizeHttpPath: false, xml: false }
    },

    agendaHost : 'localhost',
    agendaPort : 27017,
    agendaDB : 'contentmanager_db',

    CMSBaseDir : './storage'

};
