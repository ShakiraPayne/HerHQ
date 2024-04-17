import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: false
    }
});

const dbName = 'herhq';

async function connectToDatabase() {
    try {
        await client.connect();
        return client;
    } catch (err) {
        throw err;
    }
}

export async function getDb(){
    const client = await connectToDatabase();
    return  {client, db: client.db(dbName)};
}

export async function getProducts(){
    const {db, client} = await getDb();
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
    await client.close();
    return output;
}

export async function storeOrder(order){
    const {db, client} = await getDb();
    const result = await db.collection('orders').insertOne(order);
    await client.close();
    return result;
}