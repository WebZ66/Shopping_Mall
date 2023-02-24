window.onload = function () {
  var focus = document.querySelector('.banner')
  var arrow_l = document.querySelector('.left-triangle')
  var arrow_r = document.querySelector('.right-triangle')
  var ul = document.querySelector('.banner-ul')
  var rightNum = 0
  var leftNum = 0
  var num = 0
  var bannerLeft = 0
  var threeeBan
  var autoTimer = null
  var backTop = document.querySelector('.footer-triangle')
  backTop.onclick = function () {
    animateY(window, 0)
  }
  arrow_r.addEventListener('click', function () {
    if (rightNum == 4) {
      ul.style.left = 0 + 'px'
      rightNum = 0
    }
    rightNum++
    animate(ul, -rightNum * focus.offsetWidth)
  })
  arrow_l.addEventListener('click', function () {
    if (leftNum === 0) {
      leftNum = 3
      //先跳到最后复制的一张图片
      bannerLeft = -4 * focus.offsetWidth
      ul.style.left = bannerLeft + 'px'
      //往前跳一个 实际上左边隐藏了三个图片
      threeeBan = -3 * focus.offsetWidth
      animate(ul, threeeBan)
      num = 0
    } else {
      leftNum--
      num++
      animate(ul, threeeBan + focus.offsetWidth * num)
    }
  })
  autoTimer = setInterval(function () {
    //手动调用点击事件
    arrow_r.click()
  }, 2000)
  focus.onmouseenter = function () {
    clearInterval(autoTimer)
  }
  focus.onmouseleave = function () {
    autoTimer = setInterval(function () {
      //手动调用点击事件
      arrow_r.click()
    }, 3000)
  }
}
