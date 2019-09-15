import { useState, useEffect } from 'react';

export default () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const handleOnLoad = () => {
      setStripe(window.Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY));
    };

    if (window.Stripe) {
      setStripe(window.Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY));
    } else {
      document
        .querySelector('#stripe-js')
        .addEventListener('load', handleOnLoad);
    }

    return () => {
      document
        .querySelector('#stripe-js')
        .removeEventListener('load', handleOnLoad);
    };
  }, []);

  return [stripe];
};
