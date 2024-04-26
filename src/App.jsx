import './App.css'
import Header from './components/Header'
import CardDetail from './components/CardDetail'
import Cards from './components/Cards'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cart' element={<CardDetail/>}/>
    </Routes>
    </>
  );
}

export default App
