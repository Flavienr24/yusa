const btn = document.querySelector('.ajax-btn');

const dontRefresh = (event) => {
  event.preventDefault();
}

btn.addEventListener('click', dontRefresh)
