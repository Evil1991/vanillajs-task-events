document.addEventListener("DOMContentLoaded", function() {
  /// форма
  let form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    let inputs = document.querySelectorAll('input');

    inputs.forEach(item => {
      if (item.value.length === 0) {
        e.preventDefault()
        item.nextElementSibling.style.display = "block";
      } else {
        item.nextElementSibling.style.display = "none";
      }
    })
  })

  /// сменна цвета
  let btn = document.querySelector('.btn-color-change');
  let body = document.querySelector('body')

  btn.addEventListener('click', function() {
    body.classList.toggle('btn-color-change--active')
  })
});