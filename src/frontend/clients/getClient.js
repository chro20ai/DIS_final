let getClientId = document.getElementById("getClientId")
  
//Validere om oplysniger er korrekte.
function getClient() {



//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
		{
            let userdata = {
                clientId : getClientId.value
            }
            console.log(getClientId.value)
            //let user = new User (userdata)
        
            axios.get(`https://localhost:8080/clients?clientId=${getClientId.value}`)
            .then(function(response){
            console.log(response.data[0])
            document.getElementById("getFirstName").innerHTML = "First name: " + response.data[0].firstName;
            document.getElementById("getLastName").innerHTML = "Last name: " + response.data[0].lastName;
            document.getElementById("getStreetAddress").innerHTML = "Street address: " + response.data[0].streetAddress;
            document.getElementById("getCity").innerHTML = "City: " + response.data[0].city;
            })
            .then(function(data){
                console.log(data)
            })
         alert("Brugeren er her");
		}
}