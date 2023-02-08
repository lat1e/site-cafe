const loadingText = document.querySelector('.loading-text');
let i = 0
const start = setInterval(loadingTextPrint, 550);

function loadingTextPrint() {
    if (loadingText.textContent.length<10) {
        loadingText.append('.');
    } else {
        loadingText.innerText = 'Loading';
        i++
        if (i>3) {clearInterval(start);}
    }
}