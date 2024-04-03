import jwt from "jsonwebtoken";
import {getDb, releaseDb} from "@/utils/mongodb";
const admin = process.env.ADMIN_ID;
import { ObjectId } from "mongodb";
const SECRET_HASH_KEY = process.env.SECRET_HASH_KEY;

export default async function deleteProduct(req, res){
    if (req.method == "POST") {
        try {
            const { productId, token } = req.body;
            const decoded = jwt.verify(token, SECRET_HASH_KEY);
            const user_id = decoded.userId;
            if (user_id != admin) {
                return res.status(400).json({ message: "Unauthorized", success: false });
            }
            const db = await getDb();
            const collection = db.collection("products");
            await collection.deleteOne({ _id : new ObjectId(String(productId)) });
            await releaseDb();
            res.status(200).json({ message: "Product deleted", success: true })
            return;
        }
        catch (err) {
            return res.status(400).json({ message: "Failed to delete product", success: false });
        }
    }
    else {
        return res.status(400).json({ message: "Invalid request method", success: false });
    }
}