import Alert from "./components/Alert"
import Button from "./components/Button"
import { useState } from "react"
import LinkButton from "./components/LinkButton";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() =>
        setAlertVisibility(false)}> My alert </Alert>}
      <div className="flex items-center justify-center">
        <Button color='bg-blue-900' onClick={() =>
          setAlertVisibility(true)}>
          Button</Button>
      </div>
      <LinkButton onClick={() => console.log('asdad')} />
    </div>
  )
}
export default App  
