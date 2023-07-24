const button = document.querySelector('button');
const body = document.querySelector('body'); 

const colors = ['violet','indigo','blue','green','yellow','orange','red'];
// function changeColor(){
//     document.write(Math.random()*10);
// }

body.style.backgroundColor='pink';

document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*colors.length);
    // console.log(colorIndex);
    body.style.backgroundColor = colors[colorIndex];
});