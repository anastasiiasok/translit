const inButton = document.querySelector('#in-button');
const inText = document.querySelector('#in-text');
const alphabet = {
  а: 'a',б: 'b',в: 'v', г: 'g',д: 'd', е: 'e',ё: 'yo',ж: 'zh',з: 'z',и: 'i',й: 'y',к: 'k',л: 'l',м: 'm',н: 'n',о: 'o',п: 'p',р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ъ: '\'\'',
  ы: 'y',
  ь: '\'',
  э: 'e',
  ю: 'yu',
  я: 'ya',
};

function textCutter(text) {
  return (text.length > 10) ? (`${text.substr(0, 10)}...`) : text;
}

function makeTranslit(text) {
  const charArr = text.split('');
  let translitWord = '';

  charArr.forEach((elem) => {
    if (alphabet[`${elem}`]) {
      translitWord += alphabet[`${elem}`];
    } else {
      translitWord += elem;
    }
  });

  return translitWord;
}

function addTranslit(text) {
  const translitDiv = document.createElement('div');
  const translit = makeTranslit(text);

  translitDiv.className = 'word translit-word';
  translitDiv.title = translit;
  translitDiv.innerText = textCutter(translit[0].toUpperCase() + translit.slice(1));

  document.querySelector('#translit-words').appendChild(translitDiv);
}

function addWord() {
  const wordDiv = document.createElement('div');
  const addedWord = inText.value.toLowerCase();

  wordDiv.className = 'word rus-word';
  wordDiv.title = addedWord;
  wordDiv.innerText = textCutter(addedWord[0].toUpperCase() + addedWord.slice(1));

  document.querySelector('#added-words').appendChild(wordDiv);
  addTranslit(addedWord);
}

inButton.addEventListener('click', () => {
  addWord();
  inText.value = '';
});

inText.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addWord();
    inText.value = '';
  }
}); 