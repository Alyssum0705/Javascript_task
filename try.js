var a = [1,2,3];

try {
    console.log(a[i]);
} catch (e) {
    if (e instanceof Error) {
        console.log('例外 Error');
    }
}

 

console.log('end');