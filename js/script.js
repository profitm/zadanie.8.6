var a = 2;
var b = 5;
var value = (a * a) - (2 * a * b) - (b * b);
alert(value);
console.log('Działanie "(a * a) - (2 * a * b) - (b * b)" jest równe ' + value);

if (value > 0) {
    console.log('Wynik jest dodatni');
} else if (value < 0) {
    console.log('Wynik jest ujemny');
} else {
    console.log('Wynik to ' + value);
}

 var value = 0 ? 'Wynik jest równy 0' : 'Wynik nie jest równy 0';
 console.log(value);