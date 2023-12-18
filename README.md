# textfitJS

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b8b076a76cae4b24baeb40f4ed6ed438)](https://app.codacy.com/gh/ishi720/textfitJS/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![npm version](https://badge.fury.io/js/textfitjs.svg)](https://badge.fury.io/js/textfitjs)

文字がはみ出ないように制御するjsです。

# SAMPLE

https://ishi720.github.io/textfitJS/

# インストール

- npm

```
npm i textfitjs
```

- yarn

```
yarn add textfitjs
```

# 使い方

-----------

### textShrinkCut()

```js
const str2 = new textFit(".str2"); //初期化
str2.textShrinkCut('..など', 15); //てきすとふぃっと
str2.restoreOriginalText(); //元に戻す
```

**説明**

- 要素から文字がはみ出たら小さくします。それでもはみ出る場合は、文字を削ります。

**パラメータ**

- leader: 省略文字 (省略可。デフォルト"…")
- repeat: 繰り返す上限回数(省略可。デフォルト10)


-----------

### textCut()

```js
const str1 = new textFit(".str1"); //初期化
str1.textCut('【終了】'); //てきすとふぃっと
str1.restoreOriginalText(); //元に戻す
```


**説明**

- 要素から文字がはみ出たら文字を削ります。

**パラメータ**

- leader: 省略文字 (省略可。デフォルト"…")

