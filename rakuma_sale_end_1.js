// ==UserScript==
// @name         rakuma_SALE_END_1
// @namespace    http://tampermonkey.net/
// @version      2024-01-03
// @description  try to take over the world!
// @author       You
// @match        https://item.fril.jp/*
// @grant        none
// ==/UserScript==

(function() {
// ボタンを作成し、bodyに追加
var startBtn = document.createElement('button');
startBtn.id = 'startBtn';
startBtn.style.position = 'fixed';
startBtn.style.zIndex = '9999';
startBtn.style.marginTop = '30px';
startBtn.textContent = '通常価格を取得';

document.body.prepend(startBtn);

// ボタンクリック時のイベントリスナーを設定
startBtn.addEventListener('click', function() {
  // '.commentmore-box'内の'a'要素を見つけてクリックイベントをトリガー
  var commentMoreBox = document.querySelector('.commentmore-box');
  var anchorElement = commentMoreBox.querySelector('a');

  if (anchorElement) {
    anchorElement.click();
    // '.comment-text p'内のテキストを取得し、通常価格を検索
    var commentItems = document.querySelectorAll('.comment-text p');
    var comLen = commentItems.length;
    var findText = '通常価格';
    var price;

    for (var i = 0; i < comLen; i++) {
      var findTextbox = commentItems[i].textContent;
      if (findTextbox.indexOf(findText) !== -1) {
        var priceTextIndex = findTextbox.indexOf(findText, 0);
        var slicePrice = findTextbox.slice(priceTextIndex + 5, priceTextIndex + 12);
        price = slicePrice.replace(',', '').replace(/円/g, '');
        break;
      }
    }

    // '.btn_buy'要素のhref属性を編集して遷移
    var editLink = document.querySelector('.btn_buy');
    if (editLink) {
      var editUrl = editLink.getAttribute('href');
      var editUrlPrm = editUrl + '?' + price;
      editLink.setAttribute('href', editUrlPrm);
      window.location.href = editUrlPrm;
    } else {
      alert('ボタンが見つかりません。');
    }
  }
});

})();