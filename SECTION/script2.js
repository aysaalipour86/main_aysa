let myvar = false;
function Click1(btn) {
    myvar = !myvar;

    btn.textContent = myvar ? 'ADDED TO CART🛒' : 'ADDED TO CART✅';

    btn.classList.add('active');

    setTimeout(() => btn.classList.remove('active'), 2000);

    document.getElementById('message1').innerHTML =
        myvar ? 'ADDED TO CART🛒' : 'ADDED TO CART✅';
}

