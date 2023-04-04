if (10 < 15){
    console.log("10 is less than 15")
}

if (10 > 15) {
    console.log("10 is MORE than 15")
} else {
    console.log("10 is Not MORE than 15")
}

// Determine the time of the day 1 -24

const currentTime = 20

if (currentTime >= 1 && currentTime <= 11) {
    console.log("Good Morning!")
}else if(currentTime >= 12 && currentTime <= 18){
    console.log("Good Afternoon!")
}else {
    console.log("Good night!")
}

// With && operator both conditions has to be true, with || operator only one condition has to be true

if(10 > 15 || 20 < 35){
    console.log("print this")
}

if(10 > 15 && 20 < 35){
    console.log("don't print this")
}