let clientId = document.getElementById("clientId1");
let date = document.getElementById("date");
let hotelName = document.getElementById("hotelName");
let price = document.getElementById("price")
let balance = document.getElementById("balance")

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
//Validere om oplysniger er korrekte.
function createReservation() {
var errormessage = ""; 

//Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
    if (clientId.value == "") {
        errormessage += "Need a client id";}
    if (date.value == ""){
        errormessage += "Need a date"}
    if (hotelName.value == "") {
        errormessage += "Need a hotel name"}
    if (balance.value == "") {
        errormessage += "Need a balance" 
    }

//alert errormessage
if (errormessage != ""){
    alert(errormessage)
}

//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let reservationdata = {
                reservationId : uuidv4(),
                clientId : clientId.value,
                date : date.value,
                hotelName : hotelName.value,
                price : price.value, 
                balance : balance.value
            }


            console.log(reservationdata)
            //let user = new User (userdata)
            
            axios.post("https://localhost:8080/clients/reservations", reservationdata)
            .then(function(response){
                //alert("Client does not exist")
            })
        alert("Reservation created")
		}
}