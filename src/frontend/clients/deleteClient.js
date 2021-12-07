let deleteClientId = document.getElementById("deleteClientId")
  
//Validere om oplysniger er korrekte.
function deleteClient() {



//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
		{
            let userdata = {
                clientId : deleteClientId.value
            }
            console.log(deleteClientId.value)
            //let user = new User (userdata)
        
            axios.delete("https://localhost:8080/clients", { data: {userdata}})
            .then(function(response){
            console.log(response)
            })
         alert("Brugeren er nu slettet");
		}
}