function makePage() {
    const article = document.querySelector(".article");
    const outer = document.createElement('div');
    outer.innerHTML = makeLayout(article.innerHTML);
    console.log(outer.innerHTML);
    document.body.innerHTML = '';
    document.body.appendChild(outer);


}


function makeLayout(article) {
    const layout = `
        <div class="container">
            <div class="header"></div>
            <div class="main">
            <div class="aside"></div>
            <div class="article">${article}</div>
            </div>
        </div>
    `
    console.log(layout);
    return layout;
}

makePage();