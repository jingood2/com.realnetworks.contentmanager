/**
 *
 * Created by kimjin-young on 2015. 6. 29..
 */
var ffmpeg = require('fluent-ffmpeg');
var _ = require('underscore');
var conf = require('../../../global-config');


module.exports = function(agenda) {

    agenda.define('3gp converting to wav', function(job, done) {

        var filePath;
        var pullname;

        _.each(job.attrs.data.files, function (file) {
            filePath = conf.CMSBaseDir + '/ments/' + file.container +'/';
            pullname = filePath + file.name;

            ffmpeg(pullname)
                .audioCodec(conf.ffmpegAudioArgs.codec)
                .audioChannels(conf.ffmpegAudioArgs.channel)
                .audioFrequency(conf.ffmpegAudioArgs.sampling)
                .on('error', function (err) {
                    console.log('An error occurred on file()' + err.message);
                })
                .saveToFile(filePath + file.name.substring(0,file.name.lastIndexOf(".")) + '.wav' );
        });

        done();
    });

    agenda.define('mp3 converting to wav', function(job,done){
      _.each(job.attrs.data.files,function(file){

        filePath = conf.CMSBaseDir + '/ments/' + file.container + '/';
        pullname = filePath + file.name;

      });
    })
}

