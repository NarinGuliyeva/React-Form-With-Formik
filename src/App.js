import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import General from './Components/General';
import Portal from './Components/Portal';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
    <Route  path='/'  element={<General/>}/>
    <Route  path='/portal' element={<Portal/>} />
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
