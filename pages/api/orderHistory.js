import { getDb } from "@/utils/mongodb";
const secret_key = process.env.SECRET_HASH_KEY;
import jwt from 'jsonwebtoken';

function getOrders(orders, products) {
    const map = {};
    products.forEach(product => {
        map[product._id] = product;
    });
    
    orders.forEach(order => {
        if(order.cart){
            order.cart = order.cart.map((item) => {
                return {
                    ...item,
                    ...map[item.id]
                }
            });
        }
    });
    orders.sort((a, b) => b.time - a.time);
    return orders;
}

export default async function OrderHistory(req, res) {
    const {db, client} = await getDb();
    const token = req.body.token;
    const decoded = jwt.verify(token, secret_key);
    const userId = decoded.userId;
    const ProductCollection = db.collection("products");
    const OrderCollection = db.collection("orders");

    const [products, orders] = await Promise.all([
        ProductCollection.find({}).toArray(),
        OrderCollection.find({ userId }).toArray()
    ]);
    await client.close();
    const orderList = getOrders(orders, products);
    res.status(200).json({ orders: orderList });
}