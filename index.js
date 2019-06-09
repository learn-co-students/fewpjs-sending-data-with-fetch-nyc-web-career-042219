  let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

function submitData(){
  return fetch("http://localhost:3000/users", configObj)
    .then(function(resp){
      return resp.json();
    })
    .then(function(json){
      document.body.innerHTML = json["email"] + " " + json["name"] + " " + json["id"];
    })
    .catch(function(error){
      document.body.innerHTML = error.message
    });
}
