const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelectorAll("[data-equals]");
const delButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]");


class calculator {
  constructor(previousOperandTextElement,currentOperandTextElement ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();

  };

  calculate(){
    let resultado

    const _previousOperand = parseFloat(this.previousOperand)
    const _currentOperand = parseFloat(this.currentOperand)
  }

  choseOperation(operation){
    if(this.previousOperand == ''){
      this.calculate()

    }



    this.operation = operation;
    this.previousOperand = `${this.currentOperand} ${this.operation}`;
    this.currentOperand= "";
  }

  appendNumber(number){
    if (this.currentOperand.includes(".") && number == ".") return;


    this.currentOperand = `${this.currentOperand}${number.toString()}`

  };

  clear() {

 
  this.currentOperand = '';
  this.previousOperand = '';
  this.operation = undefined;

};
updateDisplay(){
  this.previousOperandTextElement.innerText = this.previousOperand;
  this.currentOperandTextElement.innerText = this.currentOperand;
};

};

const calculator = new calculator (
  previousOperandTextElement,
  currentOperandTextElement
  );

  for(const numberButton of numberButtons){
    numberButton.addEventListener("click",() => {
      calculator.appendNumber(numberButton.innerText);
      calculator.updateDisplay();
    });
  };

for (const operationButton of operationButtons){
  numberButton.addEventListener("click", () => {
    calculator.choseOperation(operationButton.innerText);
    this.updateDisplay();
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clean();
  calculator.updateDisplay()
});

