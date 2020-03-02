import React from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header"
import Search from "./components/search"
import Saved from "./pages/saved"
import SearchPage from "./pages/searchPage"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route exact path="/saved" component={Saved}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
