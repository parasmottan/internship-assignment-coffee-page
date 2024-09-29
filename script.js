function ButtonColor() {

  const passField = document.querySelector('form .pass');
  const Button = document.querySelector('form .btn');


  passField.addEventListener('input', function () {
    if (passField.value.trim().length > 0) {

      Button.style.backgroundColor = '#4e892c';
      Button.style.cursor = 'pointer';
      Button.disabled = false;
    } else {

      Button.style.backgroundColor = '#888888b7';
      Button.style.cursor = 'not-allowed';
      Button.disabled = true;
    }
  });

}

ButtonColor()

let butonaccess = document.querySelector('form button')
let lodder = document.querySelector('.loader')
let btntxt = document.querySelector('.btn-text')



butonaccess.addEventListener('click', function () {

  lodder.style.opacity = '1'
  btntxt.style.opacity = '0'


})

const leftDiv = document.querySelector('.leftdiv');
const rightDiv = document.querySelector('.rightdiv');
window.addEventListener('load', function() {
 

  // Initially hide left div and make right div full width
  leftDiv.style.width = '0';
  leftDiv.style.opacity = '0'; // Set initial opacity to 0

  rightDiv.style.width = '100%';
  rightDiv.style.opacity = '1'; // Ensure right div is visible

  // Start the animation after a short delay
  setTimeout(() => {
    // Enable transitions for both divs
    leftDiv.style.transition = 'width 1.5s ease-in-out, opacity 1.5s ease-in-out',    // Added opacity to transition
    rightDiv.style.transition = 'width 1.5s ease-in-out';
   

    // Animate both divs simultaneously in one smooth motion
    leftDiv.style.width = '55%'; // Expand left div to 55%
    leftDiv.style.opacity = '1'; // Make left div visible
   
    rightDiv.style.width = '45%'; // Shrink right div to 45%
  }, 3000); // Adjust the delay as per your requirement
});   

setTimeout(() => {
  rightDiv.style.transition = 'transform 1.5s ease-in-out';

  rightDiv.style.transform = 'scale(1)';

}, 5);



let imagelogo = document.querySelector('.imgdivload');

// Instantly scale up when the page loads and make the background white
setTimeout(() => {
  imagelogo.style.transform = 'scale(1)'; // Scale up immediately
 
}, 50); // Small delay to ensure it's applied on load

// After 5 seconds, apply the translation
setTimeout(() => {
  imagelogo.style.transform = 'translate(-428%, -184%) scale(1) rotateY(180deg)'; // Translate after 5 seconds
  imagelogo.style.backgroundColor = 'transparent'; // Change background to white
}, 3000); // 4-second delay for translation

let upperword = document.querySelector('.star')
let downword = document.querySelector('.coffee')

setTimeout(() => {
  upperword.style.transition = 'transform 1.2s ease-in-out' ;  
upperword.style.transform = 'translateX(0%)'

}, 4000);


setTimeout(() => {
  downword.style.transition = 'transform 1.2s ease-in-out' ;  
downword.style.transform = 'translateX(0%)'

}, 4500);


let navp = document.querySelector('nav .paragraphdv p')

setTimeout(() => {
  navp.style.transition = 'transform 1.2s ease-in-out' ;  
navp.style.transform = 'translateX(0%)'
// console.log("heyyyyyyy");

}, 4000);


let image = document.querySelector('.imgdivload img')



setTimeout(() => {
  image.style.transform = 'scale(1)'; 
 
}, 70); 


let formaccess = document.querySelector('form');
let navbarAccess = document.querySelector('.navbar');
let Anchortg = document.querySelector('.two-atag');
let footer = document.querySelector('footer');
let heading = document.querySelector('.headingAndPara');
let ImageLoad = document.querySelector('.imgdivload');
let ImageLoadimg = document.querySelector('.imgdivload img');


butonaccess.addEventListener('click', function () {


setTimeout(() => {
  rightDiv.style.transition = 'transform .5s ease-in-out';
  formaccess.style.transition = 'transform 1.5s ease-in-out, opacity 1.5 ease-in-out';
  navbarAccess.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
  Anchortg.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
  footer.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
  heading.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
  ImageLoad.style.transition = 'transform 1.5s ease-in-out, backgroundColor 1.5s ease-in-out';
  ImageLoadimg.style.transition = 'height 1.5s ease-in-out';



rightDiv.style.transform = 'scale(0)'
formaccess.style.transform= 'translateY(-20%)'
  formaccess.style.opacity = '0';
  navbarAccess.style.opacity = '0';
  navbarAccess.style.transform = 'translateY(20%)'
  heading.style.transform = 'translateY(40%)';
  heading.style.opacity = '0';
    Anchortg.style.transform = 'translateY(40%)';
  Anchortg.style.opacity = '0';
    footer.style.transform = 'translateY(40%)';
  footer.style.opacity = '0'
  ImageLoad.style.transform = 'translate(0%, 0%) scale(1) rotateY(0deg)'; // Translate after 5 seconds
  ImageLoad.style.backgroundColor = 'white'; // Change background to white
ImageLoadimg.style.height = '7vw'




}, 3000);


})