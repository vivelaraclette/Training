<script>
/*function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if(userInput==='pierre'||userInput==='feuille'||userInput==='ciseaux') {
    return userInput
  } else {
    console.log('Mauvais choix !');
  }
}*/
function getComputerChoice() {
randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber) {
    case 0:
      return 'pierre';
    case 1:
      return 'feuille';
    case 2:
      return 'ciseaux';
  }
}
function determineWinner(userChoice,computerChoice) {
    userChoice = userChoice.toLowerCase();
  if(userChoice !== 'pierre' && userChoice !== 'feuille' && userChoice !=='ciseaux') {
    return 'Mauvais choix !';
  } else {
  if(userChoice === computerChoice){
    return 'Egalite entre l\'homme et RNJesus'
  }
  if(userChoice === 'pierre') {
    if (computerChoice === 'feuille') {
      return 'RNJesus a gagne';
    } else {
      return 'L\'humain a gagne';
    }
  }
  if(userChoice === 'feuille') {
    if(computerChoice === 'ciseaux') {
       return 'RNJesus a gagne';
    } else {
       return 'l\'Humain a gagne';
    }
  }
  if(userChoice === 'ciseaux') {
    if(computerChoice === 'pierre') {
      return 'RNJesus a gagne';
    } else {
      return 'l\'humain a gagne';
    }
  }
 }
}
const computerPlayer = getComputerChoice();
console.log(computerPlayer);
console.log(determineWinner('prout',computerPlayer));
</script>
