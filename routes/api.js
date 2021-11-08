'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      if (req.body.text == undefined || req.body.locale == undefined) {
        res.json({error: 'Required field(s) missing'});

      } else if (!req.body.text) {
        res.json({error: 'No text to translate'});

      } else {
        let text = req.body.text;
        let locale = req.body.locale;

        if (locale == 'american-to-british') {
          let result = translator.amerToBrit(text);
          if (result != text) {
            res.json({text: text, translation: result});
          } else {
            res.json({text: text, translation: 'Everything looks good to me!'});
          }

        } else if (locale == 'british-to-american') {
          let result = translator.britToAmer(text);
          if (result != text) {
            res.json({text: text, translation: result});
          } else {
            res.json({text: text, translation: 'Everything looks good to me!'});
          }
          
        } else if (locale != 'american-to-british' && locale != 'british-to-american') {
          res.json({error: 'Invalid value for locale field'});
        }
      }
    });
};
