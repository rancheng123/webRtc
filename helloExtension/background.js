/*
    background.js 执行条件：
        插件安装时 执行

            1. 点击插件的 查看视图
            2. 点击刷新
 */



chrome.runtime.onInstalled.addListener(function() {


    //使用chrome 缓存
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });



    //指定此插件 什么条件下可以使用
    //使用chrome declarativeContent Api
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([

            //当页面url 包含developer.chrome.com， 该插件图标变成彩色（可用状态），点击弹出pageAction 指定的页面
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {hostEquals: '192.168.1.2:9001'},
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});


//当连接时
chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener((msg)=>{

        if(msg == 'getScreenCaptureSourceId'){
            //获取桌面捕获流
            chrome.desktopCapture.chooseDesktopMedia(
                ['screen', 'window'],
                port.sender.tab,
                (sourceId)=>{

                    if(sourceId) {
                        port.postMessage({
                            type: 'responseSourceId',
                            sourceId: sourceId
                        });
                    } else {
                        port.postMessage('PermissionDeniedError');
                    }
                }
            );
        }


    });
});