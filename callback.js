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
