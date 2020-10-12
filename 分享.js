/*


    1.什么是webRtc
    2.流程
    3.影响因素
    4.编码
    5.其他的概念
    6.webRtc 的性能分析仪表盘


       影响视频编码的因素。（编码会影响机器性能）

           1.桢率  （越大，越流畅，耗性能越大，    越小，越不流畅， 耗性能越小）

               原理：
               一秒多少桢                   越大，      编码所消耗的qpSum(量子参数)越大

           2.桢的尺寸 （越大，空间感越强，耗性能越大，    越小，空间感越差， 耗性能越小） 设置合理， 可以避免性能的浪费。

               frameWidth                 越大，每一帧的编码所消耗的qpSum(量子参数)越大
               frameHeight                越大，每一帧的编码所消耗的qpSum(量子参数)越大

           3.相邻两桢的相似度
               画面的相似度                 越大，每一帧的编码所消耗的qpSum(量子参数)越大

                   画面越简单，编码压力越小
                   画面越复杂，编码压力越大

            4.屏幕分辨率（又称解析度）（屏幕像素点）

               相同尺寸屏幕（单位面积内），  分辨率越高（如 1600 x 1200），像素越多，单个像素尺寸越小，  画质越清晰
               相同尺寸屏幕（单位面积内），  分辨率越低（如 640 x 480）  ，像素越少，单个像素尺寸越大，  画质越模糊


                              QVGA                                  320x240px.    即横向有320个点，纵向有240个点 (VGA 的quarter四分之一)
                              VGA(Video Graphics Array 视频图像点)    640x480px.    即横向有640个点，纵向有480个点
                              HD（High Definition 高清）             1280x720px.   即横向有1280个点，纵向有720个点

                        1080p (垂直方向像素点数量为 1080, ，但并未规定水平方向像素点)
                              FHD（Full HD 全高清）                  1920x1080px.   即横向有1920个点，纵向有1080个点

                        1440p (垂直方向像素点数量为 1440, ，但并未规定水平方向像素点)


                        4K    (水平方向像素点数量为 4000)
                                                                    4096x2160px  即横向有4096个点，纵向有2160个点

                        8K    (水平方向像素点数量为 8000)
                                                                    7680x4320px  即横向有7680个点，纵向有4320个点




            5.摄像头像素（图像分辨率）
               200W像素镜头
               500W像素镜头（更加清晰，细节更精致）





            6.其他进程占用当前机器的性能情况

               其他进程占用的内存越小，越有利于编码
               其他进程占用的内存越大，越不利于编码

            7.入会方数
                入会方数越多，耗费性能越大
                入会方数越少，耗费性能越小
            8.网络
                网络变差，单位时间内传输数据能力变差，甚至丢包





        由于网络原因 和机器当时的性能原因  造成 roundTripTime(往返时间) 抖动




        过程
           1. 创建端
            var pc = new webkitRTCPeerConnection({
                iceServers: [{
                    url: 'stun:23.21.150.121'
                }]
            });


               2.收集 候选地址
               3. 添加 本地候选地址1，

               4. 添加 本地候选地址2，


               5. 获取并添加 远端候选地址1

               6. 获取并添加 远端候选地址2


                    pc.addIceCandidate(new RTCIceCandidate(data.candidate))

                    候选地址的类型
                        1.host                                   表示   与本地局域网上设备  的连接
                        2.srflx（服务器反身性Server Reflexive）    表示   通过公网Ip转换      的连接
                        3.relay                                  用于描述TURN的连接性。当双方都提供这样的数据包时，那么连接是绝对可能进行的。


               7. 候选地址配对
                    local1（???:青马坎）        remote1（???:黑风口）local2（0312:保定市）       remote2（010:北京市）

               14.检查可用的 候选地址对
               15.找到可用的 候选地址对，并且开始连接
               16.连接成功
               17.信令状态改变
                  stable



           1.视频采集，获取视频流

               1. 获取摄像头流
               2. 获取屏幕流

               navigator.webkitGetUserMedia({
                    audio: true,
                    video: {
                        mandatory: {},
                        optional: [],


                        width: 1280,
                        height: 720,

                        frameRate: {
                            max: 15
                        },

                        //前置或者后置摄像头  "user" : "environment"
                        facingMode: "user"
                    }
                }, (stream)=>{

               })


           1.添加视频轨道
           pc.addStream(localStream)

           //收发机同时具备接受和发送的能力
           2.添加收发机，将本地视频轨道放入发送装置内, 此时状态 不发送不接收（currentDirection:null）



           3.需要和远端进行协商
           3.创建offer
           5.创建offer成功
           6.设置本地描述( type offer 包含 version版本和 视频轨道信息，如流id )
           7.修改收发机，收发机增加了一个协商过的流id


                pc.createOffer(function (offer) {
                    ws.wsSend({
                        'action' : 'create',
                        'to': otherUserId,
                        'offer':offer
                    });
                    pc.setLocalDescription(offer)

                })



           8.信令状态改变
              have-local-offer


           9.发送offer 给远端






           12.远端返回answer


           12.设置远端描述(type answer 包含 version版本和 视频轨道信息，如流id )
                pc.setRemoteDescription(new RTCSessionDescription(data.answer))


           13.修改收发机
               1.如果远端有视频流返回
                   将远端视频轨道放入接收装置内, 此时状态 既发送又接收（currentDirection:sendrecv）
               2.如果远端没有视频流返回
                                            此时状态 只发送不接收（currentDirection:sendonly）


           14. 视频数据编码
           14. 开始传输数据



           18.关闭流
                var sender = pc.getSenders()[0]
                pc.removeTrack(sender);



    硬件要求
        设备要求： zoom 在windows 上运行， 不推荐使用andrio  ,对于硬件要求高
        网络要求： 10方/2M
        编码： 视频流压缩
        解码： 视频流解压缩

    问题： 会产生噪音（啸叫）
        产生原因： 音响放出的声音  又传给了话筒 （KTV 经常产生啸叫）。
        解决办法： 话筒和音响 不要离得太近。




    调试 和分析 webRtc
        chrome://webrtc-internals



码率(kbps,  kilobit per second)
    单位时间传送的数据位数

取样率（只属于音频）
    单位时间取样次数    44.1kHz(44100次/每秒)

帧率 （只属于视频，  fps,   frames per second，  ）
    单位时间运行的帧数   30fps （30桢/每秒）





    摄像头像素固定， 屏幕分辩率 越低， 画面越清晰
    摄像头像素越大， 屏幕分辩率 固定， 画面越清晰



视频编码

    定义：
        对原始的视频进行压缩，生成另一种视频格式文件

        原因：
            由于连续的帧之间相似性极高，（视频存在太多的冗余， 不利于储存传输）


    方式



        软件编码：CPU（Central Processing Unit，  中央处理器）进行编码，      CPU负载重，  性能相对低    实现直接、简单，参数调整方便，易升级，        低码率下 质量相对好


        硬件编码：GPU（Graphics Processing Unit， 图形处理器）硬件进行编码，              性能相对高        低码率下 质量相对查（移植了优秀的软编码算法，提升了质量）

            优点：
                效率高，功耗低
            缺点：
                缺乏有力的支持（包括滤镜、字幕等）
                局限性较大（例如打开硬件解码后PC的节能方面的功能失效cnq等）
                设置较为复杂；


            需要有支持 硬件解码功能的  芯片，显卡

            需要安装驱动


            VPU （video processing unit 硬件视频流编解码器）.




            录制器（内置编码器），生成压缩后的mp4 文件
            播放器（内置解码器），生成解压缩后的 原始的视频数据



   */
