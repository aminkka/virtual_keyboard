const body = document.querySelector('body');

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const container = createElement('div', 'container');
body.append(container);

const title = createElement('h1', 'title');
container.append(title);
title.innerText = 'VIRTUAL KEYBOARD';

const textarea = createElement('textarea', 'textarea');
textarea.setAttribute('autofocus', '');
container.append(textarea);

const keyboard = createElement('div', 'keyboard');
container.append(keyboard);

const description = createElement('p', 'description');
container.append(description);
description.innerText = 'The virtual keyboard was created in macOS\nFor changing language: left ctrl + cmd';

const keyData = [
  {
    eventCode: 'Backquote',
    type: 'alphabetic',
    en: ['§', '±'],
    ru: ['ё', 'Ё'],
  },
  {
    eventCode: 'Digit1',
    type: 'numerical',
    en: ['1', '!'],
    ru: ['1', '!'],
  },
  {
    eventCode: 'Digit2',
    type: 'numerical',
    en: ['2', '@'],
    ru: ['2', '"'],
  },
  {
    eventCode: 'Digit3',
    type: 'numerical',
    en: ['3', '#'],
    ru: ['3', '№'],
  },
  {
    eventCode: 'Digit4',
    type: 'numerical',
    en: ['4', '$'],
    ru: ['4', '%'],
  },
  {
    eventCode: 'Digit5',
    type: 'numerical',
    en: ['5', '%'],
    ru: ['5', '%'],
  },
  {
    eventCode: 'Digit6',
    type: 'numerical',
    en: ['6', '^'],
    ru: ['6', ':'],
  },
  {
    eventCode: 'Digit7',
    type: 'numerical',
    en: ['7', '&'],
    ru: ['7', '?'],
  },
  {
    eventCode: 'Digit8',
    type: 'numerical',
    en: ['8', '*'],
    ru: ['8', '*'],
  },
  {
    eventCode: 'Digit9',
    type: 'numerical',
    en: ['9', '('],
    ru: ['9', '('],
  },
  {
    eventCode: 'Digit0',
    type: 'numerical',
    en: ['0', ')'],
    ru: ['0', ')'],
  },
  {
    eventCode: 'Minus',
    type: 'numerical',
    en: ['-', '_'],
    ru: ['-', '_'],
  },
  {
    eventCode: 'Equal',
    type: 'numerical',
    en: ['=', '+'],
    ru: ['=', '+'],
  },
  {
    eventCode: 'Backspace',
    type: 'functional',
    en: ['Backspace', 'Backspace'],
    ru: ['Backspace', 'Backspace'],
  },
  {
    eventCode: 'Tab',
    type: 'functional',
    en: ['Tab', 'Tab'],
    ru: ['Tab', 'Tab'],
  },
  {
    eventCode: 'KeyQ',
    type: 'alphabetic',
    en: ['q', 'Q'],
    ru: ['й', 'Й'],
  },
  {
    eventCode: 'KeyW',
    type: 'alphabetic',
    en: ['w', 'W'],
    ru: ['ц', 'Ц'],
  },
  {
    eventCode: 'KeyE',
    type: 'alphabetic',
    en: ['e', 'E'],
    ru: ['у', 'У'],
  },
  {
    eventCode: 'KeyR',
    type: 'alphabetic',
    en: ['r', 'R'],
    ru: ['к', 'К'],
  },
  {
    eventCode: 'KeyT',
    type: 'alphabetic',
    en: ['t', 'T'],
    ru: ['е', 'Е'],
  },
  {
    eventCode: 'KeyY',
    type: 'alphabetic',
    en: ['y', 'Y'],
    ru: ['н', 'Н'],
  },
  {
    eventCode: 'KeyU',
    type: 'alphabetic',
    en: ['u', 'U'],
    ru: ['г', 'Г'],
  },
  {
    eventCode: 'KeyI',
    type: 'alphabetic',
    en: ['i', 'I'],
    ru: ['ш', 'Ш'],
  },
  {
    eventCode: 'KeyO',
    type: 'alphabetic',
    en: ['o', 'O'],
    ru: ['щ', 'Щ'],
  },
  {
    eventCode: 'KeyP',
    type: 'alphabetic',
    en: ['p', 'P'],
    ru: ['з', 'З'],
  },
  {
    eventCode: 'BracketLeft',
    type: 'alphabetic',
    en: ['[', '{'],
    ru: ['х', 'Х'],
  },
  {
    eventCode: 'BracketRight',
    type: 'alphabetic',
    en: [']', '}'],
    ru: ['ъ', 'Ъ'],
  },
  {
    eventCode: 'Enter',
    type: 'functional',
    en: ['Enter', 'Enter'],
    ru: ['Enter', 'Enter'],
  },
  {
    eventCode: 'CapsLock',
    type: 'functional',
    en: ['CapsLock', 'CapsLock'],
    ru: ['CapsLock', 'CapsLock'],
  },
  {
    eventCode: 'KeyA',
    type: 'alphabetic',
    en: ['a', 'A'],
    ru: ['ф', 'Ф'],
  },
  {
    eventCode: 'KeyS',
    type: 'alphabetic',
    en: ['s', 'S'],
    ru: ['ы', 'Ы'],
  },
  {
    eventCode: 'KeyD',
    type: 'alphabetic',
    en: ['d', 'D'],
    ru: ['в', 'В'],
  },
  {
    eventCode: 'KeyF',
    type: 'alphabetic',
    en: ['f', 'F'],
    ru: ['а', 'А'],
  },
  {
    eventCode: 'KeyG',
    type: 'alphabetic',
    en: ['g', 'G'],
    ru: ['п', 'П'],
  },
  {
    eventCode: 'KeyH',
    type: 'alphabetic',
    en: ['h', 'H'],
    ru: ['р', 'Р'],
  },
  {
    eventCode: 'KeyJ',
    type: 'alphabetic',
    en: ['j', 'J'],
    ru: ['о', 'О'],
  },
  {
    eventCode: 'KeyK',
    type: 'alphabetic',
    en: ['k', 'K'],
    ru: ['л', 'Л'],
  },
  {
    eventCode: 'KeyL',
    type: 'alphabetic',
    en: ['l', 'L'],
    ru: ['д', 'Д'],
  },
  {
    eventCode: 'Semicolon',
    type: 'alphabetic',
    en: [';', ':'],
    ru: ['ж', 'Ж'],
  },
  {
    eventCode: 'Quote',
    type: 'alphabetic',
    en: ["'", '"'],
    ru: ['э', 'Э'],
  },
  {
    eventCode: 'Backslash',
    en: ['\\', '|'],
    ru: ['\\', '/'],
  },
  {
    eventCode: 'AltRight',
    type: 'functional',
    en: ['alt', 'alt'],
    ru: ['alt', 'alt'],
  },
  {
    eventCode: 'ShiftLeft',
    type: 'functional',
    en: ['shift', 'shift'],
    ru: ['shift', 'shift'],
  },
  {
    eventCode: 'IntlBackslash',
    en: ['`', '~'],
    ru: [']', '['],
  },
  {
    eventCode: 'KeyZ',
    type: 'alphabetic',
    en: ['z', 'Z'],
    ru: ['я', 'Я'],
  },
  {
    eventCode: 'KeyX',
    type: 'alphabetic',
    en: ['x', 'X'],
    ru: ['ч', 'Ч'],
  },
  {
    eventCode: 'KeyC',
    type: 'alphabetic',
    en: ['c', 'C'],
    ru: ['с', 'С'],
  },
  {
    eventCode: 'KeyV',
    type: 'alphabetic',
    en: ['v', 'V'],
    ru: ['м', 'М'],
  },
  {
    eventCode: 'KeyB',
    type: 'alphabetic',
    en: ['b', 'B'],
    ru: ['и', 'И'],
  },
  {
    eventCode: 'KeyN',
    type: 'alphabetic',
    en: ['n', 'N'],
    ru: ['т', 'Т'],
  },
  {
    eventCode: 'KeyM',
    type: 'alphabetic',
    en: ['m', 'M'],
    ru: ['ь', 'Ь'],
  },
  {
    eventCode: 'Comma',
    type: 'alphabetic',
    en: [',', '<'],
    ru: ['б', 'Б'],
  },
  {
    eventCode: 'Period',
    type: 'alphabetic',
    en: ['.', '>'],
    ru: ['ю', 'Ю'],
  },
  {
    eventCode: 'Slash',
    en: ['/', '?'],
    ru: ['.', ','],
  },
  {
    eventCode: 'ArrowUp',
    type: 'arrow',
    en: ['▲', '▲'],
    ru: ['▲', '▲'],
  },
  {
    eventCode: 'ShiftRight',
    type: 'functional',
    en: ['shift', 'shift'],
    ru: ['shift', 'shift'],
  },
  {
    eventCode: 'ControlLeft',
    type: 'functional',
    en: ['ctrl', 'ctrl'],
    ru: ['ctrl', 'ctrl'],
  },
  {
    eventCode: 'AltLeft',
    type: 'functional',
    en: ['alt', 'alt'],
    ru: ['alt', 'alt'],
  },
  {
    eventCode: 'MetaLeft',
    type: 'functional',
    en: ['cmd', 'cmd'],
    ru: ['cmd', 'cmd'],
  },
  {
    eventCode: 'Space',
    type: 'functional',
    en: [' ', ' '],
    ru: [' ', ' '],
  },
  {
    eventCode: 'MetaRight',
    type: 'functional',
    en: ['cmd', 'cmd'],
    ru: ['cmd', 'cmd'],
  },
  {
    eventCode: 'ArrowLeft',
    type: 'arrow',
    en: ['◀︎', '◀︎'],
    ru: ['◀︎', '◀︎'],
  },
  {
    eventCode: 'ArrowDown',
    type: 'arrow',
    en: ['▼', '▼'],
    ru: ['▼', '▼'],
  },
  {
    eventCode: 'ArrowRight',
    type: 'arrow',
    en: ['▶︎', '▶︎'],
    ru: ['▶︎', '▶︎'],
  },
];

function generateKey(data) {
  data.forEach((element) => {
    const key = createElement('div', 'key');
    if (element.eventCode === 'Space') {
      key.classList.add('key_space');
    }
    if (element.eventCode === 'Backspace') {
      key.classList.add('key_backspace');
    }
    if (element.eventCode === 'Tab') {
      key.classList.add('key_tab');
    }
    if (element.eventCode === 'Enter') {
      key.classList.add('key_enter');
    }
    if (element.eventCode === 'CapsLock') {
      key.classList.add('key_capslock');
    }
    if (element.eventCode === 'ShiftLeft' || element.eventCode === 'ShiftRight') {
      key.classList.add('key_shift');
    }
    if (element.eventCode === 'AltLeft' || element.eventCode === 'AltRight') {
      key.classList.add('key_alt');
    }
    if (element.eventCode === 'MetaLeft' || element.eventCode === 'MetaRight') {
      key.classList.add('key_meta');
    }
    if (element.eventCode === 'ControlLeft') {
      key.classList.add('key_ctrl');
    }
    if (element.type === 'functional') {
      key.classList.add('key_functional');
    }
    if (element.type === 'alphabetic') {
      key.classList.add('key_alphabetic');
    }
    if (element.type === 'arrow') {
      key.classList.add('key_arrow');
    }
    key.eventCode = element.eventCode;
    key.type = element.type;
    key.en = element.en;
    key.ru = element.ru;
    const [enSmall] = key.en;
    key.innerText = enSmall;
    keyboard.append(key);
  });
}
generateKey(keyData);

const keys = document.querySelectorAll('.key');

function addHighlightPressedKey(event) {
  keys.forEach((elem) => {
    if (event.code === elem.eventCode && event.code !== 'CapsLock') {
      elem.classList.add('key_active');
    } else if (event.target.classList.contains('key') && !event.target.classList.contains('key_capslock')) {
      event.target.classList.add('key_active');
    }
  });
}

function removeHighlightPressedKey(event) {
  keys.forEach((elem) => {
    if (event.code === elem.eventCode && event.code !== 'CapsLock') {
      elem.classList.remove('key_active');
    } else if (event.target.classList.contains('key') && !event.target.classList.contains('key_capslock')) {
      event.target.classList.remove('key_active');
    }
  });
}

document.addEventListener('mousedown', addHighlightPressedKey);
document.addEventListener('mouseup', removeHighlightPressedKey);

let lang = 'en';
function changeLanguage() {
  keys.forEach((elem) => {
    const [enSmall, enBig] = elem.en;
    const [ruSmall, ruBig] = elem.ru;
    if (elem.innerText === enSmall) {
      const langRuSmall = elem;
      langRuSmall.innerText = ruSmall;
    } else if (elem.innerText === enBig) {
      const langRuBig = elem;
      langRuBig.innerText = ruBig;
    } else if (elem.innerText === ruSmall) {
      const langEnSmall = elem;
      langEnSmall.innerText = enSmall;
    } else if (elem.innerText === ruBig) {
      const langEnBig = elem;
      langEnBig.innerText = enBig;
    }
  });
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

function swichKeysForChangeLanguage(func, key1, key2) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    if (!pressed.has(key1) || (!pressed.has(key2))) {
      return;
    }
    pressed.clear();
    func();
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }

    setLocalStorage();
  });
}
swichKeysForChangeLanguage(changeLanguage, 'ControlLeft', 'MetaLeft');

function toggleUpperCase(event) {
  if (event.target.classList.contains('key_capslock') || event.code === 'CapsLock') {
    document.querySelector('.key_capslock').classList.toggle('key_active');
    keys.forEach((elem) => {
      const [enSmall, enBig] = elem.en;
      const [ruSmall, ruBig] = elem.ru;
      if (elem.classList.contains('key_alphabetic') && (elem.innerText === enSmall)) {
        const langEnBig = elem;
        langEnBig.innerText = enBig;
      } else if (elem.classList.contains('key_alphabetic') && (elem.innerText === enBig)) {
        const langEnSmall = elem;
        langEnSmall.innerText = enSmall;
      } else if (elem.classList.contains('key_alphabetic') && (elem.innerText === ruBig)) {
        const langRuSmall = elem;
        langRuSmall.innerText = ruSmall;
      } else if (elem.classList.contains('key_alphabetic') && (elem.innerText === ruSmall)) {
        const langRuBig = elem;
        langRuBig.innerText = ruBig;
      }
    });
  }
}
keyboard.addEventListener('click', toggleUpperCase);

function pressOnShift(event) {
  if (event.target.classList.contains('key_shift') || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keys.forEach((elem) => {
      const [enSmall, enBig] = elem.en;
      const [ruSmall, ruBig] = elem.ru;
      if (lang === 'en') {
        if (elem.innerText === enSmall) {
          const langEnBig = elem;
          langEnBig.innerText = enBig;
        } else if (elem.innerText === enBig) {
          const langEnSmall = elem;
          langEnSmall.innerText = enSmall;
        }
      }
      if (lang === 'ru') {
        if (elem.innerText === ruSmall) {
          const langRuBig = elem;
          langRuBig.innerText = ruBig;
        } else if (elem.innerText === ruBig) {
          const langRuSmall = elem;
          langRuSmall.innerText = ruSmall;
        }
      }
    });
  }
}

keyboard.addEventListener('mousedown', pressOnShift);

function pressUpShift(event) {
  if (event.target.classList.contains('key_shift') || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keys.forEach((elem) => {
      const [enSmall, enBig] = elem.en;
      const [ruSmall, ruBig] = elem.ru;
      if (elem.innerText === enSmall) {
        const langEnBig = elem;
        langEnBig.innerText = enBig;
      } else if (elem.innerText === enBig) {
        const langEnSmall = elem;
        langEnSmall.innerText = enSmall;
      } else if (elem.innerText === ruBig) {
        const langRuSmall = elem;
        langRuSmall.innerText = ruSmall;
      } else if (elem.innerText === ruSmall) {
        const langRuBig = elem;
        langRuBig.innerText = ruBig;
      }
    });
  }
}

keyboard.addEventListener('mouseup', pressUpShift);

function text(event) {
  textarea.focus();
  if (event.target.classList.contains('key')) {
    if (event.target.classList.contains('key_capslock') || event.target.classList.contains('key_shift') || event.target.classList.contains('key_alt') || event.target.classList.contains('key_meta') || event.target.classList.contains('key_ctrl') || event.target.classList.contains('key_backspace')) {
      textarea.value += '';
    } else if (event.target.classList.contains('key_space')) {
      textarea.value += ' ';
    } else if (event.target.classList.contains('key_enter')) {
      textarea.value += '\n';
    } else if (event.target.classList.contains('key_tab')) {
      textarea.value += '\t';
    } else if (event.target.eventCode === 'ArrowLeft') {
      textarea.value += '◀︎';
    } else if (event.target.eventCode === 'ArrowRight') {
      textarea.value += '▶︎';
    } else if (event.target.eventCode === 'ArrowUp') {
      textarea.value += '▲';
    } else if (event.target.eventCode === 'ArrowDown') {
      textarea.value += '▼';
    } else {
      textarea.value += event.target.innerText;
    }
  }
  if (event.code) {
    if (event.code === 'CapsLock' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'MetaLeft' || event.code === 'MetaRight' || event.code === 'ControlLeft' || event.code === 'Backspace') {
      textarea.value += '';
    } else if (event.code === 'Space') {
      textarea.value += ' ';
    } else if (event.code === 'Enter') {
      textarea.value += '\n';
    } else if (event.code === 'Tab') {
      textarea.value += '\t';
    } else if (event.code === 'ArrowLeft') {
      textarea.value += '◀︎';
    } else if (event.code === 'ArrowRight') {
      textarea.value += '▶︎';
    } else if (event.code === 'ArrowUp') {
      textarea.value += '▲';
    } else if (event.code === 'ArrowDown') {
      textarea.value += '▼';
    } else {
      keys.forEach((elem) => {
        if (event.code === elem.eventCode) {
          textarea.value += elem.innerText;
        }
      });
    }
  }
}
keyboard.addEventListener('mousedown', text);

function deleteChar(event) {
  if (event.target.eventCode === 'Backspace' || event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  }
}
keyboard.addEventListener('click', deleteChar);

function textFromKeyboard(event) {
  event.preventDefault();
  keys.forEach((elem) => {
    if (event.code === elem.eventCode) {
      addHighlightPressedKey(event);
      toggleUpperCase(event);
      text(event);
      deleteChar(event);
      pressOnShift(event);
    }
  });
}
document.addEventListener('keydown', textFromKeyboard);

function textFromKeyboardAdd(event) {
  event.preventDefault();
  keys.forEach((elem) => {
    if (event.code === elem.eventCode) {
      removeHighlightPressedKey(event);
      pressUpShift(event);
    }
  });
}
document.addEventListener('keyup', textFromKeyboardAdd);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const currentLang = localStorage.getItem('lang');
    if (currentLang === 'en') {
      keys.forEach((elem) => {
        const [enSmall] = elem.en;
        const enLang = elem;
        enLang.innerText = enSmall;
        lang = 'en';
      });
    }
    if (currentLang === 'ru') {
      keys.forEach((elem) => {
        const [ruSmall] = elem.ru;
        const ruLang = elem;
        ruLang.innerText = ruSmall;
        lang = 'ru';
      });
    }
  }
}
window.addEventListener('load', getLocalStorage);
