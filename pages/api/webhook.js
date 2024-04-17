import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import { storeOrder } from "/utils/mongodb";
const endpointSecret = "whsec_9106c96b29bff16cc9e343f2fa2f97137d2036a5dd7fe49ce05070949e13be91";
import jwt from "jsonwebtoken";
const SECRET_HASH_KEY = process.env.SECRET_HASH_KEY;

export default async function Webhook(request, response){
    const event = request.body;
    switch(event.type){
        case 'checkout.session.completed':
            const data = event.data.object;
            const paymentIntent = data.payment_intent;
            const customer = await stripe.customers.retrieve(data.customer);
            const time = data.created;
            const metadata = customer.metadata;
            const token = metadata.userId;
            let userId = "guest";
            if(token !== 'guest'){
                const decoded = jwt.verify(token, SECRET_HASH_KEY);
                userId = decoded.userId;
            }
            const cart = await JSON.parse(metadata.cart);
            const contactDetails = customer.phone;
            const email = customer.email;
            const order = {
                cart,
                contactDetails,
                email,
                paymentIntent,
                time,
                track: null,
                userId
            }
            const result = await storeOrder(order);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    response.status(200).json({received: true});
}