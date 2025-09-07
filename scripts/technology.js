import { dataTech, matchingDetails } from "./utils/pagesInfo.js";

function loadPage (id){
  const details = matchingDetails(dataTech,id);
  const techPageHtml = `
    <div class="nav-details-row">
       <nav class="nav-row">
        <button class="nav-buttons js-nav-button-1">1</button>
        <button class="nav-buttons js-nav-button-2">2</button>
        <button class="nav-buttons js-nav-button-3">3</button>
      </nav>
      <div class="tech-details">
        <p class="text-terminology">
          THE TERMINOLOGY… 
        </p>
        <p class="tech-name">
          ${details.name}
        </p>
        <p class="tech-description">
            ${details.description}
        </p>
      </div>
     </div>
      <picture>
        <source media="(max-width:1439px)" 
                srcset="${details.images.landscape}">
         <img src="${details.images.portrait}" 
          alt="tech-img" 
          class="tech-img"
          >
      </picture>`

  document.querySelector('.js-tech-details-row').innerHTML = techPageHtml;

  const button1 = document.querySelector('.js-nav-button-1');
  const button2 = document.querySelector('.js-nav-button-2');
  const button3 = document.querySelector('.js-nav-button-3');

  button1.addEventListener('click',()=>{
    loadPage(1);
  });

  button2.addEventListener('click',()=>{
    loadPage(2);
  });

  button3.addEventListener('click',()=>{
    loadPage(3);
  });

  switch(id){
    case 1 :
      button1.classList.add('action');
      break;
    case 2 :
      button2.classList.add('action');
      break;  
    case 3 :
      button3.classList.add('action');
      break;    
  }
}

loadPage(1);