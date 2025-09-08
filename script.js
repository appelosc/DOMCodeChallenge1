window.onload = function() {
    // Lyssna efter händelser
    var profile = document.getElementsByClassName("team-member");
    

    
    for (var i = 0; i < profile.length; i++) {
        profile[i].addEventListener("mouseover", function(e){
            effectOn(e.currentTarget);
        });
        profile[i].addEventListener("mouseout", function(e){
            effectOff(e.currentTarget);
        });
        profile[i].addEventListener("click", function(e){
            editTitle(e.currentTarget);
        });
    }
    

    
}
var editTitle = function(e) {
    var teamTitle = e.querySelector(".team-title");
    var newTitle = prompt("Enter new title:", teamTitle.innerHTML);
    if (newTitle !== null) {
        teamTitle.innerHTML = newTitle;
    }
};

function effectOn(id){
    // Lägg till en effekt när musen är ovanför personen
    id.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

    
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    id.style.boxShadow = "none";
}
