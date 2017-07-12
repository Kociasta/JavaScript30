// JS
document.addEventListener("DOMContentLoaded" , ()=>{

    const secHand = document.querySelector('.second-hand');
    console.log(secHand);
    function setDate(){
        const now = new Date();
        const sec = now.getSeconds();
        const secDeg = (sec/60) * 360 ;
        secHand.style.transform = `rotate(${secDeg}deg)`;
        console.log(secDeg);
    }

    setInterval(setDate , 1000);


});
