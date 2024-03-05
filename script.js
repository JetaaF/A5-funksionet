// funksioni ka =()
//  gjithecka brenda ={}= quhet bllok i kodit
//  nuk ekzekutohet funksioni pa e thirr

function Hello(){
    alert('Hello everyone')
}

// //  funksione me parametra
function nekatror(c){
    alert(c ** 2)
}
// // argumente
nekatror(9)


// //  funksionet me return
function shuma(a,b){
    return a+b
}
// //  kudo qe e thirrum funksionin, ja percaktojm a, dhe b
// //  dhe kudo qe e kem thire na e kthen rezultatin e funskionit

// //  tipe te njejta te ketij funskioni jane, 'confirm' dhe 'prompt'

let k= shuma(5,6)
// //  rez====> k=11
alert('shuma mes numrave eshte' + k)
// //  rez= shuma mes numrave eshte 11

function trepara(x,y,z){
    return x*y*z
}
let mol = trepara(1,2,3)
alert(mol)
function info( emri, mbiemri, mosha){
    // alert('Une jam ' + emri +' ' +mbiemri +' dhe jam' + mosha +' vjece.')
    return 'Une jam ' + emri +' ' +mbiemri +' dhe jam' + mosha +' vjece.'
}

alert(info('jeta','fazliu',16))







