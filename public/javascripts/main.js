const powerBtn = document.querySelector(".power");
powerBtn.addEventListener ('click', () => {
    let sun = document.querySelector(".sun");
    let home2 = document.querySelector(".home2");
    if (powerBtn.classList.contains('powerOn')) {
        powerBtn.classList.remove('powerOn');
        sun.classList.remove('sunOn');
        home2.classList.remove('homeOn');
    } else {
        powerBtn.classList.add('powerOn');
        sun.classList.add('sunOn');
        home2.classList.add('homeOn');
    }

})
