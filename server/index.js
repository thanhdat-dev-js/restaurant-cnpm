require('dotenv').config();
const express = require('express');
// const multer = require('multer');
// const upload = multer();
const cors = require('cors');

const app = express();
const router = require('./routes/index');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./config/db');
db.connect(process.env.MONGO_URI);

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => console.log(`Server dang duoc lang nghe tai cong ${port}`));