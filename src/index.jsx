import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chatbot from './chatbot';
import ContextProvider from './context/context';
import { BrowserRouter ,Routes,Route,useParams} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chatbot/>}/>
      <Route path='/chatbot' element={<App/>}/>
    </Routes>
  
    </BrowserRouter>
  </React.StrictMode>
);
//  console.log(document.getElementsByClassName('App')[0]);
// let n= document.getElementsByClassName('App').length;
// for(let i=0;i<=n;i++){
//   console.log(document.getElementsByClassName('App')[i])
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
