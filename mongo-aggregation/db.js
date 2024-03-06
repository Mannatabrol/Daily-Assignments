const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017';
let db;

async function getDatabase() {
    if (db) {
        return db;
    }
    
    const client = new mongodb.MongoClient(url);
    try {
        await client.connect();
        db = client.db("movie");
        return db;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err; // Throw the error to be caught by the caller
    }
}

module.exports = getDatabase;
