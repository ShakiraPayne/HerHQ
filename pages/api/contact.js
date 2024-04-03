import { createRouter } from 'next-connect';
import multer from 'multer';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handleUpload = multer();

const router = createRouter();

router.use(handleUpload.single('photo'))

router.post(async (req, res) => {
  const file = Object(req).file;
  const { email, name, message } = req.body;
  const attachment = file ? { filename: file.originalname, content: file.buffer } : null;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const msg = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_GET,
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachment,
    };

    await transporter.sendMail(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router.handler({
    onError: (err, req, res) => {
      res.status(500).json({ success: false, error: err.message });
    },
});