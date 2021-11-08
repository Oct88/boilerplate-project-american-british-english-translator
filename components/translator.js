const americanOnly = require('./american-only.js'); //AB
const americanToBritishSpelling = require('./american-to-british-spelling.js'); // AB
const americanToBritishTitles = require("./american-to-british-titles.js") // AB
const britishOnly = require('./british-only.js') // BA

class Translator {

  amerToBrit(text) {
    if (!text) return false;
    else {
      for (let key in americanOnly) {
        let regex = new RegExp(`\\b${key}\\b`);
        if (regex.test(text)) {
          text = text.replace(key, `<span class="highlight">${americanOnly[key]}</span>`);
        }
      }

      for (let key in americanToBritishSpelling) {
        let regex = new RegExp(`\\b${key}\\b`);
        if (regex.test(text)) {
          text = text.replace(key, `<span class="highlight">${americanToBritishSpelling[key]}</span>`);
        }
      }

      for (let key in americanToBritishTitles) {
        let upperCaseKey = key[0].toUpperCase().concat(key.slice(1));
        if (text.includes(key)) {
          let toReplace = americanToBritishTitles[key][0].toUpperCase().concat(americanToBritishTitles[key].slice(1));
          text = text.replace(key, `<span class="highlight">${toReplace}</span>`);
        } else if (text.includes(upperCaseKey)) {
          let toReplace = americanToBritishTitles[key][0].toUpperCase().concat(americanToBritishTitles[key].slice(1));
          text = text.replace(upperCaseKey, `<span class="highlight">${toReplace}</span>`);
        }
      }

      for (let key in britishOnly) {
        let regex = new RegExp(`(?<!-)\\b${britishOnly[key]}\\b`);
        if (regex.test(text)) {
          text = text.replace(britishOnly[key], `<span class="highlight">${key}</span>`);
        }
      }

      let regex = /([0-6][0-6]):([0-6][0-6])/;
      if (regex.test(text)) {
        text = text.replace(regex, '<span class="highlight">$1.$2</span>');
      }

      return text;
    }
  }

  britToAmer(text) {
    if (!text) return false;
    else {
      for (let key in americanOnly) {
        let regex = new RegExp(`\\b${americanOnly[key]}\\b`);
        if (regex.test(text)) {
          text = text.replace(americanOnly[key], `<span class="highlight">${key}</span>`);
        }
      }

      for (let key in americanToBritishSpelling) {
        let regex = new RegExp(`\\b${americanToBritishSpelling[key]}\\b`);
        if (regex.test(text)) {
          text = text.replace(americanToBritishSpelling[key], `<span class="highlight">${key}</span>`);
        }
      }

      for (let key in americanToBritishTitles) {
        let regex1 = new RegExp(`\\b${americanToBritishTitles[key]}\\b`);
        let upperCaseVal =  americanToBritishTitles[key][0].toUpperCase().concat(americanToBritishTitles[key].slice(1));
        let regex2 = new RegExp(`\\b${upperCaseVal}\\b`);
        if (regex1.test(text)) {
          let rep = key[0].toUpperCase().concat(key.slice(1));
          text = text.replace(americanToBritishTitles[key], `<span class="highlight">${rep}</span>`);
        } else if (regex2.test(text)) {
          let rep = key[0].toUpperCase().concat(key.slice(1));
          text = text.replace(upperCaseVal, `<span class="highlight">${rep}</span>`);
        }
      }
      
      for (let key in britishOnly) {
        let regex = new RegExp(`(?<!-)\\b${key}\\b`);
        if (regex.test(text)) {
          text = text.replace(key, `<span class="highlight">${britishOnly[key]}</span>`);
        }
      }

      let regex = /([0-6]?[0-6])\.([0-6][0-6])/;
      if (regex.test(text)) {
        text = text.replace(regex, '<span class="highlight">$1:$2</span>');
      }

      return text;
    }
  }  

}

module.exports = Translator;
