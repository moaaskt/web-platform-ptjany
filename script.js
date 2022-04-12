const numBotao = document.querySelectorAll("[data-number]");
const operationBotao = document.querySelectorAll("[data-operation]");
const equalsBotao = document.querySelectorAll("[data-equals]");
const delBotao = document.querySelectorAll("[data-delete]");
const allClearBotao = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]");


class Calculator {
  constructor(previousOperandTextElement,currentOperandTextElement ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();

  };

  choseOpertaion(operation){
    this.operation = operation;

    this.previousOperand = `${this.currentOperand} ${this.operation}`;
    this.currentOperand= "";
  }

  appendNumber(number){
    if (this.currentOperand.includes(".") && number == ".") return;


    this.currentOperand = `${this.currentOperand}${number.toString()}`

  };

  clean() {

 
  this.currentOperand = '';
  this.previousOperand = '';
  this.operationBotao = undefined;

};
updateDisplay(){
  this.previousOperandTextElement.innerText = this.previousOperand;
  this.currentOperandTextElement.innerText = this.currentOperand;
};

};

const Calculator = new Calculator (
  previousOperandTextElement,
  currentOperandTextElement
  );

  for(const numBotao of numBotaos){
    numBotao.addEventListener('click',() => {
      Calculator.appendNumber(numBotao.innerText);
      Calculator.updateDisplay();
    });
  };

for (const operationBotao of operationBotaos){
  numBotao.addEventListener("click", () => {
    Calculator.choseOpertaion(operationBotao.innerText);
    this.updateDisplay();
  });
}

allClearBotao.addEventListener('click', () => {
Calculator.clean();
Calculator.updateDisplay()
});

