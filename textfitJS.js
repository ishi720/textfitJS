"use strict";
class textFit {
    #orgText;
    #orgSize;

    constructor(selector) {
        this.selector = selector;
        this.targetEle = document.querySelector(this.selector);
        this.#orgText = this.targetEle.innerHTML;
        this.#orgSize = window.getComputedStyle(this.targetEle, null).getPropertyValue('font-size');
    }

    #isProtrudeWidth(ele) {
        const orgScrollLeft = ele.scrollLeft;
        ele.scrollLeft = 0;
        ele.scrollLeft = 1;
        const result = (ele.scrollLeft > 0);
        ele.scrollLeft = orgScrollLeft;
        return result;    
    }

    #isProtrudeHeight(ele) {
        const orgScrollTop = ele.scrollTop;
        ele.scrollTop = 0;
        ele.scrollTop = 1;
        const result = (ele.scrollTop > 0);
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
        this.targetEle.style.overflowY = "hidden";

        for (let i = 0; this.#isProtrudeHeight(this.targetEle) === true || i >= repeat ; i++) {

            if (i >= repeat - 1) {
                //文字を省略する
                this.textCut(leader);
                break;
            }

            //下限判定(メモ：Chromeの最小値が10px)
            if (parseInt(this.targetEle.style.fontSize) <= 10) {
                //文字を省略する
                this.textCut();
                break;

            } else {
                //サイズを調整
                const el = this.targetEle;
                const fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
                this.targetEle.style.fontSize = (parseFloat(fontSize) - 1) + 'px';
            }
        }
        //スクロールバーを消す
        this.targetEle.style.overflowY = "visible";
    }

    /**
    * 要素から文字がはみ出たら後ろの文字を消して…にする
    * @param leader 省略文字
    */
    textCut(leader = "…"){
        document.querySelectorAll(this.selector).forEach((element) => {
            let str = element.innerHTML;
            //一時的にスクロールバーをつける
            element.style.overflowY = 'hidden';
            while (this.#isProtrudeHeight(element) && str.length > 0) {
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
    * 要素のテキストとフォントサイズを元に戻す
    */
    restoreOriginalText() {
        this.targetEle.innerHTML = this.#orgText;
        this.targetEle.style.fontSize = this.#orgSize;
    }

    // 元のテキストのgetter
    get originalText() {
        return this.#orgText;
    }

    // 元のフォントサイズのgetter
    get originalFontSize() {
        return this.#orgSize;
    }
}
