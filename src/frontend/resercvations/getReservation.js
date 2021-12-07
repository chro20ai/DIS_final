let getReservationId = document.getElementById("getReservationId")

function getReservation() {

		{
           
            console.log(getReservationId.value)
            //let user = new User (userdata)
        
            axios.get(`https://localhost:8080/clients/reservations?reservationId=${getReservationId.value}`)
            .then(function(response){
            console.log(response.data[0])
            document.getElementById("getClientId").innerHTML = "client id: " + response.data[0].clientId;
            document.getElementById("getDate").innerHTML = "Date: " + response.data[0].date;
            document.getElementById("getHotelName").innerHTML = "Hotel name: " + response.data[0].hotelName;
            document.getElementById("getPrice").innerHTML = "Price: " + response.data[0].price;
            document.getElementById("getBalance").innerHTML = "Balance: " + response.data[0].balance;
            })
            .then(function(data){
            })
         alert("Reservationen er her");
		}
}