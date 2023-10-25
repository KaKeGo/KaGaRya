import Layout from "./layout/Layout";
import { Routes, Route } from 'react-router-dom'

{/* Content */}
import Home from './content/Home/Home/Home'
import NewsView from './content/News/NewsView'
import About from './content/About/About'
{/* User */}
import LoginView from './content/Account/Login/LoginView'
import RegisterView from "./content/Account/Register/RegisterView";
import RegisterCompleted from "./containers/Pages/RegisterCompleted/RegisterCompleted";
import AccountActivatedSuccess from "./containers/Pages/AccountActivated/AccountActivatedSuccess/AccountActivatedSuccess";
import AccountActivated from "./containers/Pages/AccountActivated/AccountActivated/AccountActivated";
import AccountActivatedError from "./containers/Pages/AccountActivated/AccountActivatedError/AccountActivatedError";
import Profile from './content/Account/Profile/Profile'
import Settings from './content/Account/Settings/Settings'
{/* Game list */}
import GameHomeView from "./content/GamesList/GameHome/GameHomeView";
import GameCreate from "./content/GamesList/GameCreate/GameCreate";
import GameDetailView from "./content/GamesList/GameDetail/GameDetailView";
{/* Game event list */}
import RecentlyAddedFullGames from "./content/GamesList/RecentlyAddedGames/RecentlyAddedFullGames";
import Premiers from "./content/GamesList/Premiers/Premiers";
import UpcomingGames from "./content/GamesList/UpcomingGames/UpcomingGames";
import TodayRelesedGames from "./content/GamesList/TodayRelesedGames/TodayRelesedGames";
import RecentlyRelesed from "./content/GamesList/RecentlyRelesed/RecentlyRelesed";
import TopGames from "./content/GamesList/TopGames/TopGames";
{/* Anime list */}
import AnimeHomeView from "./content/AnimeList/AnimeHome/AnimeHomeView";


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>

            {/* Content */}
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<NewsView />}/>
            <Route path="/about" element={<About />}/>

            {/* User */}
            <Route path="/login" element={<LoginView />}/>
            <Route path="/register" element={<RegisterView />}/>
            <Route path="/register/completed" element={<RegisterCompleted />}/>
            <Route path="/accounts/activate/success" element={<AccountActivatedSuccess />}/>
            <Route path="/accounts/activated" element={<AccountActivated />}/>
            <Route path="/accounts/activate/error" element={<AccountActivatedError />}/>
            <Route path="/profile/:slug" element={<Profile />}/>
            <Route path="/profile/settings" element={<Settings />}/>

            {/* Game list */}
            <Route path="/game/list/:gameStatus" element={<GameHomeView />}/>
            <Route path="/game/add" element={<GameCreate />}/>
            <Route path="/game/list/detail" element={<GameDetailView />}/>
            {/* Game event list */}
            <Route path="/recentlyadded/more" element={<RecentlyAddedFullGames />}/>
            <Route path="/premiers/more" element={<Premiers />}/>
            <Route path="/upcoming/more" element={<UpcomingGames />}/>
            <Route path="/relesed/more" element={<TodayRelesedGames />}/>
            <Route path="/recentlyrelesed/more" element={<RecentlyRelesed />}/>
            <Route path="/topgames/more" element={<TopGames />}/>
            {/* AnimeList */}
            <Route path="/anime/list" element={<AnimeHomeView/>} />

          </Routes>
        </Layout>
    </div>
  );
}

export default App;
