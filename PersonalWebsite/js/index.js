gsap.to("#text", {duration: .5, opacity: 0.1,ease:'power2.inOut'});
gsap.from('.animate', {duration: 1, opacity:0, x:-100});

AOS.init();

document.querySelector('#text').addEventListener('mouseover', () => {
    bubblesAdd();
})
document.querySelector('#text').addEventListener('mouseout', () => {
    bubblesRemove();
})

//functions

function bubblesAdd(){
    document.querySelector('.main').classList.add('bubbles');
}
function bubblesRemove(){
    setTimeout(() => {document.querySelector('.main').classList.remove('bubbles')}, 500);
}


