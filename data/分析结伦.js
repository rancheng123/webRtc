老mtool

chrome 版本 61.0.3163.100

点击切换视频 移除旧视频流 并且添加新视频流


webrtc 运行机制




73.0.3683.121  新的



WebRTC Media Stream 是发生变化的，只是变化的方式不同。

老mtool 切屏时      重新创建 WMS

新mtool 切屏时     不重新创建 WMS ， 但是 WMS里面的旧的视频流被弃用，并且给当前WMS 注入一个新的视频流。


这是chrome 浏览器机制的变化。