const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  test('POST /api/translate text and locale', function(done) {
    let text = 'Something to translate';
    let locale = 'american-to-british';
    chai
      .request(server)
      .post('/api/translate')
      .send({text: text, locale: locale})
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.text, text);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });

  test('POST /api/translate text and invalid locale', function(done) {
    let text = 'Something to translate';
    let locale = undefined;
    chai
      .request(server)
      .post('/api/translate')
      .send({text: text, locale: locale})
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test('POST /api/translate missing text', function(done) {
    let text = undefined;
    let locale = 'american-to-british';
    chai
      .request(server)
      .post('/api/translate')
      .send({text: text, locale: locale})
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test('POST /api/translate missing locale', function(done) {
    let text = 'text';
    let locale = '';
    chai
      .request(server)
      .post('/api/translate')
      .send({text: text, locale: locale})
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  test('POST /api/translate empty text', function(done) {
    let text = '';
    let locale = 'american-to-british';
    chai
      .request(server)
      .post('/api/translate')
      .send({text: text, locale: locale})
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });

  test('POST /api/translate text that needs no translation', function(done) {
    let text = 'text';
    let locale = 'american-to-british';
    chai
      .request(server)
      .post('/api/translate')
      .send({text: text, locale: locale})
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.text, text);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });

});
