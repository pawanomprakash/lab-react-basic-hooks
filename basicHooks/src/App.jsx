import React,{ useState } from 'react';
import './App.css';
import UseStateEffectContext from './components/UseStateEffectContext';


function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseStateEffectContext/>
    </ToggleTheme.Provider>
  );
}
export const ToggleTheme = React.createContext()
  
export default App;