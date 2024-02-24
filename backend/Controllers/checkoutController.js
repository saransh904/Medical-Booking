// checkoutController.js
import stripePackage from 'stripe';

const stripe = stripePackage('your-secret-key'); // Replace with your Stripe secret key

export const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: 'https://localhost:5173/', // Replace with your success URL
      cancel_url: 'https://localhost:5173/cancel', // Replace with your cancel URL
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
