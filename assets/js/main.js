const imgHomeIceCream = document.querySelector('.home-ice-cream');
const homeImgDiv = document.querySelector('.home-image-div');
const locationDivMap = document.querySelector('.location-div-map');

const BORDER_RADIUS_MOUSE_OUT = `${260}px ${10}px ${10}px ${10}px`;
const BORDER_RADIUS_MOUSE_ENTER = `${10}px ${10}px ${10}px ${10}px`;
const TRANSITION_VALUE = `${0.5}s`;

imgHomeIceCream.addEventListener('mouseenter', (e) => {
    homeImgDiv.style.borderRadius = BORDER_RADIUS_MOUSE_ENTER;
    homeImgDiv.style.transition = TRANSITION_VALUE;
})

imgHomeIceCream.addEventListener('mouseout', (e) => {
    homeImgDiv.style.borderRadius = BORDER_RADIUS_MOUSE_OUT;
    homeImgDiv.style.transition = TRANSITION_VALUE;
})