import { getDb } from '../../utils/mongodb'

export default async function Demo(req, res){
    const db = await getDb();
    const info = await db.collection('products').updateMany(
        {},
        [
          {
            $set: {
              images : { $reverseArray: "$images" }
            }
          }
        ]
      );

      
      
    res.status(200).json(info);
}