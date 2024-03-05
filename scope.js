// scope i variablave

//  variabla globale - mund te perdoret ne tere kodin
let a = 'Jeta'

function mon() {
    let b = 'Jona'
    // variabel lokale - vlen vetem brenda funskionit/ brenda bllokut te kodit
}

console.log(a)  //rez== Jeta
console.log(b)  //rez==  error,,,,,,,,,,e pa definuar

//  dtr
function NumriMeiVogel(nr1, nr2) {
    if (nr1 < nr2) {
        alert(nr1 + 'eshte me i vogel')
    }
    else if (nr1 == nr2) {
        alert('numrat jane te barabart')
    }
    else {
        alert(nr2 + ' eshte me i vogel')
    }
}

NumriMeiVogel(32, 23)