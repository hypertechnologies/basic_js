const cities = ["New York", "Toronto", "London", "Honkong", "Dhaka"]

// Find length of the array
const length = cities.length
console.log(length)


// For loop

// i++ is same as i = i + 1
for(let i = 0; i <= cities.length - 1; i++){
    console.log(cities[i])
}

const address = {
    street: "1 Fruitwood Ter",
    aptNumber: null,
    city: "Williamsville",
    state: "NY",
    country: "USA"
}

for (key in address){
    console.log("Key is: " + key)
    console.log("Value is: " + address[key])
}