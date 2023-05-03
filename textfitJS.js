//スクロールが発生していないかチェックする
function isProtrudeWidth(ele){
    var orgScrollLeft = ele.scrollLeft;
    ele.scrollLeft = 0;
    ele.scrollLeft = 1;
    var result = (ele.scrollLeft > 0);
    ele.scrollLeft = orgScrollLeft;
    return result;
}
function isProtrudeHeight(ele){
    var orgScrollTop = ele.scrollTop;
    ele.scrollTop = 0;
    ele.scrollTop = 1;
    var result = (ele.scrollTop > 0);
    ele.scrollTop = orgScrollTop;
    return result;
}

/**
* 要素から文字がはみ出たら小さくする
* @param selector cssセレクタ
* @param leader 省略文字
* @param repeat 繰り返す上限値
*/
function textShrinkCut( selector, leader, repeat ) {

    if( !leader ){
        leader = "…";
    }

    if( !repeat ){
        repeat = 10;
    }

    //一時的にスクロールバーをつける
    document.querySelector(selector).style.overflowY = "hidden";

    for (var i = 0; isProtrudeHeight(document.querySelector(selector)) === true || i >= repeat ; i++) {

        if( i >= repeat - 1){
            //文字を省略する
            textCut(selector,leader);
            break;// 繰り返しの上限達した場合はループを抜ける
        }

        //下限判定(メモ：Chromeの最小値が10px)
        if ( parseInt(document.querySelector(selector).style.fontSize) <= 10 ){
            //文字を省略する
            textCut(selector);
            break;// 繰り返しの上限達した場合はループを抜ける
        } else {
            //サイズを調整
            var el = document.querySelector(selector);
            var fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
            document.querySelector(selector).style.fontSize = (parseFloat(fontSize) - 1) + 'px';
        }
    }
    //スクロールバーを消す
    document.querySelector(selector).style.overflowY = "visible";
}

/**
* 要素から文字がはみ出たら後ろの文字を消して…にする
* @param selector cssセレクタ
* @param leader 省略文字
*/
function textCut(selector,leader){

    if( !leader ){
        leader = "…";
    }

    document.querySelectorAll(selector).forEach(function(element,i){

        var str = element.innerHTML;

        //一時的にスクロールバーをつける
        element.style.overflowY = 'hidden';

        while( isProtrudeHeight(element) === true ){
            if(str.length <= 0){
                break;
            }

            //末尾の文字を削る
            str = str.slice( 0, -1 ); 
            //文字をセットする
            element.innerHTML = str + leader;
        }

        //スクロールバーを消す
        element.style.overflowY = 'visible';
    });
}