import nodemailer from 'nodemailer';

export default async function Ambassador(req, res){
    if(req.method === "POST"){
        const { name, email, phone, message, instagram, facebook, snapchat, ticToc, youtube } = req.body;
        if(name && email && phone && message){
            try{
                const transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST,
                    port: 587,
                    auth: {
                      user: process.env.EMAIL_USER,
                      pass: process.env.EMAIL_PASS,
                    },
                });
                const msg = {
                    from : process.env.EMAIL_USER,
                    to : process.env.EMAIL_GET,
                    subject: 'New Ambassador Application',
                    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nInstagram: ${instagram}\nFacebook: ${facebook}\nSnapchat: ${snapchat}\nTicToc: ${ticToc}\nYoutube: ${youtube}`,
                };
                await transporter.sendMail(msg);
                res.status(200).json({ added: true });
            }
            catch(err){
                res.status(500).json({ added: false });
            }
        }
        else{
            res.status(400).json({ added: false });
        }
    }
    else{
        res.status(405).json({ message: "Method not allowed" });
    }
}