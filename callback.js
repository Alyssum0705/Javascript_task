let a =[];
for (let i = 1; i < 101; i++){
    a.push(i);
}

console.log(a)

let b3 = a.filter(function(e) {
    return e % 3 == 0;
});

console.log(b3);

let b5 = a.filter(function(e) {
    return e % 5 == 0;
});

console.log(b5);

let all = a.filter(function(e) {
    // return true;
    return false;
});
console.log(all);

let c3 = [];
let c5 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        c3.push(i);
    }
    if (i % 5 == 0) c5.push(i);
}
console.log(c3);
console.log(c5);
