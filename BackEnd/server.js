const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://bindu:bindu3398_@ac-gnf6fj3-shard-00-00.onz4xlk.mongodb.net:27017,ac-gnf6fj3-shard-00-01.onz4xlk.mongodb.net:27017,ac-gnf6fj3-shard-00-02.onz4xlk.mongodb.net:27017/?ssl=true&replicaSet=atlas-m05h44-shard-0&authSource=admin&appName=TodoCluster')
.then(()=> console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});