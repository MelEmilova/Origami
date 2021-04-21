import style from  './App.module.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header'

function App() {
  return (
    <div className={style.app}>
        <Header></Header>

        <div className={style.container}>
        <Aside></Aside>
        </div>
        
    </div>
  );
}

export default App;
