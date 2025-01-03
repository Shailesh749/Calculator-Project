import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C","x","%","/","7",
    "8","9","*","4","5","6",
    "-","1","2","3","+","0",".","="
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
         <button 
         key={buttonName}
         className={styles.button}
         onClick={() => onButtonClick(buttonName)}>
          {buttonName}</button>
        )
        )}
    </div>
    
  );
};
export default ButtonContainer;