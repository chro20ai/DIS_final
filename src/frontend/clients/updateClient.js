let updateFirstName = document.getElementById("updateFirstName");
let updateLastName = document.getElementById("updateLastName");
let updateStreetAddress = document.getElementById("updateStreetAddress");
let updateCity = document.getElementById("updateCity");
let updateClientId = document.getElementById("updateClientId")
  
//Validere om oplysniger er korrekte.
function updateClient() {
var updateerrormessage = ""; 

//Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
    if (updateFirstName.value == "") {
        updateerrormessage += "Need a firstname \n";}
    if (updateLastName.value == ""){
        updateerrormessage += "Need a lastname"}
    if (updateStreetAddress.value == "") {
        updateerrormessage += "Need a streetaddress"}
    if (updateCity.value == "") {
        updateerrormessage += "Need a city"}

//alert errormessage
if (updateerrormessage != ""){
    alert(updateerrormessage)
}

//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let userdata = {
                clientId : updateClientId.value,
                firstName : updateFirstName.value,
                lastName : updateLastName.value,
                streetAddress : updateStreetAddress.value,
                city : updateCity.value  
            }
            console.log(userdata)
            //let user = new User (userdata)
        
            axios.put("https://localhost:8080/clients", userdata)
            .then(function(response){
            console.log(response)
            })
         alert("Din bruger er nu opdateret");
		}
}