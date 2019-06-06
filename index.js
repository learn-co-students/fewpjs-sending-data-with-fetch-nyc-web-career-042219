// Add your code here

function submitData(name, email){
    
    let data = {
        name: name,
        email: email
    };
    
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    
    return fetch('http://localhost:3000/users', configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        // let p = document.createElement('p')
        // let body_select = document.querySelector('#here')
        // p.innerHTML = object['id']
        // body_select.appendChild(p);
        document.body.innerHTML = object['id']
      })
      .catch(function(error) {
        // let p = document.createElement('p')
        // p.innerHTML = error['message']
        // body_select.appendChild(p);
        document.body.innerHTML = error['message']
      });
}