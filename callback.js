function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = "Halim mama";
//  const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good Morning', name);
}

greeting(greetingHandler, 'tom')