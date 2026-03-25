// URLが変わったとき（クリックしたとき）に動くようにするよ
window.addEventListener('hashchange', updateActiveLink);

// ページを読み込んだときにも動くようにするよ
window.addEventListener('load', updateActiveLink);

function updateActiveLink() {
  // 1. 今のURLの「#なんちゃら」を取得する
  const currentHash = window.location.hash;

  // 2. すべてのリンクから一旦 "active" を消してリセット！
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // 3. もしURLにハッシュがあれば、その名前と同じリンクに "active" を付ける
  if (currentHash) {
    const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  } else {
    // もしURLに何も付いてなければ、一番最初の「About」を光らせておく
    document.querySelector('.nav-link[href="#about"]').classList.add('active');
  }
}

const pageTop = document.getElementById('page-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // 200pxスクロールしたら
    pageTop.style.display = 'block';
    // 右から出すアニメーションをつけたいならここを調整
  } else {
    pageTop.style.display = 'none';
  }
});