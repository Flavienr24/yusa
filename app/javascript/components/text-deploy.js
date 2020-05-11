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


// ---------- Services display on About ----------


// repérer la div qui contient les domains
const domainItems = document.querySelectorAll('.domain');
// récupérer l'ID du domain au clic
for (let i = 0 ; i < domainItems.length; i++) {
   let itemClicked = domainItems[i];
   itemClicked.addEventListener('click' , getDomainID);
 }

function getDomainID(event) {
  let domainID = event.target.id;
// récupérer l'ID des services du domaine affiché
  let servID = document.querySelector('.collapse.show').dataset.domain;
  displayServ(domainID, servID);
};

function displayServ(domainID, servID) {
// comparer ID du domaine cliqué et l'ID du domain affiché
  if(domainID === servID) {
    // si ID égaux, ne rien faire
  } else {
    // enlever la class show de la div dess serv affichés
    document.querySelector('.collapse.show').classList.remove("show");
    // trouver la liste des services qui qui a le même ID que le domain sélectionné
    // et ajouter la class show sur la div des services associés aux domains
    let servListSelect = document.querySelector(`[data-domain=${domainID}]`).classList.add("show");
  };
};





