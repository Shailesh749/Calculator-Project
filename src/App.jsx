import styles from "./App.module.css";
import Container from "./Components/Container";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";


function App() {
  
  return (
    <>
    <Container>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
      </Container>
    </>
  )
}

export default App
