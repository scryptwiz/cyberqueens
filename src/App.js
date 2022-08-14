import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import { createStore } from 'redux'
import {Provider} from "react-redux";
import pageReducer from './Store/pageStore';
const pageStore = createStore(pageReducer)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Provider store={pageStore}><MainPage/></Provider>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
