const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator;

suite('Unit Tests', () => {

  suite('American to British', function() {

    test('Mangoes are my favorite fruit.', function(done) {
      let text = 'Mangoes are my favorite fruit.';
      assert.equal(translator.amerToBrit(text), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
    });

    test('I ate yogurt for breakfast.', function(done) {
      let text = 'I ate yogurt for breakfast.';
      assert.equal(translator.amerToBrit(text), 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.');
      done();
    });

    test('We had a party at my friend\'s condo.', function(done) {
      let text = 'We had a party at my friend\'s condo.';
      assert.equal(translator.amerToBrit(text), 'We had a party at my friend\'s <span class="highlight">flat</span>.');
      done();
    });

    test('Can you toss this in the trashcan for me?', function(done) {
      let text = 'Can you toss this in the trashcan for me?';
      assert.equal(translator.amerToBrit(text), 'Can you toss this in the <span class="highlight">bin</span> for me?');
      done();
    });

    test('The parking lot was full.', function(done) {
      let text = 'The parking lot was full.';
      assert.equal(translator.amerToBrit(text), 'The <span class="highlight">car park</span> was full.');
      done();
    });

    test('Like a high tech Rube Goldberg machine.', function(done) {
      let text = 'Like a high tech Rube Goldberg machine.';
      assert.equal(translator.amerToBrit(text), 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
      done();
    });

    test('To play hooky means to skip class or work.', function(done) {
      let text = 'To play hooky means to skip class or work.';
      assert.equal(translator.amerToBrit(text), 'To <span class="highlight">bunk off</span> means to skip class or work.');
      done();
    });      

    test('No Mr. Bond, I expect you to die.', function(done) {
      let text = 'No Mr. Bond, I expect you to die.';
      assert.equal(translator.amerToBrit(text), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
      done();
    });

    test('Dr. Grosh will see you now.', function(done) {
      let text = 'Dr. Grosh will see you now.';
      assert.equal(translator.amerToBrit(text), '<span class="highlight">Dr</span> Grosh will see you now.');
      done();
    });

    test('Lunch is at 12:15 today.', function(done) {
      let text = 'Lunch is at 12:15 today.';
      assert.equal(translator.amerToBrit(text), 'Lunch is at <span class="highlight">12.15</span> today.');
      done();
    });

  });

  suite('British to American', function() {

    test('We watched the footie match for a while.', function(done) {
      let text = 'We watched the footie match for a while.';
      assert.equal(translator.britToAmer(text), 'We watched the <span class="highlight">soccer</span> match for a while.');
      done();
    });

    test('Paracetamol takes up to an hour to work.', function(done) {
      let text = 'Paracetamol takes up to an hour to work.';
      assert.equal(translator.britToAmer(text), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
      done();
    });

    test('First, caramelise the onions.', function(done) {
      let text = 'First, caramelise the onions.';
      assert.equal(translator.britToAmer(text), 'First, <span class="highlight">caramelize</span> the onions.');
      done();
    });

    test('I spent the bank holiday at the funfair.', function(done) {
      let text = 'I spent the bank holiday at the funfair.';
      assert.equal(translator.britToAmer(text), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
      done();
    });

    test('I had a bicky then went to the chippy.', function(done) {
      let text = 'I had a bicky then went to the chippy.';
      assert.equal(translator.britToAmer(text), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
      done();
    });

    test('I\'ve just got bits and bobs in my bum bag.', function(done) {
      let text = 'I\'ve just got bits and bobs in my bum bag.';
      assert.equal(translator.britToAmer(text), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
      done();
    });

    test('The car boot sale at Boxted Airfield was called off.', function(done) {
      let text = 'The car boot sale at Boxted Airfield was called off.';
      assert.equal(translator.britToAmer(text), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
      done();
    });

    test('Have you met Mrs Kalyani?', function(done) {
      let text = 'Have you met Mrs Kalyani?';
      assert.equal(translator.britToAmer(text), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
      done();
    });

    test('Prof Joyner of King\'s College, London.', function(done) {
      let text = 'Prof Joyner of King\'s College, London.';
      assert.equal(translator.britToAmer(text), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
      done();
    });

    test('Tea time is usually around 4 or 4.30.', function(done) {
      let text = 'Tea time is usually around 4 or 4.30.';
      assert.equal(translator.britToAmer(text), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
      done();
    });

  });

  suite('Highlight translation', function() {

    test('Mangoes are my favorite fruit.', function(done) {
      let text = 'Mangoes are my favorite fruit.';
      assert.equal(translator.amerToBrit(text), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
    });

    test('I ate yogurt for breakfast.', function(done) {
      let text = 'I ate yogurt for breakfast.';
      assert.equal(translator.amerToBrit(text), 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.');
      done();
    });

    test('We watched the footie match for a while.', function(done) {
      let text = 'We watched the footie match for a while.';
      assert.equal(translator.britToAmer(text), 'We watched the <span class="highlight">soccer</span> match for a while.');
      done();
    });

    test('Paracetamol takes up to an hour to work.', function(done) {
      let text = 'Paracetamol takes up to an hour to work.';
      assert.equal(translator.britToAmer(text), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
      done();
    });

  });

});
