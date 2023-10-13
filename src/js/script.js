const sideNavigation = document.querySelector('#side-navigation');
const hamburgerWrap = document.querySelector('.hamburger-wrap ');
const hamburgerIcon = document.querySelectorAll('.hamburger-wrap i');

const menagerBtn = document.querySelector('.contact-side-panel');
const popUp = document.querySelector('.popUp');
const popUpClose = document.querySelector('#closeButton');
const [...navLinks] = document.querySelectorAll('.navigation-links ');
const [...pages] = document.querySelectorAll('section');

const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const ChatBox = document.getElementById('chatBox');

/* Remove class toggle if windoWidth < 768px */

function addToggleClass() {
  const windowWidth = window.innerWidth;

  windowWidth < 768
    ? sideNavigation.classList.add('toggle')
    : sideNavigation.classList.remove('toggle');
}

function switchPages(linkAttributte) {
  pages.forEach((page) => {
    const pageId = page.getAttribute('id');
    if (linkAttributte === pageId) {
      page.classList.remove('none');
      page.classList.add('active');
    } else {
      page.classList.remove('active');
      page.classList.add('none');
    }
  });
}

function openPopup() {
  popUp.style.display = 'block';
}
function closePopup() {
  popUp.style.display = 'none';
}

function sendMessage(e) {
  e.preventDefault();
  const message = messageInput.value;
  console.log(message);

  if (message) {
    const messageElement = document.createElement('p');

    messageElement.classList.add('client-message');
    messageElement.innerText = message;

    ChatBox.appendChild(messageElement);
    messageInput.value = '';
  }
}

window.addEventListener('load', addToggleClass);
window.addEventListener('resize', addToggleClass);

/* Show PopUp */
menagerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup();
});

popUpClose.addEventListener('click', closePopup);

/* Switch pages */
navLinks.forEach((link) => {
  const linkAttributte = link.querySelector('a').getAttribute('page');

  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchPages(linkAttributte);
  });
});

/* Send Message from ChatBox */
sendMessageButton.addEventListener('click', sendMessage);

/* Toggle navigation after clicking in hamburger*/
hamburgerWrap.addEventListener('click', (e) => {
  e.preventDefault();
  hamburgerIcon.forEach((icon) => icon.classList.toggle('close'));
  sideNavigation.classList.toggle('toggle');
});
