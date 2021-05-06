import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Switch ,Route } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import Navbar from './components/Navbar/Navbar';
import AddArticle from './components/Article/AddArticle/AddArticle';
import ListArticle from './components/Article/ListArticle/ListArticle';
import DetailsArticle from './components/Article/DetailsArticle/DetailsArticle';
import Panier from './components/Panier/Panier';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/article">
            <AddArticle />
            <ListArticle />
          </Route>
          <Route exact path="/panier">
            <Panier />
          </Route>
          <Route exact path="/auth">

          </Route>
          <Route exact path="/article/:id" component={DetailsArticle} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
