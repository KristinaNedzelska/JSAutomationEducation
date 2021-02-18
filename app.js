// Write a JavaScript function to check if given string includes given symbol.

function checkStringContainsSymbol(string, symbol) {
    if (string.includes(symbol)) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkStringContainsSymbol("Hello world", "w")

// Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).

function isStringBlank(string) {
    if (string.length === 0 || string.includes(' ')) {
        console.log('Your string is blank');
    } else {
        console.log('String is NOT blank')
    }    
}

isStringBlank("Hello world");


// Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.” (should convert lower case names to upper)

function abbrev(name) {
    let firstSymbol = name.charAt(0);
    let spaceSymbol = name.indexOf(" ");
    let positionSecondSymbol = spaceSymbol+1;
    let secondSymbol = name.charAt(positionSecondSymbol);
    return `${firstSymbol}.${secondSymbol}.`;
}

let result = abbrev("Kristina Nedzelska");
console.log(result);

// Write a JavaScript function that accept two integers and display the larger.

function maxNumber(x, y) {
    if (x > y) {
        console.log(x);
    } else {
        console.log(y);
    }
}
maxNumber(2,4)

// Write a JavaScript function with conditional statement to sort three numbers. (use if/else only)
function sortNumber (a,b,c) {
    let min;
    if (a<b && a<c) { 
        min=a;
    } else if (b<a && b<c) {
        min = b;
    } else { 
        min=c;
    }
    let mid;
    if (a<b && a>c) { 
        mid=a;
    } else if (b<a && b>c) {
        mid = b;
    } else { 
        mid=c;
    }
    let max;
    if (a>b && a>c) { 
        max=a;
    } else if (b>a && b>c) {
        max = b;
    } else { 
        max=c;
    }
    console.log (min, mid, max)
}
sortNumber(5,7,2)
