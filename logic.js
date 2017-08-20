var inputString = "";
var inputNum = "";
var buttonList = ['oneButton','twoButton','threeButton','fourButton',
'fiveButton','sixButton','sevenButton','eightButton','nineButton'];
var elementList = [];

var inputBox = document.getElementById('inputDisplay');

console.log("Max input display length:",14);

for(var i = 0; i<buttonList.length; i++){
  var element = document.getElementById(buttonList[i]);
  element.addEventListener("click",function(){
    clickButton(this);
  });

  elementList.push(element);
}


function clickButton(element){
  if(inputBox.innerText.length < 10){
    var buttonNum = element.innerText
    inputNum = inputNum+buttonNum;
    inputBox.innerText = inputNum;
  }

  console.log("hello from button "+buttonNum);
}

var deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener("click",deleteDigit);

function deleteDigit(){
  if(inputBox.innerText.length>0){
    inputBox.innerText = inputBox.innerText.slice(0,-1);
    inputNum = inputNum.slice(0,-1);
  }
}

function printInput(){
  console.log(inputString);
}
