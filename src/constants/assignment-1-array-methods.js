import {inventory} from "./inventory.js";
//Opdracht 1: oefenen met array methods

//--------------Opdracht 1A---------------------
const productTypes = inventory.map((product) => {
    return product.type;
})

console.log(productTypes);



//--------------Opdracht 1B---------------------
const soldOutProducts = inventory.filter((product) => {
    return product.originalStock === product.sold;
})

console.log(soldOutProducts);



//--------------Opdracht 1C---------------------
const specificProduct = inventory.find((product) => {
    return product.type === "NH3216SMART";
})

console.log(specificProduct);



//--------------Opdracht 1D---------------------
const sportProducts = inventory.map((product) => {
    if (product.refreshRate >= 100) {
        return { name: `${product.brand} ${product.name}`, suitable: true }
    } else {
        return { name: `${product.brand} ${product.name}`, suitable: false }
    }
})

console.log(sportProducts);



//--------------Opdracht 1E---------------------
const largeScreenProducts = inventory.filter((product) => {
    return product.availableSizes.find((size) => {
        return size >= 65;
    });
})

console.log(largeScreenProducts);



//--------------Opdracht 1F---------------------
//Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken.
const ambilightProducts = inventory.filter((product) => {
    const optionAmbilight = product.options.find((option) => {
        return option.name === "ambilight";
    })

    return optionAmbilight.applicable === true;
})

console.log(ambilightProducts);