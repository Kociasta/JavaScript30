document.addEventListener("DOMContentLoaded" , () => {

    const keys = document.querySelectorAll('.key'); // save all keys in tab

    window.addEventListener('keydown' , function(e){
        // e.keyCode --> get a code of the key
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) {
            return
        }
        audio.currentTime = 0; // this is for me to play immediately same button
        audio.play(); //play sound

        key.classList.add('playing');
    })

    keys.forEach( elem => { // run through the keys
        elem.addEventListener('transitionend' , event => {
            // lots of events - gimme only "transform" one
            if(event.propertyName !== 'transform') return;
            event.target.classList.remove('playing');
        })
    })

});
