function animateY(obj, target, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    //目标值-页面被卷去的滚动距离
    var step = (target - window.pageYOffset) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (window.pageYOffset === target) {
      clearInterval(timer)
      callback && callback()
    }
    //让页面上下滚动
    window.scroll(0,window.pageYOffset+step);
  }, 30)
}
