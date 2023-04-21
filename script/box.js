const links = document.querySelectorAll('.box a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认跳转行为
    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    const targetOffsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth' // 平滑滚动
    });
  });
});



const backToTopBtn = document.querySelector('#back-to-top');

// 添加事件监听器，当用户点击a标签时，将页面滚动到顶部
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 添加滚动事件监听器，如果页面向下滚动超过一定距离，则显示a标签
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
