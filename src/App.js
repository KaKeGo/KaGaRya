import Layout from "./layout/Layout";
import { Routes, Route } from 'react-router-dom'

import Home from './content/Home/Home/Home'
import Login from './content/Account/Login/Login'
import Register from './content/Account/Register/Register'
import About from "./content/About/About";


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/about" element={<About />}/>

          </Routes>
        </Layout>
    </div>
  );
}

export default App;
