import { Route, Link, NavLink, Redirect, Switch, Router } from 'react-router-dom';

import style from  './App.module.css';
import About from './components/About/About';
import Aside from './components/Aside/Aside';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main';

function App() { 
  return (
    <div className={style.app}>
        <Header></Header>

        <div className={style.container}>
        <Aside></Aside>

        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Main   path="/" component={Main}></Main>

        </Switch>
     
        </div>

        <Footer></Footer>
        
    </div>
  );
}

export default App;
