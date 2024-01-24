// ==UserScript==
// @name         mercari_SALE_END_2
// @namespace    http://tampermonkey.net/
// @version      2024-01-01
// @description  try to take over the world!
// @author       You
// @match        https://jp.mercari.com/sell/edit/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mercari.com
// @grant        none
// ==/UserScript==

(function() {
// ボディ要素にボタンを追加
  var button = document.createElement('button');
  button.id = 'priceChangeBtn';
  button.style.position = 'fixed';
  button.style.zIndex = '9999';
  button.style.marginTop = '30px';
  button.textContent = '通常価格に戻す';
  document.body.prepend(button);
  document.getElementById('priceChangeBtn').addEventListener('click', function() {
    var getPrm = window.location.search;
    var price = getPrm.replace('?', '');
  // クリップボードに価格をコピー
    navigator.clipboard.writeText(price - 1);
  // インプットフィールドに価格を設定してフォーカス
    var inputPrice = document.querySelector('input[name="price"]');
    inputPrice.focus();
    inputPrice.select();
    inputPrice.value = price;
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