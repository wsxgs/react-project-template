export function checkClient () {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'android'
  } else if (isiOS) {
    return 'ios'
  }
}

export function checkIsMobile () {
  var platform = navigator.platform
  if (platform !== 'MacIntel' && platform !== 'win32' && platform !== 'win64') {
    return true
  } else {
    return false
  }
}
