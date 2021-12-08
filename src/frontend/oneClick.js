const axios = require ('axios').default;

function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
let waitamount = 50

async function oneclickrun() {
    //create client
    {
        let userdata = {
            clientId : "defaultclient",
            firstName : "placeholder",
            lastName : "placeholder",
            streetAddress : "placeholder",
            city : "placeholder"  
        }
        console.log(userdata)
   
    
        axios.post("https://localhost:8080/clients", userdata)
        .then(function(response){
        console.log(response)
        })
     alert("Din bruger er nu oprettet");
    }
    //create reservation
    await wait(waitamount)
    {
        let reservationdata = {
            reservationId : "defaultreservation",
            clientId : "5acbf604-2dac-4411-af67-8b328e80c3f6",
            date : Date.now(),
            hotelName : "defaulthotelName",
            price : 1000, 
            balance : 1000
        }
        console.log(reservationdata)
        axios.post("https://localhost:8080/clients/reservations", reservationdata)
        .then(function(response){})
    alert("Din reservation er nu oprettet")
    }
    // update client
    await wait(waitamount)
    {
        let userdata = {
            clientId : "defaultclient",
            firstName : "defaultupdated",
            lastName : "defaultupdated",
            streetAddress : "defaultupdated",
            city : "defaultupdated"  
        }
        console.log(userdata)
    
        axios.put("https://localhost:8080/clients", userdata)
        .then(function(response){
        console.log(response)
        })
     alert("Din bruger er nu opdateret");
    }
    // update reservation
    await wait(waitamount)
    {
        let reservationdata = {
            reservationId : "defaultreservation",
            clientId : "5acbf604-2dac-4411-af67-8b328e80c3f6",
            date : Date.now(),
            hotelName : "defaultupdated",
            price : 1000, 
            balance : 1000
        }


        console.log(reservationdata)
    
        axios.put("https://localhost:8080/clients/reservations", reservationdata)
        .then(function(response){
        console.log(response)
        })
     alert("Din reservation er nu opdateret");
    }
    //get client
    await wait(waitamount)
    {
        
        let getclientId = "defaultclient"
    
        axios.get(`https://localhost:8080/clients?clientId=${getclientId}`)
        .then(function(response){
        console.log(response.data[0])
        document.getElementById("getFirstName").innerHTML = "First Name: " + response.data[0].firstName;
        document.getElementById("getLastName").innerHTML = "Last Name: " + response.data[0].lastName;
        document.getElementById("getStreetAddress").innerHTML = "Street Address: " + response.data[0].streetAddress;
        document.getElementById("getCity").innerHTML = "City: " + response.data[0].city;
        })
        .then(function(data){
            console.log(data)
        })
     alert("Brugeren er her");
    }
    // get reservation
    await wait(waitamount)
    {
           
        let getreservationId = "defaultreservation"
    
        axios.get(`https://localhost:8080/clients/reservations?reservationId=${getreservationId}`)
        .then(function(response){
        console.log(response.data[0])
        document.getElementById("getClientId").innerHTML = "clientID: " + response.data[0].clientId;
        document.getElementById("getDate").innerHTML = "Date: " + response.data[0].date;
        document.getElementById("getHotelName").innerHTML = "Hotel Name: " + response.data[0].hotelName;
        document.getElementById("getPrice").innerHTML = "Price: " + response.data[0].price;
        document.getElementById("getBalance").innerHTML = "Balance: " + response.data[0].balance;
        })
        .then(function(data){
        })
     alert("Reservationen er her");
    }
    
    // delete client
    await wait(waitamount)
    {
        let userdata = {
            clientId : "defaultclient"
        }
        console.log(userdata.clientId)
    
        axios.delete("https://localhost:8080/clients", { data: {userdata}})
        .then(function(response){
        console.log(response)
        })
     alert("Brugeren er nu slettet");
    }

    
    // delete reservation
    await wait(waitamount)
    {
        let userdata = {
            reservationId : "defaultreservation"
        }
        console.log(userdata.reservationId)
    
        axios.delete("https://localhost:8080/clients/reservations", { data: {userdata}})
        .then(function(response){
        console.log(response)
        })
     alert("Reservationen er nu slettet");
    }
    
}