const btn = document.getElementById('lang-toggle'); // ボタンのIDを確認してね
const jaElements = document.querySelectorAll('.lang-ja');
const enElements = document.querySelectorAll('.lang-en');

btn.addEventListener('click', () => {
  // 1. 言語要素の表示・非表示を切り替え
  jaElements.forEach(el => {
    el.style.display = (el.style.display === 'none') ? 'block' : 'none';
  });
  
  enElements.forEach(el => {
    el.style.display = (el.style.display === 'none') ? 'block' : 'none';
  });

  // 2. ボタンの文字を切り替え
  // 現在のボタンの文字が「English / 日本語」や「English」だったら「日本語」に変える、という動き
  if (btn.innerText.includes('EN')) {
    btn.innerText = '言語 | 日本語';
  } else {
    btn.innerText = 'Language | EN';
  }
});