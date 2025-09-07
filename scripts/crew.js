import { dataCrew, matchingDetails } from "./utils/pagesInfo.js";

function loadPage (id){
  const details = matchingDetails(dataCrew,id);
  const crewPageHtml = `
      <div class="crew-details">
        <p class="crew-role">
         ${details.role}
      </p>
      <p class="crew-name">
        ${details.name}
      </p>
      <p class="crew-bio">
          ${details.bio}
      </p>
      <div class="button-rows">
        <button class="page-button js-page-button-1"></button>
        <button class="page-button js-page-button-2"></button>
        <button class="page-button js-page-button-3"></button>
        <button class="page-button js-page-button-4"></button>
      </div>
      </div>
      <img src="${details.images.webp}" alt="crew" class="crew-img">
    `
  document.querySelector('.js-crew-info').innerHTML = crewPageHtml;

  const button1 = document.querySelector('.js-page-button-1');
  const button2 = document.querySelector('.js-page-button-2');
  const button3 = document.querySelector('.js-page-button-3');
  const button4 = document.querySelector('.js-page-button-4');

  button1.addEventListener('click',()=>{
    loadPage(1);
  });

  button2.addEventListener('click',()=>{
    loadPage(2);
  });

  button3.addEventListener('click',()=>{
    loadPage(3);
  });

  button4.addEventListener('click',()=>{
    loadPage(4);
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
    case 4 :
      button4.classList.add('action');
      break;    
  }
}

loadPage(1);