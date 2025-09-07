const navbutton = document.createElement('button');
navbutton.type = 'button';
navbutton.classList.add('nav-button');
navbutton.id = 'nav-btn';

const imgElement = document.createElement('img');
imgElement.src = 'assets/shared/icon-hamburger.svg';
imgElement.alt = 'icon-hamberg';
imgElement.classList.add('nav-img');

navbutton.appendChild(imgElement);

document.querySelector('.js-header').appendChild(navbutton);

const navControlBtn = document.getElementById('nav-btn');
const navBar = document.querySelector('.js-nav-bar');

navControlBtn.addEventListener('click', ()=>{
  navBar.classList.add('active-nav-bar');
  navControlBtn.classList.add('off-nav-button');
  document.body.classList.add('no-scroll');
});

const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.classList.add('close-btn');

const closeImg = document.createElement('img');
closeImg.src = 'assets/shared/icon-close.png';
closeImg.alt = 'close-icon';
closeImg.classList.add('close-img');

closeButton.appendChild(closeImg);

navBar.appendChild(closeButton);

closeButton.addEventListener('click',()=>{
  navBar.classList.remove('active-nav-bar');
  navControlBtn.classList.remove('off-nav-button');
  document.body.classList.remove('no-scroll');
})