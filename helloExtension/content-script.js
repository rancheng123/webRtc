/*
    content-script 执行条件：
        符合条件的页面 加载时执行
 */


var port = chrome.runtime.connect();

port.onMessage.addListener(function (message) {

    //这里需要优化，向指定页面发送消息
    window.postMessage(message, '*');
});

window.addEventListener('message', function (event) {
    port.postMessage( event.data );
});


