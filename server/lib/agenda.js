/**
 *
 * Created by kimjin-young on 2015. 6. 30..
 */
var conf = require('../../global-config.js');
var Agenda = require('agenda');

var connectionOpts = conf.agendaDB.host + ':' + conf.agendaDB.port  +  '/' +  conf.agendaDB.database;
var agenda = new Agenda({db: {address: connectionOpts }});

conf.jobTypes.forEach(function(type) {
    require('./jobs/' + type)(agenda);
})

if(conf.jobTypes.length) {
    agenda.start();
}

module.exports = agenda;
