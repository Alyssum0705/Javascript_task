let tax = 1.10
let inputValue = prompt("消費税を計算します。");
let x = inputValue * tax;
let afterTax = Math.floor(x);
alert(afterTax + "円");
