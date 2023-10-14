import Layout from "./layout/Layout";
import { Routes, Route } from 'react-router-dom'

import Home from './content/Home/Home/Home'
import Login from './content/Account/Login/Login'
import Register from './content/Account/Register/Register'
import Profile from "./content/Account/Profile/Profile";


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/profile" element={<Profile />}/>

          </Routes>
        </Layout>
    </div>
  );
}

export default App;
