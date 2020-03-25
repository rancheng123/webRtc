var https=require('https');
var fs=require('fs');
var path = require('path');
var current_path = path.resolve(__dirname);


/*
    影响视频会议的因素
    1. 网速
    2. cpu

*/



var server=https.createServer({
    pfx:fs.readFileSync(current_path + '/https/keys/server.pfx'),
    passphrase:'1111'
}, function (req, res) {//要是单纯的https连接的话就会返回这个东西




    var source = req.url.split('?')[0];

    if(source == '/'){
        source = 'index.html'
    }

    var fileName=current_path + '/'  + source;
    fs.readFile(fileName,function(err,data){
        if(err)
            console.log("对不起，您所访问的路径出错");
        else{
            res.writeHead(200);
            res.end(data);
        }
    })
}).listen(9001,getIPAdress (),()=>{
    console.log('listen on ' + 'https://'+ getIPAdress () +':9001')
    console.log('视频会议访问 ' + 'https://'+ getIPAdress () +':9001/meeting.html?type=meeting&userId=1')
    console.log('投屏   访问 ' + 'https://'+ getIPAdress () +':9001/meeting.html?type=screenShare&userId=screen')
    console.log('websocket please visit ' + 'wss://'+ getIPAdress () +':9001')
});


var WebSocket=require('ws');
var wsServer = new WebSocket.Server( {
    //WebSocket 用https服务器 创建wss服务
    server: server
} );


global.wsServer = wsServer;
wsServer.on( 'connection', function ( wsClient ) {
    wsClient.on( 'message', function ( message ) {
        var message = JSON.parse(message);

        if(message.to){
            //过滤对应的客户端
            sendMessageToClients([message.to],message)
        }else{

            if(message.action == 'getConnections'){
                var arr = [];
                wsServer.clients.forEach(function each(client) {
                    arr.push(client.userId)
                });
                //过滤对应的客户端
                sendMessageToClients([this.userId],{
                    action: 'getConnectionsSuccess',
                    data: {
                        users: arr
                    }
                })
            }

            else if(message.action == 'join'){
                this.userId = message.from

                sendMessageToClients([this.userId],{
                    action: 'joinSuccess',
                    data: null
                })
            }
        }




    });


    function sendMessageToClients(userIds,message){
        wsServer.clients.forEach((client)=>{
            userIds.forEach((userId)=>{
                if(client.userId == userId){
                    client.send(JSON.stringify(message));
                }
            })
        })
    }

    wsClient.on('close', function() {

        var that = this;

        var otherClients = wsServer.clients.forEach((client)=>{
            if(client.userId != that.userId){

                //过滤对应的客户端
                sendMessageToClients([client.userId],{
                    closedUserId: that.userId,
                    action: 'close'
                })
            }
        })






    });


    // wsClient.isAlive = true;
    // wsClient.on('pong', function() {
    //     this.isAlive = true;
    // });

});


//检测客户端是否还会ping通  start
// const interval = setInterval(function ping() {
//     wsServer.clients.forEach(function each(client) {
//         if (client.isAlive === false) {
//             debugger
//             return client.terminate();
//         }
//
//         client.isAlive = false;
//         client.ping(()=>{});
//     });
// }, 3000);
//检测客户端是否还会ping通  end



function getIPAdress () {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}