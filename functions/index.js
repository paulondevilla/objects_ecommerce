require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
};

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'invalid http method'
      })
    };
  }

  const data = JSON.parse(event.body);

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error('Required information is missing.');

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'missing information'
      })
    };
  }

  try {
    const customer = await stripe.customers.create({
      email: data.stripeEmail,
      source: data.stripeToken
    });

    console.log(
      `Starting the charges, amount:${data.stripeAmt}, email:${data.stripeEmail}`
    );

    const charge = await stripe.charges.create(
      {
        currency: 'usd',
        amount: data.stripeAmt,
        receipt_email: data.stripeEmail,
        customer: customer.id,
        description: 'Sample charge'
      },
      { idempotency_key: data.stripeIdempotency }
    );

    console.log(`Charge created: ${charge}`);

    return charge;
  } catch (err) {
    console.log(err);
  }
};
