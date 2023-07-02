const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb+srv://sajid:sajid@cluster0.dgy3pms.mongodb.net/memories?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
const dbName = 'memories'; // Replace with your database name
const collectionName = 'volunteers'; // Replace with your collection name

// Function to retrieve course name and name by email ID
async function getCourseAndNameByEmail(email) {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.findOne({ email });

    if (result) {
      const { WantTo, name } = result;
      console.log(`Course: ${WantTo}`);
      console.log(`Name: ${name}`);
    } else {
      console.log('No matching document found.');
    }
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    client.close();
  }
}

// Usage
const email = 'a@gmail.com'; // Replace with the email ID you want to search
getCourseAndNameByEmail(email);
