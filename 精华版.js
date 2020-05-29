


/*
webRtc(Web Real-Time Communications) 实时通讯
作用：建立点对点（Peer-to-Peer）的连接，实现视频流，音频流的传输

*/

    //调试
        /*
            调试 和分析 webRtc

                chrome://webrtc-internals
       */

    //问题
        /*
            啸叫
            回声
                回声消除（浏览器内置引擎 处理）

            噪声
                噪声抑制（浏览器内置引擎 处理）

            丢包（网络抖动）
                视频抖动（浏览器内置引擎 处理）

                 丢包处理
                    比如： 网络较差， 但是画面依然流畅。
                            实现原理：
                                自动补充丢失桢画面
                                    根据前后两个桢画面的动画趋势  计算并生成 丢失的桢画面（）

                 性能优化

                    只渲染动态画面，不渲染静态画面
                        举例： 只渲染摇晃的人脸， 不渲染人身后的背景。

        */


    //信令
        //通过长连接 传递 端对端之间的 offer answer candidate
        ws.onmessage = function (event) {
            var data = JSON.parse(event.data);

        }


    //连接端


            /*
            硬件要求
                设备要求： zoom 在windows 上运行， 不推荐使用andrio  ,对于硬件要求高
                网络要求： 10方/2M
                编码： 视频流压缩
                解码： 视频流解压缩


                摄像头分辨率：720P,1080P, 2K,4K


                丢包
            */
        var pc = new webkitRTCPeerConnection({

            //ICE协议 Server 会生成很多的ICE 候选地址对，即Candidate
            iceServers: [{
                //作用： 为打通不同局域网的链接， （数据包报头中的ip地址转换） 将本地IP地址  转成  公共IP地址
                //，

                /*
                    同一局域网内，两台机器本地IP地址之间    可连接

                    不同局域网内，两台机器本地IP地址之间  不可连接
                    不同局域网内，两台机器公共IP地址之间    可连接


                */

                url: 'stun:23.21.150.121'
            }]
        });

        //获取统计数据
        pc.getStats(function(stats) {
            debugger
        });

        //获取发送过的视频流
        pc.getSenders()

        pc.removeTrack(sender)


        //sdp (offer answer 都是 SDP)
            /*
                定义： 会话描述协议,代表了一端的会话能力
                包含：
                    sess-version
                            修改会话（如添加或删除流），会话版本加1

                    音频流

                        流的状态
                        a=inactive  （通信方向，
                                            recvonly  只接收,
                                            sendonly  只发送,
                                            sendrecv  接受  也发送,
                                            inactive  不接受 不发送
                                     ）
                    视频流


                          影响视频流的因素
                            1. 网络抖动
                            2. 丢包
                            3. 采样频率

            */
            pc.setRemoteDescription(new RTCSessionDescription(data.offer));
            pc.setRemoteDescription(new RTCSessionDescription(data.answer))


        //ice候选地址对
        pc.addIceCandidate(new RTCIceCandidate(data.candidate))



        //添加视频流, 触发 onnegotiationneeded,  只有协商完成后，远端才能使用 这个流
        pc.addStream(localStream)

        //需要协商时
        pc.onnegotiationneeded = function() {

            // 协商过程

                // 请求
                pc.createOffer(function (offer/*寻找远端匹配机器（peer）的请求（带有特定的配置信息）*/) {
                    pc.setLocalDescription(offer)

                    ws.wsSend({
                        'action' : 'create',
                        'to': otherUserId,
                        'offer':offer
                    });
                }, function() {}, {
                    optional: [],
                    mandatory: {
                        OfferToReceiveAudio: false,
                        OfferToReceiveVideo: true
                    }
                })

                // 响应
                pc.createAnswer(function (answer) {
                    pc.setLocalDescription(answer);

                    //通过长连接 传递 端对端之间的 offer answer candidate
                    ws.wsSend({
                        'to': otherUserId,
                        'action' : 'answer' ,
                        'answer' : answer
                    });
                }, function() {}, {
                    optional: [],
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: true
                    }
                });
        }


        /*
                注意点
                    远端的pc.onaddstream的调用条件
                        1. 本地端添加视频      pc.addStream(localStream)
                        2. 本地端与远端协商
                             本地  发送offer给    远端
                             远端  发送answer给   本地
                */
        pc.onaddstream = function (event) {

        };


        //关闭连接 （释放性能 和 网络）
        pc.close()
















    // 音视频采集
        navigator.webkitGetUserMedia({
            audio: true,
            video: {
                mandatory: {},
                optional: [],

                //帧大小 (相机分辨率)
                width: 1280, height: 720,
                //帧率
                frameRate: {
                    ideal: 10,
                    max: 15
                },

                //编解码 I420  VP8

            }
        }, (stream)=>{

            /*
                设备：
                    麦克风(输入设备)
                    扬声器(输出设备)

                    摄像头  (输入设备)
                    电脑屏幕 (输出设备)

            */

            stream.getAudioTracks().forEach((audioTrack)=>{

                //禁用轨道
                audioTrack.enabled = true;

                // 真正的停止
                audioTrack.stop()
            })

            stream.onaddtrack = ()=>{
                debugger
            }
            stream.onremovetrack = ()=>{
                debugger
            }


        })



/*




    //直播中，H5实时解码音频并播放
    //https://www.jianshu.com/p/d45031b5d2c1

*/
