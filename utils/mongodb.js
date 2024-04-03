import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: false
    }
});

let cachedClient = null;
let usageCount = 0;
const dbName = 'herhq';

async function connectToDatabase() {
    if (cachedClient && cachedClient.isConnected) {
        return cachedClient;
    }
    try {
        await client.connect();
        cachedClient = client;
        return client;
    } catch (err) {
        throw err;
    }
}

export async function getDb(){
    const client = await connectToDatabase();
    usageCount++;
    return client.db(dbName);
}

async function closeDbConnection(){
    if(cachedClient && usageCount == 0){
        await cachedClient.close();
        cachedClient = null;
    }
}

export async function releaseDb(){
    usageCount--;
    if(usageCount < 0){
        usageCount = 0;
    }
    await closeDbConnection();
}

export async function getProducts(){
    const db = await getDb();
    const products = await db.collection('products').find({}).toArray();
    const output = products.map(product => {
        return {
            id: product._id.toString(),
            name: product.name,
            price: product.price,
            rating: product.rating,
            images: product.images,
            description: product.description,
            color: product.color
        }
    });
    releaseDb();
    return output;
}

export async function storeOrder(order){
    const db = await getDb();
    const result = await db.collection('orders').insertOne(order);
    console.log(result);
    releaseDb();
    return result;
}