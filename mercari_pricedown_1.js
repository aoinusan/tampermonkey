// ==UserScript==
// @name         mercari_pricedown01
// @namespace    http://tampermonkey.net/
// @version      2024-01-20
// @description  try to take over the world!
// @author       You
// @match        https://jp.mercari.com/item/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mercari.com
// @grant        none
// ==/UserScript==

(function() {
// ボディ要素にボタンを追加
  var button = document.createElement('button');
  button.id = 'priceDwnBtn';
  button.style.position = 'fixed';
  button.style.zIndex = '9999';
  button.style.marginTop = '30px';
  button.textContent = '値下げする';
  document.body.prepend(button);
  // ボタンにクリックイベントリスナーを追加
  document.getElementById('priceDwnBtn').addEventListener('click', function() {
    // price要素から2番目のspan要素を取得
    var priceElement = document.querySelector('[data-testid="price"] span:nth-child(2)');
    // 取得した要素のテキストを取得
    var priceText = priceElement.textContent;
    // カンマを削除して数値に変換
    var price = parseFloat(priceText.replace(/,/g, ''));
    var newPrice = price - 299;
    // クリップボードに価格をコピー
    navigator.clipboard.writeText(newPrice);
    var editLink = document.querySelector('[data-testid="checkout-button"] a');
    var editUrl = editLink.getAttribute('href');
    window.location.href = editUrl;
  });
})();