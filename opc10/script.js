let theCursor = document.querySelector('#cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

theCursor.style.left = `${x}px`
theCursor.style.top = `${y}px`
}