let users = []
let userSelected = []
let editMode = false

function save() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const address = document.getElementById("address").value
  const whatsapp = document.getElementById("whatsapp").value
  document.getElementById("error-message").innerHTML = ""

  if (name && email) {
    let u = { name: name, email: email, address: address, whatsapp: whatsapp }

    users.push(u)
    show()
    erase()
  }

  else {
    const error = "Preencha todos os dados."
    document.getElementById("error-message").innerHTML = error
  }
}

function erase() {
  document.getElementById("name").value = ""
  document.getElementById("email").value = ""
  document.getElementById("address").value = ""
  document.getElementById("whatsapp").value = ""
}

function eraseData() {
  document.getElementById('show-name').innerHTML = ""
  document.getElementById('show-email').innerHTML = ""
  document.getElementById('show-address').innerHTML = ""
  document.getElementById('show-whatsapp').innerHTML = ""
  if (userSelected == 0) {
    document.getElementById('idEdit').style.display = "none"
    document.getElementById('eraseData').style.display = "none"
  }
}

function show() {
  lista = ""
  for (let i = 0; i < users.length; i++) {
    lista += "<button onclick='del(" + i + ")'>-</button><span onclick='expand(" + i + ")'>" + users[i].name + "</span>"
  }
  document.getElementById('saved-name').innerHTML = lista
}

function edit() {
  if (!editMode) {
    document.getElementById('show-name').innerHTML = "<p><input id='editName' value='" + users[userSelected].name + "'></p>"
    document.getElementById('show-email').innerHTML = "<p><input id='editEmail' value='" + users[userSelected].email + "'></p>"
    document.getElementById('show-address').innerHTML = "<p><input id='editAdress' value='" + users[userSelected].address + "'></p>"
    document.getElementById('show-whatsapp').innerHTML = "<p><input id='editWhatsApp' value='" + users[userSelected].whatsapp + "'></p>"
    document.getElementById('idEdit').innerHTML = "Confirmar edição"
    editMode = true
  }

  else {
    users[userSelected].name = document.getElementById('editName').value
    users[userSelected].email = document.getElementById('editEmail').value
    users[userSelected].address = document.getElementById('editAdress').value
    users[userSelected].whatsapp = document.getElementById('editWhatsApp').value
    document.getElementById('idEdit').innerHTML = "Editar"
    show()
    expand(userSelected)
  }
}

function expand(index) {
  userSelected = index
  document.getElementById('show-name').innerHTML = users[index].name
  document.getElementById('show-email').innerHTML = users[index].email
  document.getElementById('show-address').innerHTML = users[index].address
  document.getElementById('show-whatsapp').innerHTML = users[index].whatsapp
  editMode = false
  document.getElementById('idEdit').style.display = "inline"
  document.getElementById('eraseData').style.display = "inline"
}

function del(index) {
  users.splice(index, 1)
  show()
  if (index == userSelected) {
    eraseData()
  }
}
