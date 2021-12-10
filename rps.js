window.onload = function(){ 
    var playerPick = 0; //egy szám ami jelzi hogy a player melyik gombra nyomott, 1-kő, 2-papír, 3-olló
    var opponentPick = 0; //egy szám ami a gép pickelt karaktere
    var playerPoint = 0; //a player elért pontszámait jelzi
    var opponentPoint = 0; //a gép elért pontszámait jelzi
    document.getElementById('b1').onclick = function(){ //kő gomb onclick function
        var odds = Math.floor(Math.random() * 3) + 1; //legenerálja azt a számot ami alapján megjelenik a másik kép
        //console.log(odds);
        document.getElementById("player").innerHTML="<img src='img/rock.jpg' />";
        playerPick = 1; //beállítja a player picket a kőre
        if(odds == 1){
            document.getElementById("opponent").innerHTML="<img src='img/rock.jpg' />";
            opponentPick = 1; //beállítja a gép pickjét kőre
        }
        else if(odds == 2){
            document.getElementById("opponent").innerHTML="<img src='img/paper.jpg' />";
            opponentPick = 2; //beállítja a gép pickjét papírra 
        }
        else if(odds == 3){
        document.getElementById("opponent").innerHTML="<img src='img/scissors.jpg' />";
        opponentPick = 3; //beállítja a gép pickjét ollóra
        }
        if(playerPick == opponentPick){ //megnézi ha a két változó egyenlő akkor döntetlen
            document.getElementById("playerscore").innerHTML = "You and your opponent picked the same.";
        }
        else if(opponentPick == 2){ //a player a kőre nyomott a gép viszont a papírra ezért a gép nyer
            document.getElementById("playerscore").innerHTML = "Your opponent won.";
            opponentPoint++;
        }
        else if(opponentPick == 3){ //a gép az ollóra nyomott a player pedig a kőre ezért a player nyer
            document.getElementById("playerscore").innerHTML = "You won.";
            playerPoint++;
        }
        document.getElementById("ppoint").innerHTML = "You have " + playerPoint + " point";
        document.getElementById("opoint").innerHTML = "Your opponent has " + opponentPoint + " point";
    }

    document.getElementById('b2').onclick = function(){ //papír gomb onclick function
        var odds = Math.floor(Math.random() * 3) + 1; //legenerálja azt a számot ami alapján megjelenik a másik kép
        //console.log(odds);
        document.getElementById("player").innerHTML="<img src='img/paper.jpg' />";
        playerPick = 2;
        if(odds == 1){
            document.getElementById("opponent").innerHTML="<img src='img/rock.jpg' />";
            opponentPick = 1;
        }
        else if(odds == 2){
            document.getElementById("opponent").innerHTML="<img src='img/paper.jpg' />";
            opponentPick = 2;
        }
        else if(odds == 3){
        document.getElementById("opponent").innerHTML="<img src='img/scissors.jpg' />";
        opponentPick = 3;
        }
        if(playerPick == opponentPick){
            document.getElementById("playerscore").innerHTML = "You and your opponent picked the same.";
        }
        else if(opponentPick == 1){
            document.getElementById("playerscore").innerHTML = "You won.";
            playerPoint++;
        }
        else if(opponentPick == 3){
            document.getElementById("playerscore").innerHTML = "Your opponent won.";
            opponentPoint++;
        }
        document.getElementById("ppoint").innerHTML = "You have " + playerPoint + " point";
        document.getElementById("opoint").innerHTML = "Your opponent has " + opponentPoint + " point";
    }

    document.getElementById('b3').onclick = function(){ //olló gomb onclick function 
        var odds = Math.floor(Math.random() * 3) + 1; //legenerálja azt a számot ami alapján megjelenik a másik kép
        //console.log(odds);
        document.getElementById("player").innerHTML="<img src='img/scissors.jpg' />";
        playerPick = 3;
        if(odds == 1){
            document.getElementById("opponent").innerHTML="<img src='img/rock.jpg' />";
            opponentPick = 1;
        }
        else if(odds == 2){
            document.getElementById("opponent").innerHTML="<img src='img/paper.jpg' />";
            opponentPick = 2;
        }
        else if(odds == 3){
            document.getElementById("opponent").innerHTML="<img src='img/scissors.jpg' />";
            opponentPick = 3;
        }
        if(playerPick == opponentPick){
            document.getElementById("playerscore").innerHTML = "You and your opponent picked the same.";
        }
        else if(opponentPick == 1){
            document.getElementById("playerscore").innerHTML = "Your opponent won.";
            opponentPoint++;
        }
        else if(opponentPick == 2){
            document.getElementById("playerscore").innerHTML = "You won.";
            playerPoint++;
        }
        document.getElementById("ppoint").innerHTML = "You have " + playerPoint + " point";
        document.getElementById("opoint").innerHTML = "Your opponent has " + opponentPoint + " point";
    }

    document.getElementById('endbutton').onclick = function(){
        
        window.alert = function(al, $){
            return function(msg) {
                al(msg);
                $(window).trigger("okbuttonclicked");
            };
        }(window.alert, window.jQuery);
        
        
        $(window).on("okbuttonclicked", function() {
            window.location.reload();
            return false;
        });
        
        alert("Your points will reset.");

    }
};  
