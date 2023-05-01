(function (){
    const historyButton = document.getElementById("History");
    const cultureButton = document.getElementById("Culture");
    const landmarksButton = document.getElementById("Landmarks");
    const allButtons = [historyButton, cultureButton, landmarksButton];
    
    const historyContent = document.getElementById("history-content");
    const cultureContent = document.getElementById("culture-content");
    const landmarksContent = document.getElementById("landmarks-content");
    const allContents = [historyContent, cultureContent, landmarksContent];
    
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
})()
