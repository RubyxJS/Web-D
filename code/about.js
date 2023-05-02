/* This is the main function for the about page.
 * It listens for click events on the buttons in the about content menu and displays the corresponding content on the page.
 * It achieves this by toggling the "active" class on both the button and the content element. */

(function (){
    const historyButton = document.getElementById("History");
    const cultureButton = document.getElementById("Culture");
    const landmarksButton = document.getElementById("Landmarks");
    const allButtons = [historyButton, cultureButton, landmarksButton];
    
    const historyContent = document.getElementById("history-content");
    const cultureContent = document.getElementById("culture-content");
    const landmarksContent = document.getElementById("landmarks-content");
    const allContents = [historyContent, cultureContent, landmarksContent];
    
    // Handle click events on the History button
    historyButton.addEventListener("click", function(){
        allButtons.forEach(function(button){
            button.classList.remove("active");
        });
        historyButton.classList.add("active");
        
        allContents.forEach(function(content){
            content.classList.remove("active");
        });
        historyContent.classList.add("active");
    });

    // Handle click events on the Culture button
    cultureButton.addEventListener("click", function(){
        allButtons.forEach(function(button){
            button.classList.remove("active");
        });
        cultureButton.classList.add("active");
        
        allContents.forEach(function(content){
            content.classList.remove("active");
        });
        cultureContent.classList.add("active");
    });

    // Handle click events on the Landmarks button
    landmarksButton.addEventListener("click", function(){
        allButtons.forEach(function(button){
            button.classList.remove("active");
        });
        landmarksButton.classList.add("active");
        
        allContents.forEach(function(content){
            content.classList.remove("active");
        });
        landmarksContent.classList.add("active");
    });
})();
