let sum = 0;
let cards =[];
let card_el = document.getElementById("card-el");
let message = "";
let message_el = document.getElementById("message-el");
let sum_el = document.getElementById("sum-el");
let start_game = document.getElementById("start_game-el");
let new_card = document.getElementById("new_card-el");

function randomcard(){
    return Math.floor(Math.random()*10)+2;
}

function play(){
    let isAlive = true;
    let card1 = randomcard();
    let card2 = randomcard();
    cards = [card1, card2];
    sum = card1+card2;
    playfr();
}

function playfr(){
    card_el.textContent = "Cards : ";
    for(let i =0; i<cards.length; i++){
        card_el.textContent += cards[i]+" ";
    }
    
    sum_el.innerText ="Sum : "+sum;

    if(sum>21){
        isAlive =false;
        message = "You lost";
    }else if(sum===21){
        isAlive = false;
        message = "You got Blackjack"
    }else{
        message = "Take new card"
        isAlive=true;
    }
    message_el.innerText = message;
    start_game.innerText = "Start New Game"
}

function getCard(){
    if(isAlive===true){
        let cardx = randomcard();
        sum+=cardx;
        cards.push(cardx);
        playfr();
    }
}