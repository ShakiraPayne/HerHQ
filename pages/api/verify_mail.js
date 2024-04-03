import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

const generateHashOTP = (otp) => {
    const saltRounds = 10;
    return bcrypt.hash(otp.toString(), saltRounds);
}

export default async function VerifyMail(req, res) {
    const email = req.body.email;
    if (email) {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const otp = generateOTP();
        const msg = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'OTP for verification',
            text: `Your OTP is ${otp}`,
        };
        await transporter.sendMail(msg);
        const hashOtp = await generateHashOTP(otp);
        res.status(200).json({ success: true, hashOtp });
    }
    else {
        res.status(200).json({ success: false });
    }
}