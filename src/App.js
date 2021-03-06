import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/Work';
import Nav from './components/Nav';
import WorkDetails from './components/WorkDetail'
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id" exact>
          <WorkDetails/>
        </Route>
        <Route path="/contact-us" exact>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
