/*
Javascript Operations
As an example, we are calculating the total cost of a product
*/

const product_price = 100
const tax = 15
const shipping = 5

const total_cost = product_price + tax + shipping

console.log("The total cost of the product before discount is " + total_cost)

// product discount
const discount = 10
const total_cost_after_discount = total_cost - discount

console.log("The total cost of the product after the discount is " + total_cost_after_discount)

// Product quantity
const quantity = 3
const total_cost_multiple_product = total_cost_after_discount * quantity

console.log("The total cost for " + quantity + " products after the discount is " + total_cost_multiple_product)

// half off discount
const total_cost_after_half_off = total_cost_multiple_product / 2
console.log("The total cost of the product after the half off is " + total_cost_after_half_off)



/*
Calculate the total cost of the product (using let variable)
This is to show that we can update the let variable but can't update the const variable
*/

let product_price_2 = 100
let tax_2 = 15
const shipping_2 = 5
const quantity_2 = 3

product_price_2 = product_price_2 * quantity_2
tax_2 = tax_2 * quantity_2

const total_2 = product_price_2 + tax_2 + shipping_2

console.log("Total_2 is " + total_2)