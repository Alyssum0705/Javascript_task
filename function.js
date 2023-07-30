//課題（変数名あり）
function area(p1, p2) {
    let p = p1 * p2 / 2;
    return p;
}
console.log(area(10, 20));

//（変数名なし）
let p = (function (p1, p2) {
  var p = p1 * p2 / 2;
  return p;
}) (10, 20);
console.log(p);