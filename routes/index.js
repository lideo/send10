var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const amount = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Send10',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
})

router.post('/charge', function(req, res, next) {
  const token = req.body.stripeToken;

  (async () => {
    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: 'usd',
      description: 'Send10',
      source: token,
    })
      .then(result => {
        console.log(`[Success] Charge created: ${JSON.stringify(result)}`)
        res.redirect('/result/success');
      })
      .catch((error) => {
        console.log(`[Error] ${error.message}`);
        res.redirect('/result/error');
      });

  })();

});

router.get('/result/:result', function(req, res, next) {
  const message = req.params.result == 'error' ? 'An error ocurred :(' : 'THANK YOU!';
  res.render('result', { title: 'Send10', message: message });
});

module.exports = router;
