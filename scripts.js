const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/api/users', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
/*   if (request.status >= 200 && request.status < 400){
	  for (var i = 0; data.length
  } */
  if (request.status >= 200 && request.status < 400) {
    data.forEach(users => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const name = document.createElement('h1')
      name.textContent = users.name

      const login = document.createElement('p')
      login.textContent = users.login
	  
	  const password = document.createElement('p')
      password.textContent = users.password
	  

	  
      container.appendChild(card)
      card.appendChild(name)
      card.appendChild(login)
	  card.appendChild(password)
	  
	  	  //
	  var userProfiles = users.userProfiles
	  userProfiles.forEach(role => {
		const userRole = document.createElement('p')
		userRole.textContent = role.type
		card.appendChild(userRole)
	  })
	  
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()