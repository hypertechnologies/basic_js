/*
=== Javascript arrays ===
Arrays are defined inside square bracket and by adding comma separated values. Values can be numbers or text/string
*/

// We have seen we can add one product price in a variable
const product_price = 100

/*
We can also add multiple products prices in a variable
This is called array. Arrays are define with square brackets []
and inside that we can add multiple comma separated items
*/

const product_prices = [100, 70, 60, 200, 250, 450, 1000, 800, 700, 20]

console.log(product_prices)

/*
Print product price by index
For example, print the product price of 200
We can access specific item in the array by index number. Index always starts with 0.
In the above array index of the item 100 is 0, index of the item 70 is 1 and so on.
*/

console.log("Printing the 4th item in the array (index#3): " + product_prices[3])
console.log("Printing the 7th item in the array (index#6): " + product_prices[6])


/*
=== Javascript Objects ===
Objects are defined inside carly bracket and by adding key-value pair
The left side of the item is called key and the right side of the item is called value.
*/
const product_list = {
    "headphone_model_1" : 100,
    "headphone_model_2" : 120,
    "headphone_model_3" : 150,
    "headphone_model_4" : 200,
    "headphone_model_5" : 300
}

console.log(product_list)

// To print a value from an object we can call by object key.
// For example, print the price of the headphone model 3
console.log("Price of headphone_model_3 is " + product_list["headphone_model_3"])
//Print the price of the headphone model 5
console.log("Price of headphone_model_5 is " + product_list["headphone_model_5"])