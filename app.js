const gBtn = document.querySelector(".btn .btn1");
const image = document.querySelector('.content img');
const title = document.querySelector('.content .meme-title');
const author = document.querySelector('.content .author');

gBtn.addEventListener('click' ,() =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(res => res.json())
    .then(data => post(data))
});

const post = (data) =>{
    console.log(data);
    image.setAttribute("src" , data.url);
    title.innerHTML = data.author;
}