function submitData (name, email) {

  let body = document.querySelector("body")

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }

return fetch("http://localhost:3000/users", configObj)
    .then( res => res.json() )
    .then( json => {
      body.innerHTML = json.id
    })
    .catch( error => {
      body.innerHTML = error.message
    })
}
