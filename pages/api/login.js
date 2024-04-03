import { getDb, releaseDb } from '../../utils/mongodb'
import jwt from 'jsonwebtoken'
const secret_key = process.env.SECRET_HASH_KEY;
import bcrypt from 'bcryptjs'

export default async function Login(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        try {
            const db = await getDb();
            const user = await db.collection('users').findOne({ email });
            if (!user) {
                await releaseDb();
                res.status(404).json({ message: 'User not found' });
                return;
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(!passwordMatch){
                await releaseDb();
                res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ userId: user._id }, secret_key);
            await releaseDb();
            res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure;`);
            return res.status(200).json({ success: true, token, message: 'User logged in', user: {id: user._id, email: user.email, name: user.name } });
        }
        catch (err) {
            res.status(500).json({ message: 'Database connection failed' });
            return;
        }
    }
    else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}