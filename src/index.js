const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const codedLetters = expr.match(/.{1,10}/g);
    const decodedSymbols = codedLetters.reduce((accSymbol, currCode, index) => {
        currCode.match(/.{1,2}/g).forEach(element => {
            if (element == '00') accSymbol += '';
            if (element == '10') accSymbol += '.';
            if (element == '11') accSymbol += '-';
            if (element == '**') accSymbol += ' ';
        });
        return accSymbol += '|';
    }, '')
    const decodedLetters = decodedSymbols.split('|').slice(0, -1);
    const decodedWord = decodedLetters.reduce((accumWord, currentKey) => {
        return accumWord += (currentKey != '     ') ? MORSE_TABLE[currentKey] : ' ';
    }, '');
    return decodedWord;
}

module.exports = {
    decode
}