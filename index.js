//For the first image random code
var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6;
randomnumber1 = Math.floor(randomnumber1)+1;

var source1 = "images/dice"+randomnumber1+".png";
// var source11 = "images/"+source1;
document.querySelector(".img1").setAttribute("src",source1);



// for the second image second code
var randomnumber2 = Math.random();
randomnumber2 = randomnumber2*6;
randomnumber2 = Math.floor(randomnumber2)+1;

var source2 = "images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",source2);

//Decision Making..
if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}else if(randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS";

}else{
  document.querySelector("h1").innerHTML = "IT'S A DRAW";
}
