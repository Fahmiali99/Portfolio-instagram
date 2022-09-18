import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
