import './App.css';
import {Route, Routes} from "react-router-dom"
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Authorized } from './components/views/Authorized';
import {ApplicationViews} from './components/views/ApplicationViews'

export const Nutshell = () => {
  return <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/home" element={
      
        <ApplicationViews />
      
    }>

    </Route>

  </Routes>
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
