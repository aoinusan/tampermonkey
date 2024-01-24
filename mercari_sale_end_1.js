// ==UserScript==
// @name         mercari_SALE_END
// @namespace    http://tampermonkey.net/
// @version      2023-12-31
// @description  try to take over the world!
// @author       You
// @match        https://jp.mercari.com/item/*
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
  button.textContent = '通常価格を取得';
  document.body.prepend(button);
  // ボタンのクリックイベントを追加
  document.getElementById('priceChangeBtn').addEventListener('click', function() {
    var commentItems = document.querySelectorAll('.comment__449ec81a');
    var comLen = commentItems.length;
    var findText = '通常価格';
    var price;
    commentItems.
    forEach(function (element) {
      var findTextbox = element.querySelector('.merText').textContent;
      if (findTextbox.indexOf(findText) !== -1) {
        var priceText = findTextbox.indexOf(findText, 0);
        var slicePrice = findTextbox.slice(priceText + 5, priceText + 12);
        price = slicePrice.
        replace(',', '').replace(/円/g, '');
      }else {
        return false;
      }
    });
    var editLink = document.querySelector('[data-testid="checkout-button"] a');
    var editUrl = editLink.getAttribute('href');
    var editUrlPrm = editUrl + '?' + price;
    editLink.setAttribute('href', editUrlPrm);
    window.location.href = editUrlPrm;
  });
})();