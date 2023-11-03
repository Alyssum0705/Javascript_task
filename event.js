let target = document.getElementById('text01');
let target2 = document.getElementById('output-text');
target.addEventListener('blur',function(e) {
    target2.textContent = e.target.value;
});