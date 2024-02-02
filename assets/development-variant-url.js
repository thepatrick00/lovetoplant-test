// This file should only change variant button urls from lovetoplant to local

let origin = 'https://lovetoplant.com';

// do everything inside if statement to not have to run extra js on production
document.addEventListener("DOMContentLoaded", () => {
  console.log('dom loaded')
  if (window.location.origin === 'http://127.0.0.1:9292') {
    origin = 'http://127.0.0.1:9292'
    const buttonArr = document.querySelectorAll('.variant-button');
    const localUrl = 
    buttonArr.forEach(button => {
      // pathname -> "/products/alocasia-polly-small"
      button.href = origin + '//' + button.pathname;
    })
  }
})
