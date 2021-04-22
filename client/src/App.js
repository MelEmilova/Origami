import style from  './App.module.css';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main';

function App() { 
  return (
    <div className={style.app}>
        <Header></Header>

        <div className={style.container}>
        <Aside></Aside>
        <Main></Main>
        </div>

        <Footer></Footer>
        
    </div>
  );
}

export default App;
