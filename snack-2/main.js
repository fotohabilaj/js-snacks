console.log('hello');

const word_one = prompt('scrivi una parola');
const word_two = prompt('scrivi una parola');

if (word_one.length >= word_two.length) {
    console.log(word_two, ',',word_one);
} else {
    console.log(word_one, ',',word_two);
}