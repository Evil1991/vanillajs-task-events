document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(item => {
      if (item.value.length === 0) {
        item.nextElementSibling.style.display = "block";
      } else {
        item.nextElementSibling.style.display = "none";
      }
    })

    event.preventDefault();
    event.stopPropagation();
  })

  const changeColorBtn = document.querySelector('.btn-color-change');
  const body = document.querySelector('body')

  changeColorBtn.addEventListener('click', () => {
    body.classList.toggle('btn-color-change--active')
  })
});