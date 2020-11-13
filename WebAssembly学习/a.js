// 参考地址
//  https://www.chenng.cn/post/WebAssembly-ffmpeg.html

// ffmpeg.js
//https://www.worldlink.com.cn/osdir/ffmpegjs.html
//

// demo
//https://github.com/ffmpegwasm/react-app

//聊聊前端webrtc的hevc解码那些事儿
//https://zhuanlan.zhihu.com/p/237759555

//各种尝试
//https://www.jianshu.com/u/9daf5a1fd425

//花椒直播的实例
//https://zhuanlan.zhihu.com/p/73772711?utm_source=com.tencent.qqlite


/*


    动态语言
        变量  可以改变
    静态语言
        变量不可以改变

    asm.js
        本质
            被生成的js(通过Emscripten 编译器将 C / C++ 转成)


                Emscripten 编译器
                    用途：
                        将 C / C++ 代码编译生成 asm.js
                    安装：
                        1.下载工具链

                            git clone https://github.com/emscripten-core/emsdk.git
                            cd emsdk
                            ./emsdk install latest
                            ./emsdk activate latest
                        2.
                            brew install cmake


        与js 的区别：
            1.变量是静态类型

                只提供两种数据类型。
                    32位带符号整数 （变量 | 0）

                        变量
                            var x = a | 0;  // x 是32位整数

                        函数的参数和返回值
                            function add(x, y) {
                              x = x | 0;
                              y = y | 0;
                              return (x + y) | 0;
                            }

                    64位带符号浮点数 （+变量）

                        var y = +a;     // y 是64位浮点数


            2.没有垃圾回收机制

                debugger;
                var buffer = new ArrayBuffer(32768);
                var HEAP8 = new Int8Array(buffer);
                function compiledCode(ptr) {
                  HEAP8[ptr] = 12;
                  return HEAP8[ptr + 4];
                }
                compiledCode(1)


        执行过程
            JavaScript 引擎 将asm.js 转成汇编语言
            浏览器调用 WebGL 通过 GPU 执行 asm.js






































*/
