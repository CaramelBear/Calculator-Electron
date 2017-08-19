var inputString = "";
var inputNum = "";
var buttonList = ['oneButton','twoButton','threeButton','fourButton',
'fiveButton','sixButton','sevenButton','eightButton','nineButton'];

var num1 = document.getElementById(buttonList[0]);
num1.addEventListener("click",function(){

  clickButton(this);
});

var num2 = document.getElementById(buttonList[1]);
num2.addEventListener("click",function(){

  clickButton(this);
});

var num3 = document.getElementById(buttonList[2]);
num3.addEventListener("click",function(){

  clickButton(this);
});

var num4 = document.getElementById(buttonList[3]);
num4.addEventListener("click",function(){

  clickButton(this);
});

var num5 = document.getElementById(buttonList[4]);
num5.addEventListener("click",function(){

  clickButton(this);
});

var num6 = document.getElementById(buttonList[5]);
num6.addEventListener("click",function(){

  clickButton(this);
});

var num7 = document.getElementById(buttonList[6]);
num7.addEventListener("click",function(){

  clickButton(this);
});

var num8 = document.getElementById(buttonList[7]);
num8.addEventListener("click",function(){

  clickButton(this);
});

var num9 = document.getElementById(buttonList[8]);
num9.addEventListener("click",function(){

  clickButton(this);
});

var elementList = [];



function clickButton(element){
  buttonNum = element.innerText
  inputNum = inputNum+buttonNum;
  console.log("hello from button "+buttonNum);
  console.log("input number "+inputNum);
}
