/*
Create a javascript array that contains 5 popular cities in the world.
And print the first and last city name from the array.
*/

const cities = ["New York", "Toronto", "London", "Honkong", "Dhaka"]

// Print the first city
console.log("First City is: " + cities[0])
console.log(`Fist City is: ${cities[0]}`)

// Print the last city
console.log("Last City is: " + cities[4])
console.log("Last City is: " + cities[cities.length - 1])


/*
Create a javascript object that contains someone's US/Canada address.
The object should have the person's Street Address, Apartment Number, City,
State/Province, Zip code and Country. Then print the person's City and Zip code.
*/

const address = {
    street: "1 Fruitwood Ter",
    aptNumber: null,
    city: "Williamsville",
    state: "NY",
    country: "USA"
}

// Print the Apartment number
console.log("Apartment number is: " + address["aptNumber"])
// Print the City
console.log("City is: " + address["city"])
// Print the Country
console.log("Country is: " + address["country"])