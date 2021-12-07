const mongoose = require('mongoose');

// 3. Finish the account schema

const ReservationSchema = new mongoose.Schema({
    reservationId: String,
    clientId: String,
    date: Date,
    hotelName: String,
    price: Number,
    balance: Number
});

const modelReservation = mongoose.model('reservations', ReservationSchema);

module.exports = modelReservation;
