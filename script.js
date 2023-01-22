var r1=Math.floor(Math.random()*6+1);
console.log(r1);
var img_1="dice"+r1+".png";
var left="images/"+img_1;
var image1=document.querySelectorAll("img")[0];
//var right_image="images/dice"+r1+".png";
image1.setAttribute("src",left);
//document.querySelectorAll("img")[1].setAttribute("src",right_image);
var r2=Math.floor(Math.random()*6+1);
var img_2="dice"+r2+".png";
var right="images/"+img_2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",right);
if(r1>r2)
{
    document.querySelector('h1').innerHTML="Player 1 wins !!! 🎉🎊🎊";
}
else if(r2>r1)
{
    document.querySelector('h1').innerHTML="Player2 wins !!! 🎉🎊🎊";

}
else 
{
    document.querySelector('h1').innerHTML="Oops 😒 tie";

}
