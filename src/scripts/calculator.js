import doCalculation from "./doCalculation";

const calculator = () => {
  const calculatorElement = document.querySelector(".calculator__container");
  const calculatorList = calculatorElement.querySelectorAll(
    ".calculator__list"
  );
  const output = document.querySelector(".calculator__output");

  let calculatorItems = [];
  calculatorList.forEach((item) => {
    let element = item.querySelectorAll(".calculator__items");
    calculatorItems = calculatorItems.concat([...element]);
  });

  function buttonClicked() {
    const self = this;
    const dataId = self.dataset.id;
    const displayNumber = output.textContent;
    calculatorItems.forEach((item) => item.classList.remove("is-depressed"));

    const previousKeyType = calculatorElement.dataset.previousKeyType;
    if (!dataId) {
      const numberContent = self.textContent;

      if (displayNumber === "0" || previousKeyType === "operator") {
        output.textContent = numberContent;
      } else {
        output.textContent = displayNumber + numberContent;
      }
    }

    if (
      dataId === "plus" ||
      dataId === "minus" ||
      dataId === "multi" ||
      dataId === "divide"
    ) {
      console.log("operators");
      self.classList.add("is-depressed");
      calculatorElement.dataset.previousKeyType = "operator";
      calculatorElement.dataset.firstValue = displayNumber;
      calculatorElement.dataset.action = dataId;
    }

    if (dataId === "dot") {
      output.textContent = displayNumber + ".";
    }

    if (dataId === "clear") {
      console.log("clear");
    }

    if (dataId === "equal") {
      console.log("equal");
      const firstvalue = calculatorElement.dataset.firstValue;
      const action = calculatorElement.dataset.action;
      const secondvalue = displayNumber;

      console.log(firstvalue, action, secondvalue);

      output.textContent = doCalculation(firstvalue, action, secondvalue);
    }
  }

  calculatorItems.forEach((item) => {
    item.addEventListener("click", buttonClicked);
  });
};

export default calculator;
