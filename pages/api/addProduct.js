import cloudinary from "cloudinary";
import { createRouter } from "next-connect";
import multer from "multer";
import { getDb, releaseDb } from "@/utils/mongodb";
import jwt from "jsonwebtoken";
const SECRET_HASH_KEY = process.env.SECRET_HASH_KEY;
const admin = process.env.ADMIN_ID;

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

async function handleUpload(file) {
    try {
        const res = await cloudinary.uploader.upload(file, {
            resource_type: "auto",
        });
        return res;
    } catch (error) {
        throw error;
    }
}

const router = createRouter();

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.use(upload.array('images', 4));


router.post(async (req, res) => {
    try {
        const { name, price, color, rating, description, token } = req.body;
        const decoded = jwt.verify(token, SECRET_HASH_KEY);
        const user_id = decoded.userId;
        if (user_id != admin) {
            return res.status(400).json({ message: "Unauthorized", success: false });
        }
        const images = req.files;
        if (!name || !price || !color || !rating || !description || !token || !images) {
          return res.status(400).json({ message: "Missing required fields", success: false });
        }
        const uploadImages = await Promise.all(images.map(async file => {
            try {
                const b64 = Buffer.from(file.buffer).toString("base64");
                const dataURI = `data:${file.mimetype};base64,${b64}`;
                const result = await handleUpload(dataURI);
                return result.secure_url;
            }
            catch (err) {
                throw err; 
            }
        }));
        const db = await getDb();
        const collection = db.collection("products");
        const product = {
            name,
            price,
            color,
            rating,
            description,
            images: uploadImages,
        }
        const result = await collection.insertOne(product);
        await releaseDb();
        if (!result.insertedId) {
            return res.status(400).json({ message: "Failed to add product", success: false });
        }
        const productId = result.insertedId.toString();
        product._id = productId;
        return res.status(200).json({ message: "Product added successfully!", success: true, product })
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
});

router.all((req, res) => {
    res.status(405).json({
        error: "Method not allowed",
    });
    return;
});

export default router.handler({
  onError: (err, req, res) => {
    return res.status(500).json({ success: false, error: err.message });
  },
});