
import './App.css';
import ColorBox from './ColorBox';
import SearchColor from './SearchColor';
import {useState} from "react";
function App() {
    const[colorVal, setColor] = useState('');
    const[hexValue, setHexValue] = useState('');
    const[isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <ColorBox 
      colorVal={colorVal}
      hexValue = {hexValue}
      isDarkText = {isDarkText}

      />
      <SearchColor 
      colorVal = {colorVal}
      setColor = {setColor}
      hexValue = {hexValue}
      setHexValue = {setHexValue}
      isDarkText = {isDarkText}
      setIsDarkText = {setIsDarkText}
      
      />
    </div>
  );
}

export default App;
