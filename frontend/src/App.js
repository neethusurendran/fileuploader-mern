import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/body/Home';
import LoginPage from './components/body/LoginPage';
import RegisterPage from './components/body/RegisterPage';
import {BrowserRouter,Route} from "react-router-dom";
import Myfiles from "./components/Files/Myfiles";
import MainScreen from './components/body/MainScreen';
import Createfile from './components/Files/Createfile';
const App=()=> (
    <BrowserRouter>
     <Header/>
    
      <main>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/myfiles' component={Myfiles} />
        <Route path='/createfile' component={Createfile} />

       </main>
       <MainScreen/>
     <Footer/>
    </BrowserRouter>
  );


export default App;
