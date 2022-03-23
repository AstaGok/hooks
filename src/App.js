import React from 'react'
import Text from "./components/Text";
import './components/Text.css';



function App() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <Text text={"Focused, had work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it."} maxLenght={35} />
                <Text text={"Focused, had work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.Focused, had work is the real key to to success."} maxLenght={45} />
            </div>
        </div>

    </div>
  );
}

export default App;
