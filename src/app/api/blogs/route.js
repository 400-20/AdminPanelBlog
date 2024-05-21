import clientPromise from '../../../lib/mongodb';

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db('my-blog-app');
    
    try {
        let bodyObject = await req.json(); // Use await req.json() in Next.js 13
        let result = await db.collection('blogs').insertOne(bodyObject);
        return new Response(JSON.stringify(result.insertedId), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET() {
    const client = await clientPromise;
    const db = client.db('my-blog-app');
    
    try {
        const posts = await db.collection('blogs').find({}).toArray();
        return new Response(JSON.stringify({ status: 200, data: posts }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
