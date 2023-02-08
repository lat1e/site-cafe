function makePage(article){
    const internet = document.getElementById('internet');
    internet.innerHTML = '';
    internet.innerHTML = article;
}

const introData = `
<div class="main-intro">
    <div class="loading-con">
        <div class="loading-text">Loading</div>
        <div class="loading-box">
            <div class="loading-box2">
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
            </div>
        </div>
    </div>
    <div class="intro-fin">
        <p class="title">"Hello, world!"</p>
        <div class="startbut" id="startbut">★press star★</div>
    <div>
</div>`;

const homeData = `
<div class="main-home">
    <div class="nav">☆★☆★☆"Hello, world!"</div>
    <div class="aside">
        <ul class="sidelist">
            <div class="sidelist-title">★Home</div>
        </ul>
        <ul class="sidelist">
            <div class="sidelist-title">★Special</div>
            <li class="sidelist-list">1</li>
            <li class="sidelist-list">2</li>
            <li class="sidelist-list">3</li>
        </ul>
        <ul class="sidelist">
            <div class="sidelist-title">★New</div>
            <li class="sidelist-list">1</li>
            <li class="sidelist-list">2</li>
            <li class="sidelist-list">3</li>
        </ul>
    </div>
    <div class="article">
    </div>
</div>`;

const newData = `
<div class="main-new">
    <div class="nav">☆★☆★☆"Hello, world!"</div>
    <div class="aside">
        <ul class="sidelist">
            <div class="sidelist-title">★Home</div>
        </ul>
        <ul class="sidelist">
            <div class="sidelist-title">★Special</div>
            <li class="sidelist-list">1</li>
            <li class="sidelist-list">2</li>
            <li class="sidelist-list">3</li>
        </ul>
        <ul class="sidelist">
            <div class="sidelist-title">★New</div>
            <li class="sidelist-list">1</li>
            <li class="sidelist-list">2</li>
            <li class="sidelist-list">3</li>
        </ul>
    </div>
    <div class="article">
        <div class="post">
            <div class="post-pfp"></div>
            <div class="post2">
                <div class="post3">
                    <div class="post-title">SuperNova</div>
                    <div class="post-id">@star</div>
                    <div class="post-date">2027/7/7</div>
                </div>
                <div class="post-text">The Universe is under no obligation to make sense to you.</div>
                <img src="./esset/post.jpg" class="post-thum"></img>
            </div>
        </div>
        <div class="post">
            <div class="post-pfp"></div>
            <div class="post2">
                <div class="post3">
                    <div class="post-title">SuperNova</div>
                    <div class="post-id">@star</div>
                    <div class="post-date">2027/7/5</div>
                </div>
                <div class="post-text">When it is dark enough, you can see the stars.</div>
                <img src="./esset/post2.jpg" class="post-thum"></img>
            </div>
        </div>
    </div>
</div>`;


function intro() {
    makePage(introData);

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

    const startbut = document.getElementById('startbut');
    startbut.addEventListener('click', () => makePage(newData));
}

intro();