// import './App.css';
import api_key from './main';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import ContextProvider from './context/context';


function App() {
  console.log(document.getElementById('root'));
  // console.log(document.querySelector('.App'));
  return (
    <ContextProvider>

    <Sidebar/>
    <Main/>

    </ContextProvider>
  );
}

export default App;
