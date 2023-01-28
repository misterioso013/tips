window.onload = function() {
    setTimeout(function() {

        const body = document.querySelector('body');
        const loader = document.querySelector('.loader');
        const main = document.querySelector('.main');

    if(body.classList.contains('loading')) {
        body.classList.remove('loading');
        loader.style.display = 'none';
        main.style.visibility = 'visible';
    }
    }, 3000);
}