function checkFreeShipping() {
    
    const prices = {
        "Shampoo": 5.99,
        "RubberDucks": 15.99
    };
    let shampooCount = console.log("shampoo");
    // let shampooCount = prices.Shampoo;
    let rubberDucksCount = console.log("rubberDucks");
    // let rubberDucksCount = prices.RubberDucks;

    let totalCost = (shampooCount * prices["Shampoo"]) + (rubberDucksCount * prices["RubberDucks"]);
    // let totalCost = (prices[shampooCount] + prices[rubberDucksCount]);
    // console.log(totalCost);
    

    let resultText = totalCost > 50.00 ? "Eligible for free shipping!" : "Not eligible for free shipping.";
    
    console.log(resultText);
}
checkFreeShipping();