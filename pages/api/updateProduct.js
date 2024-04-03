import {getDb, releaseDb} from '@/utils/mongodb';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
const SECRET_HASH_KEY = process.env.SECRET_HASH_KEY;
const admin = process.env.ADMIN_ID;

export default async function updateProduct(req, res) {
    if(req.method == 'POST'){
        const { productId, name, color, price, description, token } = req.body;
        try{
            const decoded = jwt.verify(token, SECRET_HASH_KEY);
            const user_id = decoded.userId;
            if(user_id != admin){
                return res.status(400).json({message: 'Unauthorized', success: false});
            }
            const db = await getDb();
            const collection = db.collection('products');
            const update = await collection.updateOne({ _id: new ObjectId(String(productId)) }, {$set: {name, color, price, description}});
            if(update.modifiedCount > 0){
                res.status(200).json({message: 'Product Updated', success: true});
                return;
            }
            else{
                res.status(400).json({message: 'Failed to update product', success: false});
                return;
            }
        }
        catch(err){
            res.status(400).json({message: 'Failed to update product', success: false});
        }
    }
    else{
        res.status(405).json({message: 'Method Not Allowed'});
    }
}