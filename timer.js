
var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;

  document.styleSheets.display = "left";
  document.getElementById('count').innerHTML='Time Left:  ' + count ;

  if (count === 0){
  
    alert("You're out of time!");
  }
}, 1000);

    