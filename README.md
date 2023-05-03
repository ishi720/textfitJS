# textfitJS

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b8b076a76cae4b24baeb40f4ed6ed438)](https://app.codacy.com/gh/ishi720/textfitJS/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

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
textShrinkCut( selector, leader, repeat );
```

**説明**

- 要素から文字がはみ出たら小さくします。それでもはみ出る場合は、文字を削ります。

**パラメータ**

- selector: cssセレクタ
- leader: 省略文字 (省略可。デフォルト"…")
- repeat: 繰り返す上限回数(省略可。デフォルト10)


-----------

### textCut()

```js
textCut( selector, leader )
```

**説明**

- 要素から文字がはみ出たら文字を削ります。

**パラメータ**

- selector: cssセレクタ
- leader: 省略文字 (省略可。デフォルト"…")

