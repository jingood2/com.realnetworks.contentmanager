var agenda = require('../../server/lib/agenda.js');
var re = /(?:\.([^.]+))?$/;

module.exports = function(mentStorage) {

    mentStorage.afterRemote('upload',function(ctx,instance,next){

        var ext;

        ext = re.exec(instance.result.files.file[0].name)[1];

        if( ext != 'wav') {
            console.log('File extension is not wav. Converting to wav....');
            agenda.now('3gp converting to wav', {files: ctx.result.result.files.file});
        }
        next();
    });

};
