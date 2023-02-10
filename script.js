let input = 'The bookcase, a substantial piece of furnishings, was the first to be hauled into the apartment.';

let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];


for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i])
    }
    if (input[i] === 'u') {
        resultArray.push(input[i])
    }
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i])
        }
    }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString)