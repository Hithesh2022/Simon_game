let gamepattern=[];
let buttoncolours=["red","blue","green","yellow"];
let userclickedpattern=[];
let level=0;
let started=false;
$(document).keydown(function(){
    
    if(!started){
    
    $("#level-title").text("Level " + level);
    nextSequence();
    started=true;
    }
})




$(".btn").on("click", function()//can use $("btn").click(function(){});
 {
    let $button = $(this);
    let userchosencolour = $button.attr("id");
    userclickedpattern.push(userchosencolour);
    playsound(userchosencolour);
    $button.addClass('pressed');
    setTimeout(function() {
      $button.removeClass('pressed');
    }, 60);
    checkanswer(userclickedpattern.length-1)
  });
  
function nextSequence()
{
  userclickedpattern = [];
    level++;
    $("#level-title").text("Level " + level);
let randomnumber=Math.floor(Math.random()*3+1);

let randomchosencolour=buttoncolours[randomnumber];
gamepattern.push(randomchosencolour);
$("#" + randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomchosencolour);


}
function playsound(name)
{
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatepress(currentcolour)
{

}
function checkanswer(currentlevel)
{
   if(gamepattern[currentlevel] === userclickedpattern[currentlevel])
   { if (userclickedpattern.length === gamepattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
   }else{
    let audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass('game-over');
    setTimeout(function () {
      $("body").removeClass('game-over');
   },200);
   $("#level-title").text(" GAME OVER  Press any key to start");
   startover();
}
}
function startover()
{
level=0;
gamepattern=[];

started=false;

}