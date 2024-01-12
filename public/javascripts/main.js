//check localStorage 
let powerOn, positionSun, moonOn, positionMoon;
(localStorage.getItem('powerOn')) ? powerOn = localStorage.getItem('powerOn') : powerOn = 0;
(localStorage.getItem('positionSun')) ? positionSun = localStorage.getItem('positionSun') : positionSun = 0;
(localStorage.getItem('moonOn')) ? moonOn = localStorage.getItem('moonOn') : moonOn = 0;
(localStorage.getItem('positionMoon')) ? positionMoon = localStorage.getItem('positionMoon') : positionMoon = -2;

powerOn = Number(powerOn);
positionSun = Number(positionSun);
moonOn = Number(moonOn);
positionMoon = Number(positionMoon);

console.log('powerOn:', powerOn, "& powerOn typeOf:", typeof(powerOn));
console.log('positionSun:', positionSun, "& positionSun typeOf:", typeof(positionSun));
console.log('moonOn:', moonOn, "& moonOn typeOf:", typeof(moonOn));
console.log('positionMoon:', positionMoon, "& positionMoon typeOf:", typeof(positionMoon));

const sun = document.querySelector(".sun");
const powerBtn = document.querySelector(".power");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");

const moon = document.querySelector(".moon");
const powerBtnMoon = document.querySelector(".swMoon");
const btnLeftMoon = document.querySelector(".btnLeftMoon");
const btnRightMoon = document.querySelector(".btnRightMoon");

const home1 = document.querySelector('.home1');
const home2 = document.querySelector('.home2');
const home3 = document.querySelector('.home3');

const onHome1 = (sun, moon) => {
    if (moon) {
        /*if ((home1.classList.contains('homeOn'))) {
            home1.classList.remove('homeOn');
        }*/
        if (!(home1.classList.contains('homeMoon'))) {
            home1.classList.add('homeMoon');
        }

    } else {
        if ((home1.classList.contains('homeMoon'))) {
            home1.classList.remove('homeMoon');
        }
        if (sun) {
            if (!(home1.classList.contains('homeOn'))) {
                home1.classList.add('homeOn');
            } 
            
        } else {
            if ((home1.classList.contains('homeOn'))) {
                home1.classList.remove('homeOn');
            } 
        }
    }
}
const onHome2 = (sun, moon) => {
    if (moon) {
        /*if ((home2.classList.contains('homeOn'))) {
            home2.classList.remove('homeOn');
        }*/
        if (!(home2.classList.contains('homeMoon'))) {
            home2.classList.add('homeMoon');
        }

    } else {
        if ((home2.classList.contains('homeMoon'))) {
            home2.classList.remove('homeMoon');
        }
        if (sun) {
            if (!(home2.classList.contains('homeOn'))) {
                home2.classList.add('homeOn');
            } 
            
        } else {
            if ((home2.classList.contains('homeOn'))) {
                home2.classList.remove('homeOn');
            } 
        }
    }
}
const onHome3 = (sun, moon) => {
    if (moon) {
        /*if ((home3.classList.contains('homeOn'))) {
            home3.classList.remove('homeOn');
        }*/
        if (!(home3.classList.contains('homeMoon'))) {
            home3.classList.add('homeMoon');
        }

    } else {
        if ((home3.classList.contains('homeMoon'))) {
            home3.classList.remove('homeMoon');
        }
        if (sun) {
            if (!(home3.classList.contains('homeOn'))) {
                home3.classList.add('homeOn');
            } 
            
        } else {
            if ((home3.classList.contains('homeOn'))) {
                home3.classList.remove('homeOn');
            } 
        }
    }
}




//test for change position of Sun
/*let sunColumn = 4 + positionSun;
let sun = document.querySelector(".sun");
console.log('sun style:', sun.style);
console.log('sunColumn:', sunColumn);
sun.style.gridColumnStart = sunColumn;
sun.style.gridColumnEnd = sunColumn + 1;*/

//switch homes classes
const swHome = () => {
    if (positionMoon == -3 || positionMoon == -1 || positionMoon == 1 || positionMoon == 3) {
        switch (positionSun) {
            case -3:
            case -1:
            case 1:
            case 3:
                onHome1(false, false);
                onHome2(false, false);
                onHome3(false, false);
                break;
            case -2:
                onHome1(powerOn, false);
                onHome2(false, false);
                onHome3(false, false);
                break;
            case 0:
                onHome1(false, false);
                onHome2(powerOn, false);
                onHome3(false, false);
                break;
            case 2:
                onHome1(false, false);
                onHome2(false, false);
                onHome3(powerOn, false);
                break;
        }
    } else if (positionMoon == -2) {
        switch (positionSun) {
            case -3:
            case -1:
            case 1:
            case 3:
                onHome1(false, moonOn);
                onHome2(false, false);
                onHome3(false, false);
                break;
            case -2:
                onHome1(powerOn, moonOn);
                onHome2(false, false);
                onHome3(false, false);
                break;
            case 0:
                onHome1(false, moonOn);
                onHome2(powerOn, false);
                onHome3(false, false);
                break;
            case 2:
                onHome1(false, moonOn);
                onHome2(false, false);
                onHome3(powerOn, false);
                break;
        }
    } else if (positionMoon == 0) {
        switch (positionSun) {
            case -3:
            case -1:
            case 1:
            case 3:
                onHome1(false, false);
                onHome2(false, moonOn);
                onHome3(false, false);
                break;
            case -2:
                onHome1(powerOn, false);
                onHome2(false, moonOn);
                onHome3(false, false);
                break;
            case 0:
                onHome1(false, false);
                onHome2(powerOn, moonOn);
                onHome3(false, false);
                break;
            case 2:
                onHome1(false, false);
                onHome2(false, moonOn);
                onHome3(powerOn, false);
                break;
        }
    } else if (positionMoon == 2) {
        switch (positionSun) {
            case -3:
            case -1:
            case 1:
            case 3:
                onHome1(false, false);
                onHome2(false, false);
                onHome3(false, moonOn);
                break;
            case -2:
                onHome1(powerOn, false);
                onHome2(false, false);
                onHome3(false, moonOn);
                break;
            case 0:
                onHome1(false, false);
                onHome2(powerOn, false);
                onHome3(false, moonOn);
                break;
            case 2:
                onHome1(false, false);
                onHome2(false, false);
                onHome3(powerOn, moonOn);
                break;
        }        
    }
    
    
    
    
    
}



//change position Sun
const changePositionSun = (delta) => {
    
    if (positionSun + delta > 3 || positionSun + delta < -3) {
        console.log('to many! key will be disabled!')
        return;
    }

    positionSun += delta;
    //save position
    localStorage.setItem('positionSun', positionSun);

    let sunColumn = 4 + positionSun;
    
    //Enable/Disable Left/Right
    (positionSun == -3) ? btnLeft.disabled = true : btnLeft.disabled = false;
    (positionSun == 3) ? btnRight.disabled = true : btnRight.disabled = false;


    //let sun = document.querySelector(".sun");  -- change to global const


    console.log('sun.style.gridColumn:', sun.style.gridColumn);
    console.log('var sunColumn:', sunColumn);
    //change Sun Position
    sun.style.gridColumn = sunColumn;
    //sun.style.gridColumnEnd = sunColumn + 1;


    //change Sun (&power) station
    //let powerBtn = document.querySelector(".power");   -- change to global const
    if (powerOn) {
        if (!(powerBtn.classList.contains('powerOn'))) {
            powerBtn.classList.add('powerOn');
        }
        if (!(sun.classList.contains('sunOn'))) {
            sun.classList.add('sunOn');
        }
    } else {
        if ((powerBtn.classList.contains('powerOn'))) {
            powerBtn.classList.remove('powerOn');
        }
        if ((sun.classList.contains('sunOn'))) {
            sun.classList.remove('sunOn');
        }
    }
    
    swHome();    
}
changePositionSun(0);


//change position Moon
const changePositionMoon = (delta) => {
    
    if (positionMoon + delta > 3 || positionMoon + delta < -3) {
        console.log('to many! key will be disabled! positionMoon + delta =', positionMoon + delta);
        return;
    }

    positionMoon += delta;
    //save position
    localStorage.setItem('positionMoon', positionMoon);

    let moonColumn = 4 + positionMoon;
    
    //Enable/Disable Left/Right
    (positionMoon == -3) ? btnLeftMoon.disabled = true : btnLeftMoon.disabled = false;
    (positionMoon == 3) ? btnRightMoon.disabled = true : btnRightMoon.disabled = false;


    //let sun = document.querySelector(".sun");  -- change to global const


    console.log('moon.style.gridColumn:', moon.style.gridColumn);
    console.log('var moonColumn:', moonColumn);
    //change Sun Position
    moon.style.gridColumn = moonColumn;

    if (moonOn) {
        if (!(powerBtnMoon.classList.contains('swMoonOn'))) {
            powerBtnMoon.classList.add('swMoonOn');
        }
        if (!(moon.classList.contains('moonOn'))) {
            moon.classList.add('moonOn');
        }
    } else {
        if ((powerBtnMoon.classList.contains('swMoonOn'))) {
            powerBtnMoon.classList.remove('swMoonOn');
        }
        if ((moon.classList.contains('moonOn'))) {
            moon.classList.remove('moonOn');
        }
    }
    
    swHome();      
}
changePositionMoon(0);

//click on Power for Sun
//const powerBtn = document.querySelector(".power");   -- change to global const
powerBtn.addEventListener ('click', () => {
    if (powerOn == 0) {
        powerOn = 1;
    } else {
        powerOn = 0;
    }
    localStorage.setItem('powerOn', powerOn);
    console.log('change local storage powerOn:', powerOn, '& typeOf:', typeof(localStorage.powerOn));
    changePositionSun(0, powerOn);
});

//click Left
btnLeft.addEventListener ('click', () => {
    changePositionSun(-1, powerOn);
})


btnRight.addEventListener ('click', () => {
    changePositionSun(+1, powerOn);
})


//Moon
powerBtnMoon.addEventListener ('click', () => {
    if (moonOn == 0) {
        moonOn = 1;
    } else {
        moonOn = 0;
    }
    localStorage.setItem('moonOn', moonOn);
    console.log('change local storage moonOn:', moonOn, '& typeOf:', typeof(localStorage.moonOn));
    changePositionMoon(0, moonOn);
});

//click Left
btnLeftMoon.addEventListener ('click', () => {
    changePositionMoon(-1, moonOn);
})


btnRightMoon.addEventListener ('click', () => {
    changePositionMoon(+1, moonOn);
})