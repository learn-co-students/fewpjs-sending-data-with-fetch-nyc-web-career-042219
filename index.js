const USERS_URL = "http://localhost:3000/users"
const DOGS_URL = "http://localhost:3000/dogs"
const ROBOTS_URL = "http://localhost:3000/robot"
const CATS_URL = "http://localhost:3000/cats"

// let formData = {
//   name: `${}`,
//   email: ${}
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch(USERS_URL, configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });
//   .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
.then( function ( response ) {
     return response.json()
   } )
   .then( function ( object ) {
     document.body.innerHTML = object[ "id" ]
   } )
   .catch( function ( error ) {
     document.body.innerHTML = error.message
   } )
}
