import bcrypt from 'bcryptjs';
import { getDb } from '/utils/mongodb';

const compareOTPAndHashedOTP = async (otp, hashOtp) => {
    return await bcrypt.compare(otp.toString(), hashOtp);
}

export default async function ChangePassword(req, res) {
    if (req.method === "POST") {
        const { email, password, otp, hashOtp } = req.body;
        if (email && password && otp.length === 4 && hashOtp.length > 4) {
            try {
                const otpValid = await compareOTPAndHashedOTP(otp, hashOtp);
                if (otpValid) {
                    const {db, client} = await getDb();
                    const users = db.collection('users');
                    const hashedPassword = await bcrypt.hash(password, 10);
                    await users.updateOne({ email }, { $set: { password: hashedPassword } });
                    await client.close();
                    res.status(200).json({ success: true, message: "Password updated successfully" });
                } else {
                    res.status(400).json({ success: false, message: "Invalid OTP" });
                }
            } catch (error) {
                res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        } else {
            res.status(400).json({ success: false, message: "All fields are required" });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}