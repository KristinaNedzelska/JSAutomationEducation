const randomstring = require("randomstring");
const fs = require('fs');
const { setTimeout } = require("timers");

let student = {
    "name": randomstring.generate({
        length: 10,
        charset: 'alphabetic'
    }),
    "surname": randomstring.generate({
        length: 10,
        charset: 'alphabetic'
    }),
    "rate": Math.ceil(Math.random() * 100)
}
//console.log(student);
let string = JSON.stringify(student);
//console.log(string);

let obj;
let obj1;
fs.appendFile("new.json", string,
    function (err) {
        if (err) throw err;
        console.log(string);
    });


    obj = fs.readFile("new.json", "utf8",
        function (err, data) {
            if (err) throw err;
            console.log(data);
            obj1 = JSON.parse(data);
        }
    );

setTimeout(() => {
    
    console.log(obj1);
}, 4000);
