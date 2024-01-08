//check localStorage 
let powerOn, positionSun;
(localStorage.getItem('powerOn')) ? powerOn = localStorage.getItem('powerOn') : powerOn = 0;
(localStorage.getItem('positionSun')) ? positionSun = localStorage.getItem('positionSun') : positionSun = 0;

powerOn = Number(powerOn);
positionSun = Number(positionSun);

console.log('powerOn:', powerOn, "& powerOn typeOf:", typeof(powerOn));
console.log('positionSun:', positionSun, "& positionSun typeOf:", typeof(positionSun));

const sun = document.querySelector(".sun");
const powerBtn = document.querySelector(".power");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");

const home1 = document.querySelector('.home1');
const home2 = document.querySelector('.home2');
const home3 = document.querySelector('.home3');

const onHome1 = (on) => {
    if (on) {
        if (!(home1.classList.contains('homeOn'))) {
            home1.classList.add('homeOn');
        } 
    } else {
        if ((home1.classList.contains('homeOn'))) {
            home1.classList.remove('homeOn');
        } 
    }
}
const onHome2 = (on) => {
    if (on) {
        if (!(home2.classList.contains('homeOn'))) {
            home2.classList.add('homeOn');
        } 
    } else {
        if ((home2.classList.contains('homeOn'))) {
            home2.classList.remove('homeOn');
        } 
    }
}
const onHome3 = (on) => {
    if (on) {
        if (!(home3.classList.contains('homeOn'))) {
            home3.classList.add('homeOn');
        } 
    } else {
        if ((home3.classList.contains('homeOn'))) {
            home3.classList.remove('homeOn');
        } 
    }
}




//test for change position of Sun
/*let sunStart = 4 + positionSun;
let sun = document.querySelector(".sun");
console.log('sun style:', sun.style);
console.log('sunStart:', sunStart);
sun.style.gridColumnStart = sunStart;
sun.style.gridColumnEnd = sunStart + 1;*/


//change position
const changePositionSun = (delta, state) => {
    
    if (positionSun + delta > 3 || positionSun + delta < -3) {
        console.log('to many! key will be disabled!')
        return;
    }

    positionSun += delta;
    //save position
    localStorage.setItem('positionSun', positionSun);

    let sunStart = 4 + positionSun;
    
    //Enable/Disable Left/Right
    (positionSun == -3) ? btnLeft.disabled = true : btnLeft.disabled = false;
    (positionSun == 3) ? btnRight.disabled = true : btnRight.disabled = false;


    //let sun = document.querySelector(".sun");  -- change to global const


    console.log('sun.style.gridColumnStart:', sun.style.gridColumnStart);
    console.log('var sunStart:', sunStart);
    //change Sun Position
    sun.style.gridColumnStart = sunStart;
    //sun.style.gridColumnEnd = sunStart + 1;


    //change Sun (&power) station
    //let powerBtn = document.querySelector(".power");   -- change to global const
    if (state) {
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


    //change sunshine on homes
    /*
    for (let i = 1; i <= 3; i++) {
        let home = document.querySelector('.home'+String(i));
        console.log('home.style.gridColumnStart:', home.style.gridColumn);
        console.log('home:', home);
        if (home.style.gridColumnStart == sunStart) {
            if (state) {
                if (!(home.classList.contains('homeOn'))) {
                    home.classList.add('homeOn');
                } 
            } else {
                if ((home.classList.contains('homeOn'))) {
                    home.classList.remove('homeOn');
                } 
            }
        }
    }
    
    let home1 = document.querySelector('.home1');   -- change to global const
    let home2 = document.querySelector('.home2');   -- change to global const
    let home3 = document.querySelector('.home3');   -- change to global const
    */
    if (positionSun == -2) {
        onHome1(state);
        onHome2(false);
        onHome3(false);
    }else if (positionSun == 0) {
        onHome1(false);
        onHome2(state);
        onHome3(false);
    } else if (positionSun == 2) {
        onHome1(false);
        onHome2(false);
        onHome3(state);
    } else {
        onHome1(false);
        onHome2(false);
        onHome3(false);
    }
    
}
changePositionSun(0,powerOn);


//click on Power
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