'use strict';

const btn = document.querySelector('.btn');
const btnIcon = document.querySelector('.btn_icon');

const svg_1 = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
 <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>
</svg>`

const svg_2 = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
 <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
</svg>`


let clicked = false;

btn.addEventListener('click', () => {
    if (clicked){
        clicked = false;
        btnIcon.innerHTML = svg_1;       
        document.getElementById("col").style.color = 'white';
        document.getElementById("col").style.backgroundColor = 'black';
               
    } else {
        clicked = true;
        btnIcon.innerHTML = svg_2;
        document.getElementById("col").style.color = 'black';
        document.getElementById("col").style.backgroundColor = 'lightgrey';
        
    }
});

//document.getElementById('col').onclick = changeColor;
        //function changeColor() {
            //document.body.style.color = 'purple';
            //return false;
//};
