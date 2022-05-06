const body = document.querySelector('body');

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const container = createElement('div', 'container');
body.append(container);

const textarea = createElement('input', 'textarea');
container.append(textarea);

const keyboard = createElement('div', 'keyboard');
container.append(keyboard);

const keyData = [
  {
    eventCode: 'Backquote',
    type: 'functional',
    en: '§',
    ru: 'ё',
  },
  {
    eventCode: 'Digit1',
    type: 'numerical',
    en: '1',
    ru: '1',
  },
  {
    eventCode: 'Digit2',
    type: 'numerical',
    en: '2',
    ru: '2',
  },
  {
    eventCode: 'Digit3',
    type: 'numerical',
    en: '3',
    ru: '3',
  },
  {
    eventCode: 'Digit4',
    type: 'numerical',
    en: '4',
    ru: '4',
  },
  {
    eventCode: 'Digit5',
    type: 'numerical',
    en: '5',
    ru: '5',
  },
  {
    eventCode: 'Digit6',
    type: 'numerical',
    en: '6',
    ru: '6',
  },
  {
    eventCode: 'Digit7',
    type: 'numerical',
    en: '7',
    ru: '7',
  },
  {
    eventCode: 'Digit8',
    type: 'numerical',
    en: '8',
    ru: '8',
  },
  {
    eventCode: 'Digit9',
    type: 'numerical',
    en: '9',
    ru: '9',
  },
  {
    eventCode: 'Digit0',
    type: 'numerical',
    en: '0',
    ru: '0',
  },
  {
    eventCode: 'Minus',
    type: 'numerical',
    en: '-',
    ru: '-',
  },
  {
    eventCode: 'Equal',
    type: 'numerical',
    en: '=',
    ru: '=',
  },
  {
    eventCode: 'Backspace',
    type: 'functional',
    en: '<-',
    ru: '<-',
  },
  {
    eventCode: 'Tab',
    type: 'functional',
    en: '->|',
    ru: '->|',
  },
  {
    eventCode: 'KeyQ',
    type: 'alphabetic',
    en: 'q',
    ru: 'й',
  },
  {
    eventCode: 'KeyW',
    type: 'alphabetic',
    en: 'w',
    ru: 'ц',
  },
  {
    eventCode: 'KeyE',
    type: 'alphabetic',
    en: 'e',
    ru: 'у',
  },
  {
    eventCode: 'KeyR',
    type: 'alphabetic',
    en: 'r',
    ru: 'к',
  },
  {
    eventCode: 'KeyT',
    type: 'alphabetic',
    en: 't',
    ru: 'е',
  },
  {
    eventCode: 'KeyY',
    type: 'alphabetic',
    en: 'y',
    ru: 'н',
  },
  {
    eventCode: 'KeyU',
    type: 'alphabetic',
    en: 'u',
    ru: 'г',
  },
  {
    eventCode: 'KeyI',
    type: 'alphabetic',
    en: 'i',
    ru: 'ш',
  },
  {
    eventCode: 'KeyO',
    type: 'alphabetic',
    en: 'o',
    ru: 'щ',
  },
  {
    eventCode: 'KeyP',
    type: 'alphabetic',
    en: 'p',
    ru: 'з',
  },
  {
    eventCode: 'BracketLeft',
    type: 'alphabetic',
    en: '[',
    ru: 'х',
  },
  {
    eventCode: 'BracketRight',
    type: 'alphabetic',
    en: ']',
    ru: 'ъ',
  },
  {
    eventCode: 'Enter',
    type: 'functional',
    en: 'Enter',
    ru: 'Enter',
  },
  {
    eventCode: 'CapsLock',
    type: 'functional',
    en: 'CapsLock',
    ru: 'CapsLock',
  },
  {
    eventCode: 'KeyA',
    type: 'alphabetic',
    en: 'a',
    ru: 'ф',
  },
  {
    eventCode: 'KeyS',
    type: 'alphabetic',
    en: 's',
    ru: 'ы',
  },
  {
    eventCode: 'KeyD',
    type: 'alphabetic',
    en: 'd',
    ru: 'в',
  },
  {
    eventCode: 'KeyF',
    type: 'alphabetic',
    en: 'f',
    ru: 'а',
  },
  {
    eventCode: 'KeyG',
    type: 'alphabetic',
    en: 'g',
    ru: 'п',
  },
  {
    eventCode: 'KeyH',
    type: 'alphabetic',
    en: 'h',
    ru: 'р',
  },
  {
    eventCode: 'KeyJ',
    type: 'alphabetic',
    en: 'j',
    ru: 'о',
  },
  {
    eventCode: 'KeyK',
    type: 'alphabetic',
    en: 'k',
    ru: 'л',
  },
  {
    eventCode: 'KeyL',
    type: 'alphabetic',
    en: 'l',
    ru: 'д',
  },
  {
    eventCode: 'Semicolon',
    type: 'alphabetic',
    en: ';',
    ru: 'ж',
  },
  {
    eventCode: 'Quote',
    type: 'alphabetic',
    en: "'",
    ru: 'э',
  },
  {
    eventCode: 'Backslash',
    en: '\\',
    ru: '\\',
  },
  {
    eventCode: 'AltRight',
    type: 'functional',
    en: 'alt',
    ru: 'alt',
  },
  {
    eventCode: 'ShiftLeft',
    type: 'functional',
    en: 'Shift',
    ru: 'Shift',
  },
  {
    eventCode: 'IntlBackslash',
    en: '`',
    ru: ']',
  },
  {
    eventCode: 'KeyZ',
    type: 'alphabetic',
    en: 'z',
    ru: 'я',
  },
  {
    eventCode: 'KeyX',
    type: 'alphabetic',
    en: 'x',
    ru: 'ч',
  },
  {
    eventCode: 'KeyC',
    type: 'alphabetic',
    en: 'c',
    ru: 'с',
  },
  {
    eventCode: 'KeyV',
    type: 'alphabetic',
    en: 'v',
    ru: 'м',
  },
  {
    eventCode: 'KeyB',
    type: 'alphabetic',
    en: 'b',
    ru: 'и',
  },
  {
    eventCode: 'KeyN',
    type: 'alphabetic',
    en: 'n',
    ru: 'т',
  },
  {
    eventCode: 'KeyM',
    type: 'alphabetic',
    en: 'm',
    ru: 'ь',
  },
  {
    eventCode: 'Comma',
    type: 'alphabetic',
    en: ',',
    ru: 'б',
  },
  {
    eventCode: 'Period',
    type: 'alphabetic',
    en: '.',
    ru: 'ю',
  },
  {
    eventCode: 'Slash',
    en: '/',
    ru: '.',
  },
  {
    eventCode: 'ArrowUp',
    type: 'arrow',
    en: 'up',
    ru: 'up',
  },
  {
    eventCode: 'ShiftRight',
    type: 'functional',
    en: 'Shift',
    ru: 'Shift',
  },
  {
    eventCode: 'ControlLeft',
    type: 'functional',
    en: 'ctrl',
    ru: 'ctrl',
  },
  {
    eventCode: 'AltLeft',
    type: 'functional',
    en: 'alt',
    ru: 'alt',
  },
  {
    eventCode: 'MetaLeft',
    type: 'functional',
    en: 'cmd',
    ru: 'cmd',
  },
  {
    eventCode: 'Space',
    type: 'functional',
    en: ' ',
    ru: ' ',
  },
  {
    eventCode: 'MetaRight',
    type: 'functional',
    en: 'cmd',
    ru: 'cmd',
  },
  {
    eventCode: 'ArrowLeft',
    type: 'arrow',
    en: 'left',
    ru: 'left',
  },
  {
    eventCode: 'ArrowDown',
    type: 'arrow',
    en: 'down',
    ru: 'down',
  },
  {
    eventCode: 'ArrowRight',
    type: 'arrow',
    en: 'right',
    ru: 'right',
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

    key.innerText = element.en;
    keyboard.append(key);
  });
}

generateKey(keyData);

const keys = document.querySelectorAll('.key');
