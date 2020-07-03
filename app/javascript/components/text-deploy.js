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


// ---------- Services display on Home ----------


// repérer la div qui contient les domains
const domainItems = document.querySelectorAll('.domain');
// récupérer l'ID du domain au clic
for (let i = 0 ; i < domainItems.length; i++) {
   let itemClicked = domainItems[i];
   itemClicked.addEventListener('click' , getDomainID);

 }

function getDomainID(event) {
  // enlever le hover sur le domain
  if(document.querySelector('.slide_right-active'))
      document.querySelector('.slide_right-active').classList.remove('slide_right-active');
  // identifier l'ID du domain
  let domainID = event.target.id;
  // identifier l'élément cliqué
  let domainClicked = event.target.parentNode;
  // ajouter le hover sur l'élément cliqué
  domainClicked.classList.add('slide_right-active');
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


// ============= display on mouseover ===========

// récupérer les div qui contiennent les éléments à animer
const hoverTrigger =document.querySelectorAll('.hovertrigger');
// récupérer l'élément au hover
for (let i = 0 ; i < hoverTrigger.length; i++) {
   let itemHover = hoverTrigger[i];
// lancer les fonctions quand hover et out
   itemHover.addEventListener('mouseenter' , displayItem);
   itemHover.addEventListener('mouseleave' , hideItem);
 }

function displayItem(event) {
  let itemHovered = event.target;
  let itemToDisplay = itemHovered.querySelector('.displayhover');
  itemToDisplay.style.display='';

  // rechercher si il y a un élément à cacher
  if(itemHovered.querySelector('.hidehover') == null) {
  // si null, il ne fait rien et ne tombe pas en erreur
  } else {
  // indentifier l'élément à cacher
    let itemToHide = itemHovered.querySelector('.hidehover');
  // paramètrer le style
    itemToHide.style.opacity='0';
    itemToHide.style.position='fixed';
  };

};

function hideItem(event) {
  let itemHovered = event.target;
  let itemToDisplay = itemHovered.querySelector('.displayhover')
  itemToDisplay.style.display='none';

  // rechercher si il y a un élément à afficher
  if(itemHovered.querySelector('.hidehover') == null) {
  } else {
    let itemToHide = itemHovered.querySelector('.hidehover');
    itemToHide.style.opacity='1';
    itemToHide.style.position='static';
  };
}




