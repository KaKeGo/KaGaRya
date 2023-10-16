import Layout from "./layout/Layout";
import { Routes, Route } from 'react-router-dom'

{/* Content */}
import Home from './content/Home/Home/Home'
import NewsView from './content/News/NewsView'
import AboutView from './content/About/AboutView'
{/* User */}
import LoginView from './content/Account/Login/LoginView'
import RegisterView from "./content/Account/Register/RegisterView";
import RegisterCompleted from "./containers/Pages/RegisterCompleted/RegisterCompleted";
import AccountActivated from "./containers/Pages/AccountActivated/AccountActivated";
import Profile from './content/Account/Profile/Profile'
{/* Game list */}
import GameListView from './content/GamesList/GameList/GameListView'


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>

            {/* Content */}
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<NewsView />}/>
            <Route path="/about" element={<AboutView />}/>

            {/* User */}
            <Route path="/login" element={<LoginView />}/>
            <Route path="/register" element={<RegisterView />}/>
            <Route path="/register/completed" element={<RegisterCompleted />}/>
            <Route path="/accounts/activate/" element={<AccountActivated />}/>
            <Route path="/profile" element={<Profile />}/>

            {/* Game list */}
            <Route path="/game/list" element={<GameListView />}/>

          </Routes>
        </Layout>
    </div>
  );
}

export default App;
