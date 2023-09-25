import './App.css';
import Alert from './components/Alert';
import MyNavBar1 from './components/MyNavBar1';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from 'react';

let obj = {
  name: "123456",
  age: "hello"
}

function App() {
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("  Light Mode has been enabled ", "success");
    }
    else {

      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("  Dark Mode has been enabled  ", "success");
    }
  }

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  return (
    <>
      <Router>

        <MyNavBar1 propsObj={obj} title="Formatter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">

          <Routes>
            <Route  exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
            <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />} />
          </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} /> */}
        </div>

      </Router>
    </>
  );
}

export default App;
