const XLSX = require('xlsx');
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://sajid:sajid@cluster0.dgy3pms.mongodb.net/memories?retryWrites=true&w=majority';

const client = new MongoClient(url, { useUnifiedTopology: true });
async function connectAndStoreData() {
    const client = new MongoClient(url, { useUnifiedTopology: true });
  
    try {
      await client.connect();
      console.log('Connected to MongoDB Atlas');
      await deleteAndInsertData(client);
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error);
    } finally {
      await client.close();
      console.log('Connection closed');
    }
  }
    const spreadsheetPath='Volunteer(Responses).xlsx';
  async function deleteAndInsertData(client) {
    const workbook = XLSX.readFile(spreadsheetPath);
    const sheetName = workbook.SheetNames[0]; // Assuming the data is on the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
    const data = jsonData.map((row) => {
      const obj = {};
      row.forEach((cell, index) => {
        const headerCell = jsonData[1][index]; // Assuming the first row contains header cells
        obj[headerCell] = cell;
      });
      return obj;
    });
  
    const session = client.startSession();
    const db = session.client.db('memories');
    const collection = db.collection('students');
  
    try {
      await session.withTransaction(async () => {
        await collection.deleteMany({}); // Delete all records in the collection
  
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents inserted into MongoDB Atlas`);
      });
    } catch (error) {
      console.error('Error deleting and inserting data into MongoDB Atlas:', error);
    } finally {
      session.endSession();
    }
  }
  connectAndStoreData();