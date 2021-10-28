require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const { createServer } = require("http");
const httpServer = createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer, {
    cors: '*'
});
const router = require('./routes/index');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./config/db');
db.connect(process.env.MONGO_URI);

const port = process.env.PORT || 4000;

app.use('/', router);

const Order = require('./models/order.model');
const order = require('./controllers/order.controller');
io.on('connection', (socket) => {
    socket.on('postOrder', (data, res) => {
        order.postPayment(data, res, io);
    });
    socket.on('confirmed', async (orderID) => {
        const order = await Order.findOne({ orderID });
        if (order) {
            order.status = 'confirmed';
            order.process = 'cooking';
            await order.save();
            io.emit(orderID, 'confirmed');
            io.emit('kitchen');
        }
    })
    socket.on('cancel', async (orderID) => {
        try {
            const order = await Order.findOne({ orderID });
            if (order) {
                order.status = 'cancel';
                await order.save();
                io.emit(orderID, 'cancel')
            }
        }
        catch (err) {
            console.log(err);
        }
    })
    socket.on('done', async (orderID) => {
        try {
            const order = await Order.findOne({ orderID });
            if (order) {
                order.process = 'done';
                await order.save();
            }
        }
        catch (err) {
            console.log(err);
        }
    })
})



httpServer.listen(port, () => console.log(`Server dang duoc lang nghe tai cong ${port}`));



