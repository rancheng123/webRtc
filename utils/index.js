function winRequest(msg,callback){
    //第一次发送全局消息
    if(!window.winMsgMap){
        window.winMsgMap = {};

        window.addEventListener('message', function (event) {

            //只对相应 做回复
            if(event.data.type == 'response'){
                window.winMsgMap[event.data.msg](event)


                //delete window.winMsgMap[event.data.msg]
            }


        });
    }


    window.winMsgMap[msg] = callback;
    window.postMessage(msg)
}