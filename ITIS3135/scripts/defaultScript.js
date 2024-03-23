document.getElementById("date").innerHTML = "Today is: " + Date();

function myFunction(){
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;

    let text= `The Keen Peacemaker welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById("date").innerHTML = text;
}

function getPolygon(){
    let number = document.getElementById("number").value;
    if(isNaN(number) || number > 10 || number < -10 || number===0){
        let inputText = "Invalid input";
        document.getElementById("inputText").innerHTML = inputText; 

    } 
    else {
        number = Math.abs(number);
        number = Math.round(number);

        let polygonName; 
        switch(number){
            case 1:
                polygonName = "Henagon";
                break;
            case 2:
                polygonName = 'Digon';
                break;
            case 3:
                polygonName = 'Triangle';
                break;
            case 4:
                polygonName = 'Quadrilateral';
                break;
            case 5:
                polygonName = 'Pentagon';
                break;
            case 6:
                polygonName = 'Hexagon';
                break;
            case 7:
                polygonName = 'Heptagon';
                break;
            case 8:
                polygonName = 'Octagon';
                break;
            case 9:
                polygonName = 'Nonagon';
                break;
            case 10:
                polygonName = 'Decagon';
                break;
            default:
                polygonName = 'Please enter a number';
        }

        alert(`The name of the polygon that has ${number} sides is ${polygonName}`);
        document.getElementById("inputText").innerHTML = ""; 
        
    }

}

function likeArt(){
    let art = document.getElementById("art").value;
    if(art === "yes"){
        let artAnswer = "OMG! I LOVE ART TOO!";
        document.getElementById("artAnswer").innerHTML = artAnswer; 
    }
    else if (art === "no") {
        let artAnswer = "Oh, that's okay. Art can be subjective.";
        document.getElementById("artAnswer").innerHTML = artAnswer; 
    } else {
        let artAnswer = "Please answer with 'yes' or 'no'.";
        document.getElementById("artAnswer").innerHTML = artAnswer; 
    }
}

function favoriteArtist() {
    let fav = document.getElementById("fav").value;
    if (fav === "") {
        let favArtist = "You didn't answer!";
        document.getElementById("favArtist").innerHTML = favArtist;     
    } else {
        let favArtist = `Ah, ${fav}! A great choice`;
        document.getElementById("favArtist").innerHTML = favArtist; 
    }

}

function favoriteColor() {
    let fav = document.getElementById("favColor").value;
    let answer = `The color ${fav} is indeed inspiring!`;
    document.getElementById("color").innerHTML = answer;   
}

//have you ever tried my favorite style of art?: portrait
//how old are you?

function triedFavoriteStyle() {
    let style = document.getElementById("portrait").value;
    if (style === "yes") {
        let answer = "That's fantastic! Portrait art is a beautiful form of expression.";
        document.getElementById("portraitAnswer").innerHTML = answer;         
    } else if (style === "no") {
        let answer = "No worries! You can always give it a try and discover new artistic experiences.";
        document.getElementById("portraitAnswer").innerHTML = answer;  
    } else {
        let answer = "Please answer with 'yes' or 'no'.";
        document.getElementById("portraitAnswer").innerHTML = answer;
    }
}

// Question: How old are you?
function askAge() {
    let answer = document.getElementById("age").value;
    if (!isNaN(answer) && answer > 0 && answer < 150) {
        let ageAns = `You are ${answer} years old. Thank you for sharing!`;
        document.getElementById("ageAnswer").innerHTML = ageAns;
    } else {
        let ageAns = "Please enter a valid age.";
        document.getElementById("ageAnswer").innerHTML = ageAns;
    }
}

