let apple = {
    name: 'りんご',
    color: '赤',
    weight: 250,
    number: 3,
};

let orange = {
    name: 'みかん',
    color: '橙',
    weight: 80,
    number: 5,
};

let grape = {
    name: 'ぶどう',
    color: '紫',
    weight: 400,
    number: 2,
};

let fruits = [apple, orange, grape];

function total_weight(weight, number){
    let total = weight * number;
    return total;
}

let fruits_total = [];
fruits.forEach(e => {
    // fruits_total += total_weight(e.weight, e.number);
    // let total = fruits_total + total_weight(e.weight, e.number);
    fruits_total.push(total_weight(e.weight, e.number));
});

let all = fruits_total.reduce(function(sum, element){
    return sum + element;
}, 0);

console.log(all);

// let max = 100;
// for (let i = 0; i < max; i++) {
    
// }
// for (let i = 0; i <= max-1; i++) {
    
// }