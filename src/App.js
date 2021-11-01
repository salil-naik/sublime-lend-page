import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";

import { Header } from "./components/header/index";
import { Lend } from "./pages/lend/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/lend">
            <Lend />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
