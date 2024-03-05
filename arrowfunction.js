function Hello() {
    alert('Hello')
}
//   arrow function
let hello = () => {
    alert('Hello2')
}

//  return ne arrow function
let shuma = (a, b) => a + b
//  arrow funksionet pa kllapa gjapnore {}=, jan me 'return' by default

//  dtr
let krahasim = (a, b) => {
    if (a === b) {
        return ' numrat baraz'
    }
    else if (a > b) {
        return 'numri me i madh'
    }
    else {
        return 'numri me i vogel'
    }
}
// let rezultati = krahasim(3, 5)  // ne rezultati = numri me i vogel
// alert(krahasim(4, 2)) // alert = numri me i madh



//  dtr

let mesatarja = (a, b, c) => (a + b + c) / 3
let gr1 = mesatarja(44, 23, 71)
let gr2 = mesatarja(65, 54, 49)

function winner(a, b) =>{
    if (a >= b * 2) {
        alert(' grupi i pare eshte fitues')
    }
    else if (b >= a * 2) {
        alert(' grupi i dyte eshte fitues')
    }
    else if( a == b){
        alert('barabart')
    }
    else {
        alert('nuk ka fitues')
    };
}
winner(gr1,gr2)
//  kqyre edhe pak dtr
