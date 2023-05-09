(function(){
    const cartButton = document.getElementById('toggle-cart');
    const cartContent = document.getElementById('cart-content');
    cartButton.addEventListener("click", function(){
        
        if (cartContent.classList.contains("cart-content-on")) {
            cartContent.classList.remove("cart-content-on");
            console.log("switch off");
        } else {
            cartContent.classList.add("cart-content-on");
            console.log("switch on");
        }
    })
})();