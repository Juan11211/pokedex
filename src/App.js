import './App.css';
import Pokemon from './components/Pokemon';
import {Route, Routes} from 'react-router-dom' 
import Auth from './components/Auth/Auth';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
import Profile from './components/Profile';
import Feed from './components/Feed';
import BottomBar from './components/BottomBar/BottomBar'
function App() {





  return (
    <div>
    <Routes>
      <Route path='/signup' element={<Auth /> } />  
      <Route path='/' element={<Feed /> } /> 
    </Routes>
    <BottomBar /> 

    </div>
  );
}

export default App;
