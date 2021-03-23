// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const cover = document.querySelector('.cover img');
const purchase = document.querySelector('.purchase button');
const links = document.querySelector('.links');
const description = document.querySelector('.info h3');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    console.log('Hello');
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    title.style.transform = `translateZ(150px)`;
    description.style.transform = `translateZ(100px)`;
    links.style.transform = `translateZ(75px)`;
    cover.style.transform = `translateZ(200px)`;
    purchase.style.transform = `translateZ(150px)`;
});

// Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = `none`;
    cover.style.height = `30vh`;
    card.style.transition = `all ease-out 0.1s`;
});

// Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `all ease 0.7s`;
    title.style.transform = `translateZ(0px)`;
    description.style.transform = `translateZ(0px)`;
    links.style.transform = `translateZ(0px)`;
    cover.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
    cover.style.height = `20vh`;
});