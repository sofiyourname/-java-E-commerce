//movement Animation to happen
const card= document.querySelector('.card');
const container= document.querySelector ('.container');

container.addEventListener("mousemove", (e) => {
    let xAxis= (window.innerWidth / 2 - e.pageX);
    let yAxis = (window.innerHeight / 2 - e.pageY);
    card.style.transform= `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})