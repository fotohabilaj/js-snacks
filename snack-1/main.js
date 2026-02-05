console.log('hello');

const num_one = Number(prompt('digita un numero'));
const num_two = Number(prompt('digita un numero'));

if (num_one > num_two) {
    console.log('il primo è maggiore');
} else if (num_two > num_one) {
    console.log('il secondo è maggiore');
} else {console.log('sono uguali')};