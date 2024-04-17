const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function CheckoutSession(req, res) {
    if (req.method === 'POST') {
        try{
            if(!req.body.cartItems || !req.body.userId){
                return res.status(400).json({error : 'Missing required fields'})
            }
            const cart = req.body.cartItems.map((item) => {
                return {
                    name : item.name,
                    size: item.size,
                    images : [item.images[0]],
                    description : item.description,
                    price : item.price,
                    quantity : parseFloat(item.quantity),
                }
            });
            const mData = req.body.cartItems.map((item)=>{
                return {
                    id : item.id,
                    size: item.size,
                    quantity: item.quantity,
                }
            })
            const customer = await stripe.customers.create({
                metadata: {
                    userId: req.body.userId,
                    cart : JSON.stringify(mData),
                }
            });
            const itemsCount = cart.reduce((acc, item) => acc + parseInt(item.quantity), 0);
            const line_items = cart.map((item) => {
                return {
                    price_data: {
                        currency: "GBP",
                        product_data: {
                            name: item.name,
                            images: item.images,
                            description: item.description,
                            metadata: {
                                id: item.id,
                            },
                        },
                        unit_amount: parseFloat(item.price) * 100,
                    },
                    quantity: itemsCount,
                };
            });
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                ui_mode : 'embedded',
                shipping_address_collection: {
                    allowed_countries: ["US", "CA", "GB"],
                },
                allow_promotion_codes : true,
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: "fixed_amount",
                            fixed_amount: {
                                amount: 500,
                                currency: "eur",
                            },
                            display_name: "Standard shipping",
                            delivery_estimate: {
                                minimum: {
                                    unit: "day",
                                    value: 5,
                                },
                                maximum: {
                                    unit: "day",
                                    value: 7,
                                },
                            }
                        }
                    },
                ],
                phone_number_collection: {
                    enabled: true
                },
                line_items,
                mode: "payment",
                customer: customer.id,
                return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/buy/processing`,
            });
            res.status(200).json({ clientSecret: session.client_secret });
        }
        catch(err){
            res.status(500).json({error : err.message});
        }
    }
}