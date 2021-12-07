let updateReservationId = document.getElementById("updateReservationId");
let updateClientId1 = document.getElementById("updateClientId1");
let updateDate = document.getElementById("updateDate");
let updateHotelName = document.getElementById("updateHotelName");
let updatePrice = document.getElementById("updatePrice")
let updateBalance = document.getElementById("updateBalance")
  
//Validere om oplysniger er korrekte.
function updateReservation() {
    var updateerrormessage = ""; 

    //Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
        if (updateReservationId.value == "") {
            updateerrormessage += "Need a reservation id";}
        if (updateClientId1.value == "") {
            updateerrormessage += "Need a client id";}
        if (updateDate.value == ""){
            updateerrormessage += "Need a date"}
        if (updateHotelName.value == "") {
            updateerrormessage += "Need a hotel name"}
        if (updateBalance.value == "") {
            updateerrormessage += "Need a balance"}
    
    //alert errormessage
    if (updateerrormessage != ""){
        alert(updateerrormessage)
    }
//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let reservationdata = {
                reservationId : updateReservationId.value,
                clientId : updateClientId1.value,
                date : updateDate.value,
                hotelName : updateHotelName.value,
                price : updatePrice.value, 
                balance : updateBalance.value
            }


            console.log(reservationdata)
            //let user = new User (userdata)
        
            axios.put("https://localhost:8080/clients/reservations", reservationdata)
            .then(function(response){
            console.log(response)
            })
         alert("You have now updated a reservation");
		}
}