
(function(){
    const images = Array.from(document.querySelectorAll(".carousel img"));
    var index = 0;

    function nextImage (){

        if(index === images.length - 1){
            index = -1;
        }
        index += 1;
        return images[index];
    }
    
    if (window.carouselInterval) clearInterval(window.carouselInterval);
    
    window.carouselInterval = setInterval( function(){
        images[index].classList.remove("active");
        nextImage().classList.add("active");

        console.log("Currently active", images[index]);
    }, 2000)

})();