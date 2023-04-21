

  const link = document.querySelector('.kongx .link');
  const dropdown = document.querySelector('.kongx .dropdown');
  const drop_bt = document.querySelector('.kongx .drop_bt');

  link.addEventListener('click', function() {
      dropdown.classList.toggle('show');
      drop_bt.style.transform = dropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
  });

  var wechatLink = document.getElementById('wechat-link');
  wechatLink.addEventListener('click', function(event) {
    event.preventDefault();
    var wechatNumber = 'BKXJason';
    var dummy = document.createElement('textarea');
    dummy.value = wechatNumber;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('微信号已复制到剪贴板：' + wechatNumber);
  });