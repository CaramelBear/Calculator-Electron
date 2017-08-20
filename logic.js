var inputString = "";
var inputNum = "";
var buttonList = ['zeroButton','oneButton','twoButton','threeButton','fourButton',
'fiveButton','sixButton','sevenButton','eightButton','nineButton'];
var elementList = [];

var operatorList = ['plusButton','minusButton','multiplyButton','divideButton'];

var inputBox = document.getElementById('inputDisplay');
var operationDisplay = document.getElementById('commands');


console.log("Max input display length:",14);

var commandOp = "";

var inputNum2 = "";

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

var clearButton = document.getElementById('clearButton');
clearButton.addEventListener("click", clearDigits);

function clearDigits(){
  console.log("clear button");
  inputBox.innerText = "";
  inputNum = "";
}

function printInput(){
  console.log(inputString);
}


for(var i = 0; i<operatorList.length;i++){
  var operation = document.getElementById(operatorList[i]);
  operation.addEventListener("click",function(){
    updateOperation(this);
  });
}

function updateOperation(command){


  if(operationDisplay.innerText.length>=0){
      commandOp = command;

      if(operationDisplay.innerText.length == 0){
        inputNum2 = inputNum;
        operationDisplay.innerText = inputNum + " "+command.innerText;
        inputNum = "";
        inputBox.innerText = "";
      }
  }

}


var equal = document.getElementById('equalsButton');
equal.addEventListener("click",function(){
  equalAmount();
});


function equalAmount(){
  if(operationDisplay.innerText != ""){
    console.log(inputNum);
    console.log(commandOp.innerText);
    console.log(inputNum2);

    operationDisplay.innerText = "";
    returnedResult = calculate(inputNum, commandOp.innerText, inputNum2);
    inputNum = returnedResult;
    inputBox.innerText = inputNum;
    inputNum = inputNum.toString();
    inputNum2 = "";
  }

}

function calculate(num1, operation, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var result;
  if(operation === "+"){
    result = num1 + num2;
  }else if(operation === "-"){
    result = num2 - num1;
  }else if(operation === "x"){
    result = num1 * num2;
  }else if(operation === "/"){
    result = num2 / num1;
  }
  return result;
}
