module.exports = function(server) { 
  	// code to set up data source as shown above 

	var path = require('path');

	var homeDir = path.resolve('./');
	var baseDir = path.join(homeDir,'storage');

	console.log('basedir:' + baseDir );

	var ds = server.loopback.createDataSource({
    	connector: require('loopback-component-storage'),

    	provider: 'filesystem',
    	root: baseDir + '/ments'
		//provider: 'amazon',
		//key: 'daDLV8EWVKrmGKTqH8Gta3GLy98P9eZzvWnTlfcy',
		//keyId: 'AKIAIHVAYPAACHECVEQA'
	});
 
	var container = ds.createModel('mentstorage');
	server.model(container);

	var ds = server.loopback.createDataSource({
    	connector: require('loopback-component-storage'),
    	provider: 'filesystem',
    	root: baseDir + '/records'
		//provider: 'amazon',
		//key: 'daDLV8EWVKrmGKTqH8Gta3GLy98P9eZzvWnTlfcy',
		//keyId: 'AKIAIHVAYPAACHECVEQA'
	});
 
	var container = ds.createModel('recordstorage');
	server.model(container);
};

