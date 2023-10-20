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
import AccountActivatedSuccess from "./containers/Pages/AccountActivated/AccountActivatedSuccess/AccountActivatedSuccess";
import AccountActivated from "./containers/Pages/AccountActivated/AccountActivated/AccountActivated";
import AccountActivatedError from "./containers/Pages/AccountActivated/AccountActivatedError/AccountActivatedError";
import Profile from './content/Account/Profile/Profile'
{/* Game list */}
import GomeHomeView from "./content/GamesList/GameHome/GomeHomeView";
import AnimeHomeView from "./content/AnimeList/AnimeHome/AnimeHomeView";


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>

            {/* Content */}
            <Route path="/" element={<Home />}/>
<<<<<<< HEAD
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/about" element={<About />}/>
=======
            <Route path="/news" element={<NewsView />}/>
            <Route path="/about" element={<AboutView />}/>

            {/* User */}
            <Route path="/login" element={<LoginView />}/>
            <Route path="/register" element={<RegisterView />}/>
            <Route path="/register/completed" element={<RegisterCompleted />}/>
            <Route path="/accounts/activate/success" element={<AccountActivatedSuccess />}/>
            <Route path="/accounts/activated" element={<AccountActivated />}/>
            <Route path="/accounts/activate/error" element={<AccountActivatedError />}/>
            <Route path="/profile/:slug" element={<Profile />}/>

            {/* Game list */}
            <Route path="/game/list" element={<GomeHomeView />}/>
            {/* AnimeList */}
            <Route path="/anime/list" element={<AnimeHomeView/>} />
>>>>>>> recentlygames

          </Routes>
        </Layout>
    </div>
  );
}

export default App;
