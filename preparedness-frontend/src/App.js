import React,{ useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import InputField from "./components/InputField"
import "./App.css"


const App = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [inputValue,setInputValue] = useState("")
  const handleInputChange = (event) => {
      setInputValue(event.target.value)
  }
  
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <InputField value={inputValue} onChange={handleInputChange}/>
        </div>
        {/* <Button>Click Me</Button> */}
        <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
        <ModalComponent modal={modal} toggle={toggle} inputValue={inputValue}/>

        <Button>Reset</Button>
      </div>
    </div>
  )
}

export default App
