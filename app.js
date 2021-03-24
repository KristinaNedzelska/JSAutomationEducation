const randomstring = require("randomstring");
const fs = require('fs');

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

let string = JSON.stringify(student);


fs.appendFile("new.json", string,
    function (err) {
        if (err) throw err;
        console.log('Created');


        fs.readFile("new.json", "utf8",
            function (err, data) {
                if (err) throw err;
                console.log(data);
                let obj1 = JSON.parse(data);
                console.log(obj1);

                let objectChanged = obj1;
                objectChanged.name = 'Kris';

                fs.appendFile("new.json", JSON.stringify(objectChanged),
                    function (err) {
                        if (err) throw err;
                        console.log(obj1);
                    })

            })
    })

// fs.appendFile("new.json", obj1 = {
//     "age": 20
// },
    // function (err) {
    //     if (err) throw err;
    //     console.log('')
    // });


