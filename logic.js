var inputString = "";
var inputNum = "";
var buttonList = ['oneButton','twoButton','threeButton','fourButton',
'fiveButton','sixButton','sevenButton','eightButton','nineButton'];
var elementList = [];

console.log("Max input display length:",14);

for(var i = 0; i<buttonList.length; i++){
  var element = document.getElementById(buttonList[i]);
  element.addEventListener("click",function(){
    clickButton(this);
  });

  elementList.push(element);
}


function clickButton(element){
  buttonNum = element.innerText
  inputNum = inputNum+buttonNum;
  console.log("hello from button "+buttonNum);
}

function printInput(){
  console.log(inputString);
}
