import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Contacts from './components/Contacts'
import Tags from './components/Tags'
import Recipes from './components/Recipes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
