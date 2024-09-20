import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"element = {<Search />} >
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
