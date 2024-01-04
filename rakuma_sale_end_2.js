// ==UserScript==
// @name         rakuma_SALE_END_2
// @namespace    http://tampermonkey.net/
// @version      2024-01-03
// @description  try to take over the world!
// @author       You
// @match        https://fril.jp/item/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fril.jp
// @grant        none
// ==/UserScript==

(function() {
// ボタンを作成し、bodyに追加
  var startBtn = document.createElement('button');
  startBtn.id = 'startBtn';
  startBtn.style.position = 'fixed';
  startBtn.style.right = '10px';
  startBtn.style.zIndex = '9999';
  startBtn.textContent = '価格を変更';
  document.body.prepend(startBtn);
// ボタンクリック時のイベントリスナーを設定
  startBtn.addEventListener('click', function() {
  // 現在のURLからクエリパラメータを取得
    var getPrm = location.search;
    var price = getPrm.replace('?', '');
  // '#sell_price'要素の値を変更
    var inputPrice = document.getElementById('sell_price');
    if (inputPrice) {
      inputPrice.value = price;
    } else {
      alert('#sell_priceが見つかりません。');
    }
    // '#confirm'要素のクリックイベントをトリガー
    var confirmButton = document.getElementById('confirm');
    if (confirmButton) {
      confirmButton.click();
    } else {
      console.error('#confirmが見つかりません。');
    }
// 1秒後に'#submit'要素にフォーカスを設定し、クリックイベントをトリガー
setTimeout(function() {
  var submitButton = document.getElementById('submit');
  if (submitButton) {
    submitButton.focus();
    submitButton.click();
  } else {
    console.error('#submitが見つかりません。');
  }
}, 1000);

  });
})();