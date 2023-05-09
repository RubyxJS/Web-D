
(function () {
    const images = Array.from(document.querySelectorAll(".carousel img"));
    var index = 0;

    function prevIndex() {
        if (index === 0) {
            return images.length -1
        }
        return index-1;
    }
    function nextIndex() {
        if (index === images.length-1) {
            return 0;
        }
        return index + 1;
    }

    if (window.carouselInterval) clearInterval(window.carouselInterval);

    window.carouselInterval = setInterval(function () {
        images[prevIndex()].classList.remove("in-active");
        images[index].classList.remove("active");
        images[index].classList.add("in-active");
        images[nextIndex()].classList.add("active");


        index = nextIndex();


    }, 6000);

})();