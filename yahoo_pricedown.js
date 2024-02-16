// ==UserScript==
// @name         ヤフオク_pricedown
// @namespace    http://tampermonkey.net/
// @version      2024-02-15
// @description  try to take over the world!
// @author       You
// @match        https://auctions.yahoo.co.jp/sell/jp/show/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yahoo.co.jp
// @grant        none
// ==/UserScript==


(function() {
  var downPrice = 1000;

// ボディ要素にボタンを追加
  var button = document.createElement('button');
  button.id = 'startBtn';
  button.style.position = 'fixed';
  button.style.zIndex = '9999';
  button.style.top = '100px';
  button.style.right = '0';
  button.style.padding = '10px';
  button.style.backgroundColor = '#999';
  button.style.fontSize = '20px';
  button.textContent = downPrice + '円値下げする';
  document.body.prepend(button);
// ボタンにクリックイベントを追加
  document.getElementById('startBtn').addEventListener('click', function() {
// auc_BidOrBuyPrice_buynow IDを持つ要素を取得
    var priceField = document.getElementById('auc_BidOrBuyPrice_buynow');
// 現在の価格を取得
    var currentPrice = priceField ? parseInt(priceField.value) : NaN;
// 新しい価格を計算
    var newPrice = currentPrice - downPrice;
// 新しい価格を設定
    if (!isNaN(newPrice) && priceField) {
      priceField.value = newPrice;
    }

// ClosingYMD IDを持つ要素のselectedIndexプロパティを設定
    var closingYMDSelect = document.getElementById('ClosingYMD');
// selectedIndexプロパティを0に設定
    if (closingYMDSelect) {
      closingYMDSelect.selectedIndex = 0;
    }
// ClosingTime IDを持つ要素の値を設定
    var closingTimeElement = document.getElementById('ClosingTime');
// 値を設定
    if (closingTimeElement) {
      closingTimeElement.value = 22;
    }
// submit_form_btn IDを持つ要素のクリックイベントをトリガー
    var submitFormBtn = document.getElementById('submit_form_btn');
// クリックイベントをトリガー
    if (submitFormBtn) {
      submitFormBtn.click();
    }
  });

// #auc_preview_submit_downが存在するかを確認
  var submitDownButton = document.getElementById('auc_preview_submit_down');
  if (submitDownButton) {
    // 要素のスタイルを変更
    submitDownButton.style.position = 'fixed';
    submitDownButton.style.right = '0';
    submitDownButton.style.top = '150px';
  }
})();