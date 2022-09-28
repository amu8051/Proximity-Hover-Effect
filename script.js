document.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX; 
    const mouseY = e.clientY; 

    const anchor = document.getElementById('anchor');
    const rect = anchor.getBoundingClientRect(); 
    // console.log(rect);

    const anchorX = rect.left + rect.width /2;
    const anchorY = rect.top + rect.height /2;
    let rot = angle(mouseX, mouseY, anchorX, anchorY); 
    // console.log(rot);

    const eyes = document.querySelectorAll('.eye');
    // console.log(eyes);
    rot = rot + 90;
    eyes.forEach( (eye) => {
        console.log('Eyes function!!!')
        eye.style.transform = `rotate(${rot}deg)`;
    })

})

function angle(cx, cy, ex, ey){

    const dy = ey-cy;
    const dx = ex-cx;
    const rad = Math.atan2(dy, dx); 
    const deg = rad*180 / Math.PI; 

    return deg;
}