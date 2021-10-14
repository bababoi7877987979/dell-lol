function game(){
  let randNumber = parseInt(Math.random() * 99 + 1);
  let attemp = 10;
  
  function trying(){
      let userNumber = prompt('видите число',"");
      function checkNumber(){
          if(parseFloat(userNumber)){
              return Number(userNumber);
          }else{
              userNumber = prompt('вы ввели нето число, Повторите ввод',"");
              checkNumber();
              {
      }
      userNumber = checkNumber();

    if(userNumber > randNumber) {
        alert("Загаданное число меньше вашего, повторите попытку");
    } else if (userNumber < randNumber) {
        alert("Загаданное число больше вашего, повторите попытку");
    } else {
        alert("Ура, Вы угадали число");
        return;
    }
    }
     if(attemp==1){
         alert("у вас кончились попытки вы проиграли :(");
         if(confirm('хотите начать игру заново')){
             game();
         }else{
             return;
         }
     }
     alert("у вас осталось "+(--attemp)+" попыток");
     
  }
  trying()}
  trying()

}
game();