"use strict";
const str1 = new textFit(".str1");

document.getElementById("btn-text-cut").addEventListener("click", () => {
    str1.restoreOriginalText();
    str1.textCut('【終了】');
});
document.getElementById("btn-text-shrink-cut").addEventListener("click", () => {
    str1.restoreOriginalText();
    str1.textShrinkCut('..など', 15);
});
document.getElementById("btn-restore").addEventListener("click", () => {
    str1.restoreOriginalText();
});
