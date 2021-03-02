//Write a JavaScript function to get the last element of an array
let salat = ["Tomato", "Cucamber", "Peper"];
let newSalat = function(ingredients) { 
console.log(`Last element of array is: ${ingredients[ingredients.length -1]}`);
}
newSalat(salat);

//Write a simple JavaScript program to join all elements of the following array into a string
let flowers = ["Tulip", "Rose", "Peony", "Iris"];
console.log(`String of array elements: ${flowers.join(" ")}`);

//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
let firstArray = [1,6,8,5];
let secondArray = [2,4,7,0];
let thirdArray = [];
for (let i=0; i <= firstArray.length -1; i++) {
thirdArray.push(firstArray[i]+secondArray[i]);
}
thirdArray;

//Write a JavaScript program to calculate the area and perimeter of a rectangle. 
//Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
let rectangle = {
width: 10,
height: 5,
getArea() {
console.log(this.width * this.height);
},
getPerimeter() {
console.log(2*(this.width + this.height));
}
}
rectangle.getArea();
rectangle.getPerimeter();
