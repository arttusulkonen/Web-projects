const view = {
    displayMessage: function(msg){
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location){
        let cell = document.getElementById(location);
        cell.classList.add('hit');
    },
    displayMiss: function(location){
        let cell = document.getElementById(location);
        cell.classList.add('miss');
    }
}

view.displayMiss("00");
view.displayHit("34");
view.displayMessage("Tap, tap, is this thing on?");


