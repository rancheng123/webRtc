let changeColor = document.getElementById('changeColor');

//获取缓存中的值
chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});


changeColor.onclick = function(element) {
    let color = element.target.value;

    //获取所有标签页（可以使用此插件的）
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        //在某个页面中执行一段代码
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};