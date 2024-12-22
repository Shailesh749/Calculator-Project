import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
     if(buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    } else if(buttonText === "%"){
       const divideResult = calVal/calVal;
       setCalVal(divideResult);
    } else if(buttonText === "x") {
        const backSpace = calVal.slice(0, -1);
          setCalVal(backSpace);
        }
    else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  };
  
  return (
        <>
          <div className={styles.container}>
          <div className={styles.calculator}>
              <Display displayValue={calVal}></Display>
              <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
            </div>
            </div>
         </>
  )
}

export default App
