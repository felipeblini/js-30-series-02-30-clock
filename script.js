const allHands = document.querySelectorAll('.hand');
const secondsHand = document.querySelector('.seconds-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// 60 is the total steps for seconds and minutes to do a complete circle
const stepsForSecondsAndMinutes = 60;

// 12 is the total steps for the hour hand to do a complete circle
const stepsForHours = 12;

// 360 is the total degrees of a circle
const degreesOfACircle = 360;

// 90 is the initial degree set for the clock hands
const initialDegrees = 90;

function setHandDegree(el, time, steps) {
    const degrees = (time / steps) * degreesOfACircle + initialDegrees;

    if(el.classList.contains("seconds-hand")) {

        // remove transition effect to initiate a new circle
        if(degrees === 90) {
            allHands.forEach((e) => e.classList.remove('transition'));
        }

        // add the transition effect after initialize a new circle
        if(degrees === 96) {
            allHands.forEach((e) => e.classList.add('transition'));
        }
    }

    el.style.transform = `rotate(${degrees}deg)`;
}

window.addEventListener('load', function() {
    
    setTimeout(() => {
        secondsHand.style.display = 'block';
        minHand.style.display = 'block';
        hourHand.style.display = 'block';
    }, 1000);

    setInterval(function() {
        const now = new Date();
        
        const secondsDegrees = setHandDegree(secondsHand, now.getSeconds(), stepsForSecondsAndMinutes);

        const minutesDegrees = setHandDegree(minHand, now.getMinutes(), stepsForSecondsAndMinutes);

        const hoursDegrees = setHandDegree(hourHand, now.getHours(), stepsForHours);

    }, 1000);
});
