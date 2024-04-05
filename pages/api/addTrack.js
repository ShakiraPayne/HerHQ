import { ObjectId } from 'mongodb';
import { getDb } from '@/utils/mongodb';

export default async function addTrack(req, res) {
    try {
        const body = req.body;
        const id = body.id;
        const track = body.track;
        if (!id || !track) {
            return res.status(400).json({ success: false });
        }
        const db = await getDb();
        const result = await db.collection('orders').updateOne({ _id: new ObjectId(String(id)) }, { $set: { track: track } });
        console.log(result);
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
}