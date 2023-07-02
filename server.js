
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose
  .connect('mongodb+srv://sajid:sajid@cluster0.dgy3pms.mongodb.net/memories?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
  });

// Routes
app.use('/register/volunteer', require('./routes/volunteer'));
app.use('/register/student', require('./routes/student'));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


  //restart

  // function startServer() {
    // Your server startup code here
    // console.log('Server started');
  
    // After a specific period of time (e.g., 24 hours)

  // }
  
  // startServer();

  
//excel to mongodb
const XLSX = require('xlsx');
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://sajid:sajid@cluster0.dgy3pms.mongodb.net/memories?retryWrites=true&w=majority';

// const client = new MongoClient(url, { useUnifiedTopology: true });
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
        const headerCell = jsonData[0][index]; // Assuming the first row contains header cells
        obj[headerCell] = cell;
      });
      return obj;
    });
  
    const session = client.startSession();
    const db = session.client.db('memories');
    const collection = db.collection('volunteers');
  
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



  //student

  async function connectAndStoreDatastudent() {
    const clients = new MongoClient(url, { useUnifiedTopology: true });
  
    try {
      await clients.connect();
      console.log('Connected to MongoDB Atlas');
      await deleteAndInsertDatas(clients);
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error);
    } finally {
      await clients.close();
      console.log('Connection closed');
    }
  }
    const spreadsheetPaths='Student(Responses).xlsx';
  async function deleteAndInsertDatas(client) {
    const workbook = XLSX.readFile(spreadsheetPaths);
    const sheetName = workbook.SheetNames[0]; // Assuming the data is on the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
    const data = jsonData.map((row) => {
      const obj = {};
      row.forEach((cell, index) => {
        const headerCell = jsonData[0][index]; // Assuming the first row contains header cells
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
  connectAndStoreDatastudent();

