function v1(func, wait) {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wati);
  }
}

function v2(func, wait) {
  var timeout;
  return function () {
    var context = this;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context);
    }, wait);
  }
}

function v3(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var agrs = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, agrs);
    }, wait);
  }
}

function v4(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var agrs = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}

function v5(func, wait, immediate) {
  var timeout, result;
  return function () {
    var context = this;
    var agrs = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
      return result;
    }
  }
}

function debounce(funct, wait, immediate) {
  var timeout, result;

  var debounced = function () {
    var context = this;
    var agrs = arguments;
    if (timeout) {
      clearInterval(timeout);
    }
    if (immediate) {
      var callNow = !timeout
    }
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
