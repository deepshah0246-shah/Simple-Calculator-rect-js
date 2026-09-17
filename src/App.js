import { useState } from "react";
import "./App.css";

function App() {

  // Display
  const [display, setDisplay] = useState("");

  // First number
  const [firstNumber, setFirstNumber] = useState("");

  // Operator
  const [operator, setOperator] = useState("");

  // Next number ka signal
  const [newNumber, setNewNumber] = useState(false);

  // Calculation complete ka signal
  const [calculationDone, setCalculationDone] = useState(false);


  // =========================
  // NUMBER
  // =========================

  function numberClick(number) {

    if (newNumber) {

      setDisplay(number);

      setNewNumber(false);

    } else {

      setDisplay(display + number);

    }

  }


  // =========================
  // CE
  // =========================

  function clearClick() {

    setDisplay("");

    setFirstNumber("");

    setOperator("");

    setNewNumber(false);

    setCalculationDone(false);

  }


  // =========================
  // DEL
  // =========================

  function deleteClick() {

    setDisplay(display.slice(0, -1));

  }


  // =========================
  // DECIMAL
  // =========================

  function decimalClick() {

    if (!display.includes(".")) {

      setDisplay(display + ".");

    }

  }


  // =========================
  // OPERATOR
  // =========================

  function operatorClick(op) {

    if (calculationDone) {

      setFirstNumber(display);

      setCalculationDone(false);

    } else {

      setFirstNumber(display);

    }

    setOperator(op);

    setNewNumber(true);

  }


  // =========================
  // PERCENTAGE
  // =========================

  function percentClick() {

    const second = Number(display);


    // Simple percentage
    if (operator === "") {

      setDisplay(second / 100);

    }

    // Calculator percentage
    else {

      const first = Number(firstNumber);

      const percentage = (first * second) / 100;

      setDisplay(percentage);

    }

  }


  // =========================
  // EQUAL
  // =========================

  function equalClick() {

    const first = Number(firstNumber);

    const second = Number(display);

    let result;


    // Addition
    if (operator === "+") {

      result = first + second;

    }


    // Subtraction
    if (operator === "-") {

      result = first - second;

    }


    // Multiplication
    if (operator === "*") {

      result = first * second;

    }


    // Division
    if (operator === "/") {

      if (second === 0) {

        setDisplay("Error");

        return;

      }

      result = first / second;

    }


    setDisplay(result);

    setCalculationDone(true);

  }


  return (

    <div className="calculator-container">

      <div className="calculator">

        {/* Calculator Heading */}

        <div className="calculator-title">
          <h2>Calculator</h2>
          <p>React Calculator</p>
        </div>


        {/* Display */}

        <div className="display">

          <span>
            {display || "0"}
          </span>

        </div>


        {/* Buttons */}

        <div className="buttons">


          {/* Row 1 */}

          <button
            className="function-btn"
            onClick={clearClick}
          >
            CE
          </button>


          <button
            className="function-btn"
            onClick={deleteClick}
          >
            DEL
          </button>


          <button
            className="operator-btn"
            onClick={percentClick}
          >
            %
          </button>


          <button
            className="operator-btn"
            onClick={() => operatorClick("/")}
          >
            ÷
          </button>


          {/* Row 2 */}

          <button onClick={() => numberClick("7")}>
            7
          </button>


          <button onClick={() => numberClick("8")}>
            8
          </button>


          <button onClick={() => numberClick("9")}>
            9
          </button>


          <button
            className="operator-btn"
            onClick={() => operatorClick("*")}
          >
            ×
          </button>


          {/* Row 3 */}

          <button onClick={() => numberClick("4")}>
            4
          </button>


          <button onClick={() => numberClick("5")}>
            5
          </button>


          <button onClick={() => numberClick("6")}>
            6
          </button>


          <button
            className="operator-btn"
            onClick={() => operatorClick("-")}
          >
            −
          </button>


          {/* Row 4 */}

          <button onClick={() => numberClick("1")}>
            1
          </button>


          <button onClick={() => numberClick("2")}>
            2
          </button>


          <button onClick={() => numberClick("3")}>
            3
          </button>


          <button
            className="operator-btn"
            onClick={() => operatorClick("+")}
          >
            +
          </button>


          {/* Row 5 */}

          <button
            className="zero-btn"
            onClick={() => numberClick("0")}
          >
            0
          </button>


          <button onClick={decimalClick}>
            .
          </button>


          <button
            className="equal-btn"
            onClick={equalClick}
          >
            =
          </button>


        </div>

      </div>

    </div>

  );

}

export default App;