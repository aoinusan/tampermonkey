// ==UserScript==
// @name         rakuma_pricedown
// @namespace    http://tampermonkey.net/
// @version      2024-01-04
// @description  try to take over the world!
// @author       You
// @match        https://fril.jp/item/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fril.jp
// @grant        none
// ==/UserScript==

(function() {
// ボタンを作成し、bodyに追加
  var changeBtn = document.createElement('button');
  changeBtn.id = 'changeBtn';
  changeBtn.style.position = 'fixed';
  changeBtn.style.zIndex = '9999';
  changeBtn.style.marginTop = '30px';
  changeBtn.textContent = '100円値下げする';
  document.body.prepend(changeBtn);
// ボタンクリック時のイベントリスナーを設定
  changeBtn.addEventListener('click', function() {
  // 現在の価格を取得し、新しい価格を計算
    var currentPriceInput = document.getElementById('sell_price');
    if (currentPriceInput) {
      var currentPrice = parseFloat(currentPriceInput.value);

      ///////////////////////////////////////////////////
      // ▼▼▼▼値下げ金額を変更する場合はここの数値を変更する▼▼▼▼
      var newPrice = currentPrice - 100;

    // 新しい価格を入力フィールドに設定
      currentPriceInput.value = newPrice;
    // '#confirm'要素のクリックイベントをトリガー
      var confirmButton = document.getElementById('confirm');
      if (confirmButton) {
        confirmButton.click();
      } else {
        console.error('#confirmが見つかりません。');
      }
    } else {
      console.error('#sell_priceが見つかりません。');
    }
// 1秒後に'#submit'要素クリックイベントをトリガー
    setTimeout(function() {
      var submitButton = document.getElementById('submit');
      if (submitButton) {
        submitButton.click();
      } else {
        console.error('#submitが見つかりません。');
      }
    }, 1000);
  });
})();
