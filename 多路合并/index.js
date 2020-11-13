//ffmpeg 官网
//http://ffmpeg.org/documentation.html

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


//docker run jrottenberg/ffmpeg             -i https://vd2.bdstatic.com/mda-ki322h6z37cct922/sc/cae_h264_clips/mda-ki322h6z37cct922.mp4?auth_key=1602561944-0-0-18dff5a4dc8f5eff119581c701e91a58&bcevod_channel=searchbox_feed&pd=1&pt=3             -stats             $ffmpeg_options  - > /Users/rancheng/Downloads/out.mp4





