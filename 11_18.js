let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.tagName = 'input';
e1.type = 'text';
e1.innerText = 'テスト';
console.log(e1.type);
e2.innerText = 'テキスト文字列';
e3.id = 'p5';