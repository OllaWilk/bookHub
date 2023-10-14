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
  personalDataForm: [...document.querySelectorAll('#personal-data input')],
  personalDataSave: document.querySelector('#personal-data .button-form'),
};

class FormElement {
  constructor(inputValue, inputName) {
    this.inputValue = inputValue;
    this.inputName = inputName;
    this.sendMessage(inputValue);
    this.validation(inputValue, inputName);
  }

  sendMessage(inputValue) {
    const message = htmlElem.messageInput.value;
    console.log(inputValue);

    if (message) {
      const messageElement = document.createElement('p');

      messageElement.classList.add('client-message');
      messageElement.innerText = message;

      htmlElem.ChatBox.appendChild(messageElement);
      htmlElem.messageInput.value = '';
    }
  }

  validation(inputName, inputValue) {
    let isFormValidate = true;
    console.log(inputName);
    console.log(inputValue);
    const emailAddressInput = htmlElem.personalDataForm.querySelector(
      'input[name="email"]'
    );

    if (emailAddressInput.indexOf('@') < 0) {
      isFormValidate = false;
      htmlElem.personalDataForm.querySelector(
        '.error'
      ).innerHTML = ` Invalid ${inputName} adress`;
    }
    return !isFormValidate ? false : true;
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
    personalDataSave,
    personalDataForm,
  }) {
    /* Side Navigation Links */
    navLinks.forEach((link) => {
      const linkAttributte = link.querySelector('a').getAttribute('page');

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

      const message = new FormElement(inputValue);
      message.sendMessage();
    });

    personalDataSave.addEventListener('click', (e) => {
      e.preventDefault();

      personalDataForm.forEach((input) => {
        const inputName = input.getAttribute('name');
        new FormElement(inputName).validation();
      });
    });
  },

  start() {
    this.windowListener();
    this.btnslisteners(htmlElem);
  },
};

app.start();
