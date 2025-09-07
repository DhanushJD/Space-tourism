import { matchingDetails, dataDestinations } from "./utils/pagesInfo.js";

function loadDestinationPage (name){
  const details = matchingDetails(dataDestinations,name);
  const destinationPageHtml = `
      <img src="${details.images.png}" alt="${details.name}" 
      class="place-img">
      <div class="destination-places">
        <nav class="places">
          <div class="js-moon-div">
            MOON
          </div>
          <div class="js-mars-div">
            MARS
          </div>
          <div class="js-europa-div">
            EUROPA
          </div>
          <div class="js-titan-div">
            TITAN
          </div>
        </nav>
        <p class="place-description">
           <span class="place-name">
              ${details.name}
           </span> 
          <span class="description">
              ${details.description}
          </span>
        </p>
        <img src="./assets/shared/line.svg" alt="line" class="description-line">
        <div class="distance-travel-time">
          <div class="distance-row">
            <p class="distance-title">
              AVG. DISTANCE
            </p>
            <p class="distance">
              ${details.distance}
            </p>
          </div>
          <div class="travel-time-row">
            <p class="travel-time-title">
              EST. TRAVEL TIME
            </p>
            <p class="travel-time">
              ${details.travel}
            </p>
          </div>
        </div>
      </div>`

  document.querySelector('.js-destination-contents').innerHTML = destinationPageHtml;

  const moon = document.querySelector('.js-moon-div');
  const mars = document.querySelector('.js-mars-div');
  const europa = document.querySelector('.js-europa-div');
  const titan = document.querySelector('.js-titan-div');

  moon.addEventListener('click',()=>{
     loadDestinationPage('MOON');
  });

  mars.addEventListener('click', ()=>{
     loadDestinationPage('MARS');
  });

  europa.addEventListener('click',()=>{
     loadDestinationPage('EUROPA');
  });
  
  titan.addEventListener('click',()=>{
     loadDestinationPage('TITAN');
  });

  switch(name){
    case 'MOON':
      moon.classList.add('action');
      break;
    case 'MARS':
      mars.classList.add('action');
      break;  
    case 'EUROPA':
      europa.classList.add('action');
      break;
    case 'TITAN':
      titan.classList.add('action');
      break;    
  }
}

loadDestinationPage('MOON');

