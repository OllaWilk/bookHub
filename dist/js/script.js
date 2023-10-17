/* eslint-disable indent */
/* HTML elements */
const htmlElem = {
  sideNavigation: document.querySelector('#side-navigation'),
  hamburgerWrap: document.querySelector('.hamburger-wrap '),
  hamburgerIcon: document.querySelectorAll('.hamburger-wrap i'),
  menagerBtn: document.querySelector('.contact-side-panel'),
  popUp: document.querySelector('.popUp'),
  popUpClose: document.querySelector('#closeButton'),
  navLinks: [...document.querySelectorAll('.navigation-links ')],
  pages: [...document.querySelectorAll('section')],
  messageInput: document.getElementById('messageInput'),
  sendMessageButton: document.getElementById('sendMessageButton'),
  ChatBox: document.getElementById('chatBox'),
  personalDataForm: document.querySelector('#personal-data form'),
};

class FormElement {
  constructor() {}

  sendMessage(inputValue) {
    console.log('wnetrze send message', inputValue);

    if (inputValue) {
      const messageElement = document.createElement('p');

      htmlElem.messageInput.parentElement.querySelector('.error').innerHTML =
        '';
      messageElement.classList.add('client-message');
      messageElement.innerText = inputValue;
      htmlElem.ChatBox.appendChild(messageElement);
      htmlElem.messageInput.value = '';
    } else {
      htmlElem.messageInput.parentElement.querySelector('.error').innerHTML =
        'Please write a message';
    }
  }

  validation(inputs) {
    let password = inputs[inputs.length - 2].value;

    [...inputs].forEach((input) => {
      const inputName = input.getAttribute('name');

      switch (inputName) {
        case 'name':
          if (input.value.length < 3 || input.value.length > 21) {
            input.parentElement.querySelector('.error').innerHTML =
              'The name should be between 3 and 15 characters.';
          } else {
            input.parentElement.querySelector('.error').innerHTML = '';
          }
          break;
        case 'surname':
          if (input.value.length < 3 || input.value.length > 65) {
            input.parentElement.querySelector('.error').innerHTML =
              'The last name should have more than 3 characters';
          } else {
            input.parentElement.querySelector('.error').innerHTML = '';
          }
          break;
        case 'email':
          if (input.value.indexOf('@') < 1) {
            input.parentElement.querySelector('.error').innerHTML =
              'Please enter a valid email address. ';
          } else {
            input.parentElement.querySelector('.error').innerHTML = '';
          }
          break;
        case 'phone':
          if (input.value.length < 9 || input.value.length > 15) {
            input.parentElement.querySelector('.error').innerHTML =
              'Please enter a valid phone number. ';
          } else {
            input.parentElement.querySelector('.error').innerHTML = '';
          }
          break;
        case 'password':
          if (input.value.length < 8) {
            input.parentElement.querySelector('.error').innerHTML =
              'The password must have a specified length (e.g., at least 8 characters). ';
          } else if (!/[A-Z]/.test(input.value)) {
            input.parentElement.querySelector('.error').innerHTML =
              'The password must contain at least one uppercase letter. ';
          } else if (!/[a-z]/.test(input.value)) {
            input.parentElement.querySelector('.error').innerHTML =
              'The password must contain at least one lowwercase letter. ';
          } else if (!/\d/.test(input.value)) {
            input.parentElement.querySelector('.error').innerHTML =
              'he password must contain at least one digit.';
          } else {
            input.parentElement.querySelector('.error').innerHTML = '';
          }
          break;
        case 'repeat-password':
          console.log(password);
          if (input.value !== password) {
            input.parentElement.querySelector('.error').innerHTML =
              'the passwords do not match';
          } else {
            input.parentElement.querySelector('.error').innerHTML = '';
          }
          break;
      }
    });
  }
}

const app = {
  toggleNavigation() {
    const windowWidth = window.innerWidth;

    windowWidth < 768
      ? htmlElem.sideNavigation.classList.add('toggle')
      : htmlElem.sideNavigation.classList.remove('toggle');
  },

  switchPages(linkAttributte) {
    linkAttributte = htmlElem.pages.forEach((page) => {
      const pageId = page.getAttribute('id');
      if (linkAttributte === pageId) {
        page.classList.remove('none');
        page.classList.add('active');
      } else {
        page.classList.remove('active');
        page.classList.add('none');
      }
    });
  },

  windowListener() {
    const thisApp = this;
    window.addEventListener('load', thisApp.toggleNavigation);
    window.addEventListener('resize', thisApp.toggleNavigation);
  },

  btnslisteners({
    navLinks,
    hamburgerWrap,
    menagerBtn,
    popUpClose,
    popUp,
    sendMessageButton,
    personalDataForm,
  }) {
    /* Side Navigation Links */
    navLinks.forEach((link) => {
      const linkAttributte = link.querySelector('a').getAttribute('data-page');

      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchPages(linkAttributte);
      });
    });

    /* Hamburger toggle */
    hamburgerWrap.addEventListener('click', (e) => {
      e.preventDefault();
      htmlElem.hamburgerIcon.forEach((icon) => icon.classList.toggle('close'));
      htmlElem.sideNavigation.classList.toggle('toggle');
    });

    /* PopUp contact with manager */
    menagerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      htmlElem.popUp.style.display = 'block';
    });

    popUpClose.addEventListener('click', (e) => {
      e.preventDefault();
      popUp.style.display = 'none';
    });

    /* Send message to manager */
    sendMessageButton.addEventListener('click', (e) => {
      e.preventDefault();
      const inputValue =
        sendMessageButton.parentElement.querySelector('#messageInput').value;

      const message = new FormElement();
      message.sendMessage(inputValue);
    });

    /* Send personal data form */
    personalDataForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = e.target.querySelectorAll('input');

      new FormElement().validation(inputs);
    });
  },

  start() {
    this.windowListener();
    this.btnslisteners(htmlElem);
  },
};

app.start();
