// Add your code here

function submitData(userName, userEmail){

  let body_select = document.querySelector("#body_id")

  let user = {
    name: `${userName}`,
    email: `${userEmail}`
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      var p = document.createElement('p')
      p.innerHTML = object['id']
      body_select.appendChild(p);
    })
    .catch(function(error) {
      var p = document.createElement('p')
      p.innerHTML = error['message']
      body_select.appendChild(p)
    });
}
