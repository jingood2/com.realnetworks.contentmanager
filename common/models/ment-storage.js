var agenda = require('../../server/lib/agenda.js');
var re = /(?:\.([^.]+))?$/;

module.exports = function(MentStorage) {


    MentStorage.afterRemote('upload',function(ctx,affectedModelInstance,next){

        var ext;

        /* ToDo : Allow only 'wav' extension
        ext = re.exec(file.name)[1];

        if( ext != 'wav') {
            console.log('File extension is not wav. Converting to wav....');
            agenda.now('3gp converting to wav', {files: ctx.result.result.files.file});
        }
        */

        agenda.now('3gp converting to wav', {files: ctx.result.result.files.file});
        next();
    });

};
