for (let i = 10; i > 0; i--) {
    let s = '(' + i + '):';
    for (let j = 1; j <= i; j++) {
        s = s + '*';
    }
    console.log(s);
}