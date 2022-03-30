let usuarios = []

function save() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const whatsapp = document.getElementById("whatsapp").value

    let u = {name:name, email:email, address:address, whatsapp:whatsapp}

    usuarios.push(u)
    show()
    erase()
}

function erase() {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("address").value = ""
    document.getElementById("whatsapp").value = ""
}

function show() {
    lista  = ""
        for (let i = 0; i < usuarios.length; i++) {
         lista += "<button onclick='del("+i+")'>-</button><span onclick='expand("+i+")'>" + usuarios[i].name + "</span>"
        }
    document.getElementById('saved-name').innerHTML = lista
}

function expand(indice) {
    document.getElementById('show-name').innerHTML = usuarios[indice].name
    document.getElementById('show-email').innerHTML = usuarios[indice].email
    document.getElementById('show-address').innerHTML = usuarios[indice].address
    document.getElementById('show-whatsapp').innerHTML = usuarios[indice].whatsapp
}

function del(indice) {
   usuarios.splice(indice,1)
   show()
}
