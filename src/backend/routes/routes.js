const express = require('express');
const router = express.Router();
const db = require("../db/db");
const clientModel = require("../models/clients");
const reservationModel = require("../models/reservations");


//Create a client
db.getConnection().then(async res => {
router.post('/', async (req, res) => {
    
       let create = await clientModel.create({
        clientId: req.body.body.clientId,
        firstName : req.body.body.firstName,
        lastName : req.body.body.lastName,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log("Client with id: " + req.body.body.clientId + " has been created")
       console.log(create)
       res.send(create)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Update a client
db.getConnection().then(async res => {
router.put('/', async (req, res) => {

       let update = await clientModel.updateOne({clientId: req.body.body.clientId},{
        firstName : req.body.body.firstName,
        lastName : req.body.body.lastName,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log("Client with id: " + req.body.body.clientId + " has been updated")
       console.log(update)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete a client
db.getConnection().then(async res => {
router.delete('/', async (req, res) => {

       let deleteClient = await clientModel.deleteOne({clientId: req.body.body.userdata.clientId})
       console.log("Client with id: " + req.body.body.userdata.clientId + " has been deleted")

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// get a client
db.getConnection().then(async res => {
router.get('/', async (req, res) => {
       let getclient = await clientModel.find({clientId: req.query.clientId})
        console.log(getclient)
        res.send(getclient)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });  
});

// Creating a reservation
db.getConnection().then(async res => {
router.post('/reservations', async (req, res) => {

        let client = await clientModel.find({clientId: req.body.body.clientId}).exec();
        console.log(client.length)

        if(client.length !== 0){
            let createreservation = await reservationModel.create({
            reservationId : req.body.body.reservationId,
            clientId : req.body.body.clientId,
            date : req.body.body.date,
            hotelName : req.body.body.hotelName,
            price : req.body.body.price,
            balance : req.body.body.balance
       })
       console.log("Reservation with id: " + req.body.body.reservationId + " has been created")
       console.log(createreservation)
    }
    if(client.length == 0){
        res.send("Client does not exist")
        console.log("Client does not exist")}
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Update a reservation
db.getConnection().then(async res => {
router.put('/reservations', async (req, res) => {

    let updateclient = await clientModel.find({clientId: req.body.body.clientId}).exec();
        if(updateclient.length !== 0){
            let updatereservation = await reservationModel.updateOne({
            reservationId: req.body.body.reservationId},{
            clientId : req.body.body.clientId,
            date : req.body.body.date,
            hotelName : req.body.body.hotelName,
            price : req.body.body.price,
            balance : req.body.body.balance
       })
       console.log("Reservation with id: " + req.body.body.reservationId + " has been updated")
       console.log(updatereservation)    
    }
    if(updateclient.length == 0){
        res.send("Client does not exist")
        console.log("Client does not exist")
    }  
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete a reservation
db.getConnection().then(async res => {
    router.delete('/reservations', async (req, res) => {

           let deleteReservation = await reservationModel.deleteOne({reservationId: req.body.body.userdata.reservationId})
           console.log("Reservation with id: " + req.body.body.userdata.reservationId + " has been deleted")

        }, err => {
            console.log("ERROR");
            console.log(err);
        });
    });

// Get a reservation
db.getConnection().then(async res => {
    router.get('/reservations', async (req, res) => {

        let getreservation = await reservationModel.find({reservationId: req.query.reservationId})
            console.log(getreservation)
            res.send(getreservation)

        }, err => {
            console.log("ERROR");
            console.log(err);
        });
       
       
    });

module.exports = router;