var vid = document.getElementById('video');
var slider = document.getElementById('slider');
var pause = [38, 47, 60, 88, 135, 161, 170, 181, 197, 212, 230, 236, 244, 249, 259, 270, 278, 285, 292, 308, 322, 345, 359, 365, 375, 382, 395, 404, 421, 432, 441, 455, 463, 486, 496, 510,526, 539, 548, 571, 593, 607, 637, 657, 681, 686]
var sliderIndex = 0;
var bar = document.getElementById("bar");
var width = 0;
var barUnit = 1;
var anterior = 0;

window.onload = function() {
slider.max = pause.length;
  };

slider.onchange = () => {
    width = 0;
    barUnit = 100/(pause[slider.value] - pause[slider.value-1]);
    console.log(pause[slider.value-1]);
    if (slider.value!=0){
        vid.currentTime = pause[slider.value-1];
        vid.play();

    } else {
        vid.currentTime = 0;
    }
    
        sliderIndex = slider.value;
};

video.ontimeupdate = () => {
    if(vid.currentTime.toFixed(0) != anterior){
      width += barUnit;  
    }
    anterior = vid.currentTime.toFixed(0)
    if(vid.currentTime.toFixed(0)== pause[sliderIndex] && sliderIndex != 0){
        vid.pause();
    }
    bar.style.width = width + "%";
  };