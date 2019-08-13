// 文档: https://bit.ly/CRA-PWA

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(res => {
        console.log('serviceWorker register success')
      })
      .catch(e => {
        console.log('serviceWorker register false')
      })
  })
}
