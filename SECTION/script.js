let myvar = false;
function Click1(btn) {
    myvar = !myvar;

    btn.textContent = myvar ? '💖' : '💕';

    btn.classList.add('active');

    setTimeout(() => btn.classList.remove('active'), 2000);

    document.getElementById('message1').innerHTML =
        myvar ? '💖 love you' : '💕 i dont love you';
}



function Click2(btn) {
    myvar = !myvar;

    btn.textContent = myvar ? '🦄' : '😁';

    btn.classList.add('active');

    setTimeout(() => btn.classList.remove('active'), 2000);

    document.getElementById('message2').innerHTML =
        myvar ? '🦄 love you' : '😁 i dont love you';
}


