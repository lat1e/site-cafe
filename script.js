const loadingText = document.querySelector('.loading-text');

function loadingTextPrint() {
    if (loadingText.textContent.length<10) {
        loadingText.append('.');
    } else {
        loadingText.innerText = 'Loading';
    }
}

setInterval(loadingTextPrint, 500);