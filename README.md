# send10
Small Node.js app to test a payment integration with Stripe.


## Add your Stripe API keys
Rename or duplicate the file ```env_sample``` to ```.env```.

__Duplicate__ (do this if you want to keep the original sample file as a reference)

```cp env_sample .env``` 

or

__Rename__

```mv env_sample .env```


Inside your new ```.env``` file you will find two environment variables to store your the API keys provided by Stripe.

```
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

## Start the app

```
npm start
```
