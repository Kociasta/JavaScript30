document.addEventListener("DOMContentLoaded" , () => {

    window.addEventListener('keydown' , function(e){
        // e.keyCode
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) {
            return
        }
        audio.currentTime = 0;
        audio.play();

        key.classList.add('playing');
    })



});
