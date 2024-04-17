import { getDb } from '../../utils/mongodb'

export default async function Demo(req, res){
    const {db, client} = await getDb();
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
      await client.close();
    res.status(200).json(info);
}