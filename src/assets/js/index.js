let images = null

async function roll() {
    const coverImg = document.querySelector("#cover-img");
    const title = document.querySelector("#cover-img-title");
    const readMore = document.querySelector("#cover-img-read-more-link");
    
    if(!images) {
        const response = await fetch("/assets/data/images.json");
        const json = await response.json();
        images = json;
    }

    if(images.length == 0) {
        readMore.classList.add("hidden");
        return;
    }
    const rand = Math.floor(Math.random()*images.length)
    const image = images[rand]
    coverImg.setAttribute("src",image.url)
    title.setHTMLUnsafe(image.title ?? image.alt)
    readMore.classList.remove("hidden");
    readMore.setAttribute("href",image.page_url)
}

roll();
