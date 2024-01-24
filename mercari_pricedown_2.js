// ==UserScript==
// @name         mercari_pricedown02
// @namespace    http://tampermonkey.net/
// @version      2024-01-24
// @description  try to take over the world!
// @author       You
// @match        https://jp.mercari.com/sell/edit/*
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
    // インプットフィールドに価格を設定してフォーカス
    var inputPrice = document.querySelector('input[name="price"]');
    inputPrice.focus();
    inputPrice.select();
    // クリップボードからテキストを読み取る
    if (navigator.clipboard) {
      navigator.clipboard.readText()
      .then(function(text) {
        // テキストを読み取ってコピー
        inputPrice.value = text;
        inputPrice.select();
      })
      .catch(function(error) {
        console.error('Failed to read from clipboard: ', error);
      });
    }
  });
})();