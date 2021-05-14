import React from "react";
import './App.css';
import { BrowserRouter ,Switch,Route} from "react-router-dom"
import History from "./History";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      {/* created a BrowserRouter wich will Route to the different Routes in the browser */}
      <BrowserRouter>
        {/* switch will switch you  to different routes */}
        <Switch>
              <Route exact path="/" component={ Home}/>
              <Route exact path="/history" component={ History }/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
