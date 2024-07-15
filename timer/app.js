
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset= document.querySelector('.reset');

const hourText = document.querySelector('.hour-text');
const hourUp = document.querySelector('.hour-up');
const hourDown = document.querySelector('.hour-down');

const divider = document.querySelector('.divider');
const divider2 = document.querySelector('.divider2');

const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2');
const title3 = document.querySelector('.title3');

const timeContainer = document.querySelector('.time-container');
const hourContainer = document.querySelector('.hour-container');
const minContainer = document.querySelector('.min-container');

const minText = document.querySelector('.min-text');
const minUp = document.querySelector('.min-up');
const minDown = document.querySelector('.min-down');

const secText = document.querySelector('.sec-text');
const secUp = document.querySelector('.sec-up');
const secDown = document.querySelector('.sec-down');

const titleGroup = document.querySelectorAll('.title-group');
const dividerGroup = document.querySelectorAll('.divider-group');
const arrowGroup = document.querySelectorAll('.arrow-group');
const resetPause = document.querySelectorAll('.reset-pause');


const circle = timeContainer.querySelector('.circle');


let hour = 0;
let min = 0;
let sec = 0;





hourUp.addEventListener('click', () =>{
    hourText.textContent = hour+=1;
    if(hour > 99 ){
        hour = 0;
        hourText.textContent = hour;  
    }
    if(hourText.textContent < 10 ) {
        hourText.textContent = '0' + hour;
        }
});

hourDown.addEventListener('click', () =>{
    hourText.textContent = hour-=1;
    if(hour < 0 ){
        hour = 99;
        hourText.textContent = hour;   
    }
    if(hourText.textContent < 10 ) {
        hourText.textContent = '0' + hour;
        }
});

minUp.addEventListener('click', () =>{
    minText.textContent = min+=1; 
    if(min > 59 ){
        min = 0;
        minText.textContent = min;   
    }   
    if(minText.textContent < 10 ) {
        minText.textContent = '0' + min;
        }
});

minDown.addEventListener('click', () =>{
    minText.textContent = min-=1;
    if(min < 1 ){
        min = 59;
        minText.textContent = min;
    }
    if(minText.textContent < 10 ) {
        minText.textContent = '0' + min;
        }
});

secUp.addEventListener('click', () =>{
    secText.textContent = sec+=1;
    if(sec >= 60 ){
        sec = 0;
        secText.textContent = sec;
    } 
    if(secText.textContent < 10 ) {
        secText.textContent = '0' + sec;
        }
});

secDown.addEventListener('click', () =>{
    secText.textContent = sec-=1;
    if(sec < 0 ){
        sec = 59;
        secText.textContent = sec;
    }
    if(secText.textContent < 10 ) {
        secText.textContent = '0' + sec;
        }
});



let startTimer = 'null';

btnStart.addEventListener('click', () => {
    

    startTimer = setInterval(function(){
        
        timeContainer.classList.remove('compress');
        timeContainer.classList.add('compress');

        circle.classList.remove('pause-circle');
        circle.classList.remove('hide');

        arrowGroup.forEach(arrow => {
            arrow.classList.add('hide');
        });

        btnStart.classList.add('hide');

        resetPause.forEach(rp => {
            rp.classList.remove('hide');
        });

        dividerGroup.forEach(divider => {
            divider.classList.add('blink');
        });
        dividerGroup.forEach(divider => {
            divider.classList.add('marginDivider');
        });

        titleGroup.forEach(title => {
            title.classList.add('hide');
        });

            if(secText.textContent != 0 ){ 
                sec = sec-1; 
                secText.textContent = sec;
            }

            if(minText.textContent != 0 && secText.textContent == 0){
                min = min-1; 
                minText.textContent = min;
                sec = 59;
                secText.textContent = sec;
            }
      

            if(hourText.textContent != 0 && minText.textContent == 0){
                min = 60;
                minText.textContent = min;

                hour = hour-1
                hourText.textContent = hour;
            }


        if(secText.textContent < 10 ) {
            secText.textContent = '0' + sec;
            }
        if(minText.textContent < 10 ) {
            minText.textContent = '0' + min;
            }
        // if(hourText.textContent < 10 ) {
        //     hourText.textContent = '0' + hour;
        //     }

        if(hourText.textContent == 0){
            hourContainer.classList.add('hide');
            divider.classList.add('hide');
        }
        if(minText.textContent == 0){
            minContainer.classList.add('hide');
            divider2.classList.add('hide');
        }

        if (hourText.textContent == 0 && minText.textContent == 0 && secText.textContent == 0){
            location.reload(); 
        }
    }, 1000);
});

btnPause.addEventListener('click',() =>{
    
    clearInterval(startTimer);

    circle.classList.add('pause-circle');

    btnStart.classList.remove('hide');
    btnReset.classList.remove('hide');

    btnPause.classList.add('hide');

    btnStart.textContent = 'Resume';

    dividerGroup.forEach(divider => {
        divider.classList.remove('blink');
    });
});

btnReset.addEventListener('click',() =>{
    location.reload();    
});




