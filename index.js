
console.log('START')
function computerPlay(){
   let  gameRndOpuit = ['rock','paper', 'scisors'];
    let rndNumber = 1 /*(Math.random()*3,1);*/
    console.log(rndNumber);
    return  gameRndOpuit[rndNumber];
}

console.log(computerPlay());
 computerSelection = computerPlay();
playerSelection = computerPlay();

console.log(computerSelection);
console.log(playerSelection);

function playRound(computerSelection,playerSelection){
    console.log('You both recieved '+ computerSelection + ' - ' + playerSelection)
}

playRound(computerSelection,playerSelection); 
console.log('FINISH')