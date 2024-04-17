import {getDb} from '../../utils/mongodb';
import bcrypt from 'bcryptjs';
const secret_key = process.env.SECRET_HASH_KEY;
import jwt from 'jsonwebtoken';

export default async function SignUp(req, res){
    const { email, name, password, telephone, address } = req.body;
    if(email && password){
        try{
            const {db, client} = await getDb();
            const user = await db.collection('users').findOne({email});
            if(user){
                res.status(200).json({success: false, message: 'User already exists'});
                return;
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const info = await db.collection('users').insertOne({ email, name, password: hashedPassword, telephone, address });
            await client.close();
            const token = jwt.sign({userId: info._id}, secret_key);
            res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure;`);
            res.status(200).json({success: true, token, message: 'Account created successfully', user: {email, name}});
            return;
        }
        catch(err){
            res.status(500).json({success: false, message: err});
            return;
        }
    }
    else{
        res.status(200).json({success: false, message: 'All fields are required'});
    }
}