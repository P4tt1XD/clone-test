let hacker1 = 'driver';
driver = 'Pati';
console.log(driver);

let hacker2 = 'navigator';
navigator = 'friend';
console.log(navigator);

if(hacker1 === hacker2){
    console.log('Wow, you have equally long names');
}else {
    if(hacker1 > hacker2){
        console.log('The driver is longest name!');
    }else{
        console.log('It seems navigator has the longest name!');
    }
}

const sentence = driver;
console.log(sentence.toUpperCase());

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('navigator');

var a = 'Patricia';
var b = 'friend';

if( a < b ){
    console.log('Yo, navigator goes first!');
}else if( a > b){
    console.log('The driver name goes first!');
}else{
    console.log('What? You both have the same name!');
}