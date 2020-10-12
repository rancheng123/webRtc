var ffmpeg = require('ffmpeg');

try {
    var process = new ffmpeg('./1.mp4');
    process.then(function (video) {
        console.log('The video is ready to be processed');

        // Callback mode
        video.fnExtractSoundToMP3('/Volumes/Macintosh HD - 数据/Users/deo/WebstormProjects/知识/html/html5 自学/webrtc/webRtc/多路合并/1.mp3', function (error, file) {
            if (error){
                console.log('error: ' + error);
            }else{
                console.log('Audio file: ' + file);
            }

        });
    }, function (err) {
        console.log('Error: ' + err);
    });
} catch (e) {
    console.log(e.code);
    console.log(e.msg);
}
