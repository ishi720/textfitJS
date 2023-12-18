class textFit {
    constructor(selector) {
        this.selector = selector;
        this.orgText = document.querySelector(this.selector).innerHTML;
        this.orgSize = window.getComputedStyle(document.querySelector(this.selector), null).getPropertyValue('font-size');
    }

    isProtrudeWidth(ele) {
        var orgScrollLeft = ele.scrollLeft;
        ele.scrollLeft = 0;
        ele.scrollLeft = 1;
        var result = (ele.scrollLeft > 0);
        ele.scrollLeft = orgScrollLeft;
        return result;    
    }

    isProtrudeHeight(ele) {
        var orgScrollTop = ele.scrollTop;
        ele.scrollTop = 0;
        ele.scrollTop = 1;
        var result = (ele.scrollTop > 0);
        ele.scrollTop = orgScrollTop;
        return result;
    }

    /**
    * 要素から文字がはみ出たら小さくする
    * @param leader 省略文字
    * @param repeat 繰り返す上限値
    */
    textShrinkCut(leader = "…", repeat = 10) {
        //一時的にスクロールバーをつける
        document.querySelector(this.selector).style.overflowY = "hidden";

        for (var i = 0; this.isProtrudeHeight(document.querySelector(this.selector)) === true || i >= repeat ; i++) {

            if( i >= repeat - 1){
                //文字を省略する
                this.textCut(leader);
                break;// 繰り返しの上限達した場合はループを抜ける
            }

            //下限判定(メモ：Chromeの最小値が10px)
            if ( parseInt(document.querySelector(this.selector).style.fontSize) <= 10 ){
                //文字を省略する
                this.textCut();
                break;// 繰り返しの上限達した場合はループを抜ける
            } else {
                //サイズを調整
                var el = document.querySelector(this.selector);
                var fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
                document.querySelector(this.selector).style.fontSize = (parseFloat(fontSize) - 1) + 'px';
            }
        }
        //スクロールバーを消す
        document.querySelector(this.selector).style.overflowY = "visible";
    }

    /**
    * 要素から文字がはみ出たら後ろの文字を消して…にする
    * @param leader 省略文字
    */
    textCut(leader = "…"){
        document.querySelectorAll(this.selector).forEach((element, i) => {
            var str = element.innerHTML;
            //一時的にスクロールバーをつける
            element.style.overflowY = 'hidden';
            while (this.isProtrudeHeight(element) === true) {
                if (str.length <= 0) {
                    break;
                }
                //末尾の文字を削る
                str = str.slice(0, -1); 
                //文字をセットする
                element.innerHTML = str + leader;
            }
            //スクロールバーを消す
            element.style.overflowY = 'visible';
        });
    }

    /**
    * テキストをもとに戻す
    */
    restoreOriginalText() {
        // 要素のテキストとフォントサイズを元に戻す
        document.querySelector(this.selector).innerHTML = this.orgText;
        document.querySelector(this.selector).style.fontSize = this.orgSize;
    }
}
