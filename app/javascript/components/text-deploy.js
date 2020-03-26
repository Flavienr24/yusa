const triggerItemList = document.querySelectorAll('.trigger');


triggerItemList.forEach((expertise) => {
  const triggerItem = expertise.querySelector('.pointer');
  const elementToDeploy = expertise.querySelector('.todeploy');
  const arrow = expertise.querySelector('.fa-caret-down');

  triggerItem.addEventListener('click', function displayOnClick() {
    if (elementToDeploy.style.display === "none") {
      elementToDeploy.style.display = "block";
      arrow.classList.add('trigger-active');
    } else {
      elementToDeploy.style.display = "none";
      arrow.classList.remove('trigger-active');
    };
  });
});






