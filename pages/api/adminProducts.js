import { getDb, releaseDb } from "@/utils/mongodb";
import jwt from "jsonwebtoken";
const admin = process.env.ADMIN_ID;
const SECRET_HASH_KEY = process.env.SECRET_HASH_KEY;

function getOrders(orders, products){
    const map = {};
    products.forEach(product => {
        map[product._id] = product;
    });
    orders.forEach(order => {
        order.cart = order.cart.map((item) => {
            return {
                ...item,
                ...map[item.id]
            }
        });
    });
    return orders;
}

export default async function AdminProducts(req, res) {
    if (req.method == "POST") {
        try {
            const { token } = req.body;
            const decoded = jwt.verify(token, SECRET_HASH_KEY);
            const user_id = decoded.userId;
            if (user_id != admin) {
                return res.status(400).json({ message: "Unauthorized", success: false });
            }
            
            const db = await getDb();
            const ProductCollection = db.collection("products");
            const OrderCollection = db.collection("orders");

            const [products, orders] = await Promise.all([
                ProductCollection.find({}).toArray(),
                OrderCollection.find({}).toArray()
            ]);

            const orderList = getOrders(orders, products);
            
            await releaseDb();
            res.status(200).json({ products, orders: orderList, success: true });
            return;
        } catch (err) {
            return res.status(400).json({ message: "Failed to fetch products", success: false });
        }
    } else {
        return res.status(400).json({ message: "Invalid request method", success: false });
    }
}