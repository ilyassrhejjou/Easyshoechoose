import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Component/Home';
import Encyclo from './Component/Encyclo';
import Parrainage from './Component/Parrainage';
import Contact from './Component/Contact';
import Error404 from './Component/Error404';
import Menu from './Component/Menu';
import Footer from './Component/Footer';
const App=()=>{
  return(
    <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/encyclopedie" component={Encyclo} />
      <Route path="/parrainage" component={Parrainage} />
      <Route path="/contact" component={Contact} />
      <Route component={Error404} />
    </Switch>
    <Footer/>
    </>

  )
}
export default App;